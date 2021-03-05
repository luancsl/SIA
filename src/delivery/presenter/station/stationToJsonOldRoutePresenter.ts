import { Station } from "@domain/entity/Station";


export const stationToJsonOldRoutePresenter = (station: Station): object => {

    const payload = {
        _id: station._id,
        station_cod: station.stationCod,
        elevation: station.elevation,
        city: station.city,
        state: station.state,
        country: station.country,
        entity: station.entity,
        url: station.url,
        location: [station.location.coordinates[1], station.location.coordinates[0]],
        distance: station.distance,
    }

    return payload;

}