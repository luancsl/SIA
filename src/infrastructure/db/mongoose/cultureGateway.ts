import { ICultureGateway } from "@src/data/gateway/cultureGateway";
import { CultureModel, ICultureModel } from "@src/main/model";
import { Model } from "mongoose";
import { Culture } from "@domain/entity";

export class CultureGateway implements ICultureGateway {

    private _model: Model<ICultureModel>;

    constructor() {
        this._model = CultureModel;
    }

    getAll(query: any = {}): Promise<Culture[]> {
        const { tags, ...rest } = query;
        const options = tags ? { tags: { $in: tags.split(",") }, ...rest } : rest;
        return this._model.find(options).then(docs => {
            const cultures: Culture[] = [];
            docs.forEach((doc, i) => {
                const culture: Culture = {
                    id: doc._id,
                    ...doc.toObject(),
                }
                cultures.push(culture);
            });
            return cultures;
        });
    }

    getById(id: number): Promise<Culture> {
        /* this._model.findByIdAndUpdate(id, { $inc: { access: 1 } }); */
        return this._model.findById(id).then(doc => {
            doc.access += 1;
            doc.save();
            console.log(doc.toObject())
            const culture: Culture = {
                id: doc._id,
                ...doc.toObject(),
            }
            return culture;
        });
    }

    getByText(text: string, query: object): Promise<Culture[]> {
        return this._model.find({ ...query, $text: { $search: text } }, { score: { $meta: "textScore" } })
            .sort({ score: { $meta: "textScore" } })
            .limit(20)
            .then(docs => {
                const cultures: Culture[] = docs;
                return cultures;
            });
    }

    add(culture: Culture): Promise<Culture> {
        return this._model.create(culture).then(doc => {
            const culture: Culture = {
                id: doc._id,
                ...doc.toObject()
            }
            return culture;
        });
    }

    update(id: number, culture: Culture): Promise<Culture> {
        return this._model.findByIdAndUpdate(id, culture).then(doc => {
            const culture: Culture = {
                id: doc._id,
                ...doc.toObject(),
            }
            return culture;
        });

    }

    removeById(id: number): Promise<Culture> {
        return this._model.findByIdAndRemove(id).then(doc => {
            const culture: Culture = {
                id: doc._id,
                ...doc.toObject()
            }
            return culture;
        });
    }

    remove(culture: Culture): Promise<Culture> {
        return this._model.findOneAndRemove(culture).then(doc => {
            const culture: Culture = {
                id: doc._id,
                ...doc.toObject()
            }
            return culture;
        });
    }
}