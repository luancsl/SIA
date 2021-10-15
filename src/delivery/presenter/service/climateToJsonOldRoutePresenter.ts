import { ClimateCapsule, Clime } from "@domain/entity";


export const climeToJsonOldRoutePresenter = (clime: any): object => {
    const { date, tMax, tMin, hum, windS, radQg, radQo, ...rest } = clime;
    console.log('PURE3 >>>', rest);
    return {
        Date: date,
        Tmax: tMax ?? -99,
        Tmin: tMin ?? -99,
        Hum: hum ?? -99,
        Wind: windS ?? -99,
        Rad_Qg: radQg ?? -99,
        Rad_Q0: radQo ?? -99,
        equation: rest.equation,
        Eto: rest.eto ? parseFloat(rest.eto.toFixed(2)) : -99
    }
}

export const climateToJsonOldRoutePresenter = (climateCapsule: any): object => {
    console.log('PURE45 >>>', climateCapsule);
    if (climateCapsule.station) {
        return {
            features: {
                service: climateCapsule.station.entity,
                type: 'station',
                parameters: {
                    location: {
                        lat: climateCapsule.lat,
                        lon: climateCapsule.lng,
                        elevation: climateCapsule.elevation ?? -99,
                    },
                    start_date: climateCapsule.startDate,
                    end_date: climateCapsule.endDate,
                    name: climateCapsule.station.name,
                    city: climateCapsule.station.city,
                    state: climateCapsule.station.state,
                    country: climateCapsule.station.country,
                    distance: parseFloat(climateCapsule.station.distance.toFixed(2)),
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
                        elevation: climateCapsule.elevation ?? -99,
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