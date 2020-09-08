import { Station } from "@domain/entity/Station";


export const climateToJsonOldRoutePresenter = (station: Station): object => {

    const payload = {
        _id: station._id,
        station_cod: station.stationCod,
        elevation: station.elevation,
        city: station.city,
        state: station.state,
        country: station.country,
        url: station.url,
        location: [station.location.coordinates[0], station.location.coordinates[1]],
        distance: station.distance,
    }

    return payload;

}