
export type Station = {
    id?: number;
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
    location: Coordinates,
    elevation: number,
}

type Coordinates = [number, number]