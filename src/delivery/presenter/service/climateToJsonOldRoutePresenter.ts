import { ClimateCapsule } from "@domain/entity/ClimateCapsule";


export const climateToJsonOldRoutePresenter = (climateCapsule: ClimateCapsule): object => {

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
                },
                data: climateCapsule.climates,
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
                },
                data: climateCapsule.climates,
            }
        }
    }


}