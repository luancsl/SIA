
export type Station = {
    _id?: string;
    stationCod: string,
    name?: string,
    wsiCod?: string,
    oscarCod?: string,
    status: string,
    type: string,
    city?: string,
    state?: string,
    country: string,
    url?: string,
    entity: string,
    location: {
        type: string,
        coordinates: [number, number]
    },
    elevation?: number,
    distance?: number,
}
