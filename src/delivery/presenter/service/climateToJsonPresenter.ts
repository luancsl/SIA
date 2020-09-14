import { ClimateCapsule } from "@domain/entity/ClimateCapsule";


export const climateToJsonPresenter = (climateCapsule: ClimateCapsule): object => {

    if (climateCapsule.station) {
        return {
            features: {
                service: climateCapsule.station.entity,
                type: 'station',
                parameters: {
                    location: {
                        lat: climateCapsule.lat,
                        lng: climateCapsule.lng,
                        elevation: climateCapsule.elevation,
                    },
                    station: {
                        name: climateCapsule.station.name,
                        city: climateCapsule.station.city,
                        state: climateCapsule.station.state,
                        country: climateCapsule.station.country,
                        distance: climateCapsule.station.distance,
                    },
                    startDate: climateCapsule.startDate,
                    endDate: climateCapsule.endDate,
                },
                data: climateCapsule.climates,
            }
        }
    } else {
        return {
            features: {
                service: 'nasaPower',
                type: 'satellite',
                parameters: {
                    location: {
                        lat: climateCapsule.lat,
                        lng: climateCapsule.lng,
                        elevation: climateCapsule.elevation,
                    },
                    startDate: climateCapsule.startDate,
                    endDate: climateCapsule.endDate,
                },
                data: climateCapsule.climates,
            }
        }
    }


}