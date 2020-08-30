import { IProvider } from "@domain/usercase";
import { Clime } from "@domain/usercase/culture/node_modules/@src/main/factories/node_modules/@domain/entities";
import request from "request";
import cheerio from "cheerio";
import dataForge from "data-forge";
import dayjs from "dayjs";
import config from "@config";

export class InmetProvider implements IProvider {


    getClime(): Clime {

        let dataFrame = new dataForge.DataFrame({
            columnNames: ['Date', 'UTC', 'Tmax', 'Tmin', 'Hum', 'Wind', 'Rad_Qg', 'Rad_Q0']
        });


    }
}