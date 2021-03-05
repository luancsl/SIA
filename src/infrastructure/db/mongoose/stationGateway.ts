import { IStationGateway } from "@src/data/gateway/stationGateway";
import { stationModel, IStationModel } from "@src/main/model";
import { Model } from "mongoose";
import { Station } from "@domain/entity";

export class StationGateway implements IStationGateway {

    private _model: Model<IStationModel>;

    constructor() {
        this._model = stationModel;
    }

    getAll(query: any = {}): Promise<Station[]> {
        return this._model.find(query).then(docs => {
            const stations: Station[] = docs;
            return stations;
        });
    }

    getById(id: number): Promise<Station> {
        return this._model.findById(id).then(doc => {
            const station: Station = doc;
            return station;
        });
    }

    getByDistance(lat: number, lng: number, distance: number, query: object): Promise<Station[]> {

        /* const degreeToKm = 109.98;
        const rad = distance / degreeToKm; */

        return this._model.aggregate([
            {
                $geoNear: {
                    near: { type: "Point", coordinates: [lng, lat] },
                    distanceField: "distance",
                    distanceMultiplier: 0.001,
                    maxDistance: distance * 1000,
                    query: query,
                    spherical: true
                }
            }
        ]).then(docs => {
            const stations: Station[] = docs;
            return stations;
        });
    }

    add(station: Station): Promise<Station> {
        return this._model.create(station).then(doc => {
            const station: Station = doc;
            return station;
        });
    }

    update(id: number, station: Station): Promise<Station> {
        return this._model.findByIdAndUpdate(id, station).then(doc => {
            const station: Station = doc;
            return station;
        });

    }

    removeById(id: number): Promise<Station> {
        return this._model.findByIdAndRemove(id).then(doc => {
            const station: Station = doc;
            return station;
        });
    }

    remove(station: Station): Promise<Station> {
        return this._model.findOneAndRemove(station).then(doc => {
            const station: Station = doc;
            return station;
        });
    }
}