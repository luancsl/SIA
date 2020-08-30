export const stationSchema = {
    type: 'object',
    properties: {
        stationCod: {
            type: 'string',
            description: 'Station code',
            example: 'A001'
        },
        name: {
            type: 'string',
            description: 'Station name',
            example: 'pennsylvania station'
        },
        wsiCod: {
            type: 'string',
            description: 'WIGOS Station Identifier (WSI) code',
            example: '0-76-0-2906907000000408'
        },
        oscarCod: {
            type: 'string',
            description: 'OSCAR station code',
            example: '0-2000-0-86765'
        },
        status: {
            type: 'string',
            description: 'Station operating status',
            enum: ['enabled', 'disabled'],
            example: 'enabled'
        },
        type: {
            type: 'string',
            description: 'Station work type',
            enum: ['automatic', 'manual'],
            example: 'automatic'
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
        country: {
            type: 'string',
            minLength: 2,
            maxLength: 2,
            description: 'Country where the station resides',
            example: 'US'
        },
        url: {
            type: 'string',
            format: 'url',
            description: 'Link to the station',
            example: 'https://www.entity.gov/stationcod'
        },
        entity: {
            type: 'string',
            description: 'Entity responsible for the domain of the station',
            example: 'NOAA'
        },
        location: {
            type: 'array',
            description: 'Station location coordinates',
            minItems: 2,
            maxItems: 2,
            items: {
                type: 'number',
                format: 'float'
            },
            example: [18.501516, -36.640265]

        },
        elevation: {
            type: 'string',
            description: 'Altitude above sea level in meters',
            example: 278
        }
    },
    required: ['stationCod', 'status', 'type', 'country', 'entity', 'location']
}