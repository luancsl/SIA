import { IStationGateway } from "@src/data/gateway/stationGateway";
import { StationModel, IStationModel } from "@src/main/model";
import { Model } from "mongoose";
import { Station } from "@domain/entity";

export class StationGateway implements IStationGateway {

    private _model: Model<IStationModel>;

    constructor() {
        this._model = StationModel;
    }

    getAll(): Promise<Station[]> {
        return this._model.find().then(docs => {
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

        const degreeToKm = 109.98;
        const rad = distance / degreeToKm;

        const location = {
            near: [lat, lng],
            spherical: false,
            maxDistance: rad,
            distanceMultiplier: degreeToKm,
            distanceField: 'distance'
        };

        const payload = [{ $geoNear: location }, { $match: query }];

        return this._model.aggregate(payload).then(docs => {
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