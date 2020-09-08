export const climeResponseSchema = {
    type: 'object',    
    properties: {
        features: {
            type: 'object',
            description: 'Response resources',
            properties: {
                type: {
                    type: 'string',
                    description: 'Type of measuring device',
                    enum: ['station', 'satellite'],
                    example: 'station'
                },
                parameters: {
                    type: 'object',
                    description: 'Search related data',
                    properties: {
                        location: {
                            type: 'object',
                            description: 'Coordinate data and elevation of the location used for search',
                            properties: {
                                lat: {
                                    type: 'number',
                                    format: 'float',
                                    description: 'Latitude coordinate for informed to search',
                                    example: '-34.049733'
                                },
                                lng: {
                                    type: 'number',
                                    format: 'float',
                                    description: 'Longitude coordinate for informed to search',
                                    example: '23.127510'
                                },
                                elevation: {
                                    type: 'number',
                                    format: 'float',
                                    description: 'Elevation of the site above sea level in meters',
                                    example: '4.139784719576527'
                                },
                            }

                        },
                        station: {
                            type: 'object',
                            description: 'Data from the station used to obtain climatic data',
                            properties: {
                                name: {
                                    type: 'string',
                                    description: 'Station name',
                                    example: 'pennsylvania station'
                                },
                                city: {
                                    type: 'string',
                                    description: 'City where the station resides',
                                    example: 'Philadelphia'
                                },
                                state: {
                                    type: 'string',
                                    description: 'State where the station resides',
                                    example: 'pennsylvania'
                                },
                                coutry: {
                                    type: 'string',
                                    minLength: 2,
                                    maxLength: 2,
                                    description: 'Country where the station resides',
                                    example: 'US'
                                },
                                entity: {
                                    type: 'string',
                                    description: 'Entity responsible for the domain of the station',
                                    example: 'NOAA'
                                },
                                distance: {
                                    type: 'number',
                                    format: 'float',
                                    example: '220.00'
                                },
                            }
                        },
                        startDate: {
                            type: 'number',
                            format: 'int32',
                            description: 'Start date entered for search',
                            example: '20200801'
                        },
                        endDate: {
                            type: 'number',
                            format: 'int32',
                            description: 'End date entered for search',
                            example: '20200801'
                        },
                    }

                },
                data: {
                    type: 'array',
                    description: 'Array with the local climate data',
                    items: { $ref: '#/schemas/climeSchema' }
                },
            }

        }
    },
    required: []
}