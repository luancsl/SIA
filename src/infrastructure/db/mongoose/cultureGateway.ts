import { ICultureGateway } from "@src/data/gateway/cultureGateway";
import { CultureModel, ICultureModel } from "@src/main/model";
import { Model } from "mongoose";
import { Culture } from "@domain/entity";

export class CultureGateway implements ICultureGateway {

    private _model: Model<ICultureModel>;

    constructor() {
        this._model = CultureModel;
    }

    getAll(): Promise<Culture[]> {
        return this._model.find().then(docs => {
            const cultures: Culture[] = [];
            docs.forEach((doc, i) => {
                const culture: Culture = {
                    id: doc._id,
                    class: doc.class,
                    culture: doc.culture,
                    type: doc.type,
                    region: doc.region,
                    ini: doc.ini,
                    mid: doc.mid,
                    end: doc.end,
                    maxCropHeight: doc.maxCropHeight,
                    imageLink: doc.imageLink,
                }
                cultures.push(culture);
            });
            return cultures;
        });
    }

    getById(id: number): Promise<Culture> {
        return this._model.findById(id).then(doc => {
            const culture: Culture = {
                id: doc._id,
                class: doc.class,
                culture: doc.culture,
                type: doc.type,
                region: doc.region,
                ini: doc.ini,
                mid: doc.mid,
                end: doc.end,
                maxCropHeight: doc.maxCropHeight,
                imageLink: doc.imageLink,
            }
            return culture;
        });
    }

    add(culture: Culture): Promise<Culture> {
        return this._model.create(culture).then(doc => {
            const culture: Culture = {
                id: doc._id,
                class: doc.class,
                culture: doc.culture,
                type: doc.type,
                region: doc.region,
                ini: doc.ini,
                mid: doc.mid,
                end: doc.end,
                maxCropHeight: doc.maxCropHeight,
                imageLink: doc.imageLink,
            }
            return culture;
        });
    }

    update(id: number, culture: Culture): Promise<Culture> {
        return this._model.findByIdAndUpdate(id, culture).then(doc => {
            const culture: Culture = {
                id: doc._id,
                class: doc.class,
                culture: doc.culture,
                type: doc.type,
                region: doc.region,
                ini: doc.ini,
                mid: doc.mid,
                end: doc.end,
                maxCropHeight: doc.maxCropHeight,
                imageLink: doc.imageLink,
            }
            return culture;
        });

    }

    removeById(id: number): Promise<Culture> {
        return this._model.findByIdAndRemove(id).then(doc => {
            const culture: Culture = {
                id: doc._id,
                class: doc.class,
                culture: doc.culture,
                type: doc.type,
                region: doc.region,
                ini: doc.ini,
                mid: doc.mid,
                end: doc.end,
                maxCropHeight: doc.maxCropHeight,
                imageLink: doc.imageLink,
            }
            return culture;
        });
    }

    remove(culture: Culture): Promise<Culture> {
        return this._model.findOneAndRemove(culture).then(doc => {
            const culture: Culture = {
                id: doc._id,
                class: doc.class,
                culture: doc.culture,
                type: doc.type,
                region: doc.region,
                ini: doc.ini,
                mid: doc.mid,
                end: doc.end,
                maxCropHeight: doc.maxCropHeight,
                imageLink: doc.imageLink,
            }
            return culture;
        });
    }
}