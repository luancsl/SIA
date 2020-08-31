
export type Clime = {
    id?: number;
    // date of the day it was measured
    date: string;
    // Last utc measure
    utc?: number;
    // maximum temperature
    tMax: number;
    // minimum temperature
    tMin: number;
    // humidity
    hum: number;
    // wind speed
    windS: number;
    // solar radiation at the top of the atmosphere
    radQo: number;
    // solar radiation on the surface
    radQg: number;

}