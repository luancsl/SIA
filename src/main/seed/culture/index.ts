import 'module-alias/register';
import config from "@src/main/config";
import mongoose from "mongoose";
import { AddCulture } from "@domain/usercase/culture/addCulture";
import { HttpRequestToCultureFactory } from "@src/main/factory"
import { CultureGateway } from "@src/infrastructure/db/mongoose";
import { IValidation, RequiredFieldValidation, ValidationComposite, } from "@src/helper/validations";
import { Culture } from "@domain/entity"
import { cultureSeed } from "./cultureSeed";
import { exit } from "process";

export * from "./cultureSeed";

export type CultureSeeds = {
    name: string,
    seed: object[]
}

export class CultureSeeder {

    private mongoose: any;
    private addCulture: AddCulture;
    seeds: CultureSeeds[] = [];

    constructor(mongoose: any, addCulture: AddCulture) {
        this.mongoose = mongoose;
        this.addCulture = addCulture;
        try {
            this.mongoose.connect(config.DATABASE_ADDR, {
                useNewUrlParser: true,
            });
        } catch (error) {
            console.log('erro: '.concat(error));
        }
    }

    addSeed(name: string, seed: object[]) {
        console.log("LA: ", seed.length);
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
                        const culture: Culture = new HttpRequestToCultureFactory({ body: obj }).make();
                        await this.addCulture.add(culture);
                        console.log(`add ${seed.name} ${count}...${seedSize}`);
                        count += 1;
                    } catch (err) {
                        console.log(err)
                        throw err
                    }

                }
            } catch (err) {
                if (err.name === 'MongoError') {
                    if (err.message.split(" ").includes("E11000")) {
                        console.warn('\x1b[33m%s\x1b[0m', `Database already populated with ${seed.name}!`);
                    } else {
                        console.log(err)
                    }
                } else {
                    console.log(err)
                    throw err;
                }
            }

        };
    }
}

export const cultureInit = async () => {

    const validations: IValidation[] = [
        new RequiredFieldValidation('name.enUS'),
        new RequiredFieldValidation('name.ptBR'),
        new RequiredFieldValidation('class.ptBR'),
        new RequiredFieldValidation('iniStagekc'),
        new RequiredFieldValidation('midStagekc'),
        new RequiredFieldValidation('endStagekc'),
        new RequiredFieldValidation('icon'),
        new RequiredFieldValidation('source'),
    ];

    const cultureSeeder = new CultureSeeder(mongoose, new AddCulture(new CultureGateway(), new ValidationComposite(validations)));


    cultureSeeder.addSeed('CultureSeed', cultureSeed);


    try {
        await cultureSeeder.populate();
    } catch (err) {
        console.error('\x1b[31m%s\x1b[0m', err);
    }

}

