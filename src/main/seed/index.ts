import 'module-alias/register';
import config from "@src/main/config";
import mongoose from "mongoose";
import { AddStation } from "@domain/usercase/station/addStation";
import { HttpRequestToStationFactory } from "@src/main/factory"
import { StationGateway } from "@src/infrastructure/db/mongoose";
import { IValidation, RequiredFieldValidation, ValidationComposite, } from "@src/helper/validations";
import { Station } from "@domain/entity"
import { afrigisStationSeed } from "./afrigisStationSeed";
import { inmetStationSeed } from "./inmetStationSeed";
import { exit } from "process";

export * from "./inmetStationSeed";
export * from "./afrigisStationSeed";

export type Seeds = {
    name: string,
    seed: object[]
}

export class StationSeeder {

    private mongoose: any;
    private addStation: AddStation;
    seeds: Seeds[] = [];

    constructor(mongoose: any, addStation: AddStation) {
        this.mongoose = mongoose;
        this.addStation = addStation;
        try {
            this.mongoose.connect(config.DATABASE_ADDR, {
                useNewUrlParser: true,
            });
        } catch (error) {
            console.log('erro: '.concat(error));
        }
    }

    addSeed(name: string, seed: object[]) {
        this.seeds.push({
            name,
            seed
        })
    }

    async populate() {
        for (const seed of this.seeds) {
            console.log('\x1b[36m%s\x1b[0m', `Adding ${seed.name}...`);
            const seedSize = seed.seed.length;
            let count = 1;
            try {
                for (const obj of seed.seed) {
                    try {
                        const station: Station = new HttpRequestToStationFactory({ body: obj }).make();
                        await this.addStation.add(station);
                        console.log(`add ${seed.name} ${count}...${seedSize}`);
                        count += 1;
                    } catch (err) {
                        throw err
                    }

                }
            } catch (err) {
                if (err.name === 'MongoError') {
                    if (err.message.split(" ").includes("E11000")) {
                        console.warn('\x1b[33m%s\x1b[0m', `Database already populated with ${seed.name}!`);
                    }
                } else {
                    throw err;
                }
            }

        };
    }
}

const init = async () => {

    const validations: IValidation[] = [
        new RequiredFieldValidation('stationCod'),
        new RequiredFieldValidation('location'),
        new RequiredFieldValidation('entity'),
        new RequiredFieldValidation('country'),
        new RequiredFieldValidation('status'),
        new RequiredFieldValidation('type'),
    ];

    const stationSeeder = new StationSeeder(mongoose, new AddStation(new StationGateway(), new ValidationComposite(validations)));

    stationSeeder.addSeed('AfrigisStationSeed', afrigisStationSeed);
    stationSeeder.addSeed('InmetStationSeed', inmetStationSeed);

    try {
        await stationSeeder.populate();
        process.exit();
    } catch (err) {
        console.error('\x1b[31m%s\x1b[0m', err);
        process.exit();
    }

}

init();

