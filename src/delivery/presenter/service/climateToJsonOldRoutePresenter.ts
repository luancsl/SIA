import { ClimateCapsule, Clime } from "@domain/entity";


export const climeToJsonOldRoutePresenter = (clime: Clime): object => {
    const { date, tMax, tMin, hum, windS, radQg, radQo, ...rest } = clime;
    return {
        Date: date,
        Tmax: tMax ?? -99,
        Tmin: tMin ?? -99,
        Hum: hum ?? -99,
        Wind: windS ?? -99,
        Rad_Qg: radQg ?? -99,
        Rad_Q0: radQo ?? -99,
        ...rest,
    }
}

export const climateToJsonOldRoutePresenter = (climateCapsule: any): object => {

    if (climateCapsule.station) {
        return {
            features: {
                service: climateCapsule.station.entity,
                type: 'station',
                parameters: {
                    location: {
                        lat: climateCapsule.lat,
                        lon: climateCapsule.lng,
                        elevation: climateCapsule.elevation,
                    },
                    start_date: climateCapsule.startDate,
                    end_date: climateCapsule.endDate,
                    name: climateCapsule.station.name,
                    city: climateCapsule.station.city,
                    state: climateCapsule.station.state,
                    coutry: climateCapsule.station.country,
                    distance: climateCapsule.station.distance.toFixed(3),
                    equation: climateCapsule.climates[0].equation
                },
                data: climateCapsule.climates.map(climeToJsonOldRoutePresenter),
            }
        }
    } else {
        return {
            features: {
                service: 'nasa_power',
                type: 'satellite',
                parameters: {
                    location: {
                        lat: climateCapsule.lat,
                        lon: climateCapsule.lng,
                        elevation: climateCapsule.elevation,
                    },
                    start_date: climateCapsule.startDate,
                    end_date: climateCapsule.endDate,
                    equation: climateCapsule.climates[0].equation
                },
                data: climateCapsule.climates.map(climeToJsonOldRoutePresenter),
            }
        }
    }


}