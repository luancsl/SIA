export const climeSchema = {
    type: 'object',
    properties: {
        date: {
            type: 'string',
            description: 'Date of the day it was measured',
            example: '20200801'
        },
        tMax: {
            type: 'number',
            format: 'float',
            description: 'Maximum day temperature in °C',
            example: '12.63'
        },
        tMin: {
            type: 'number',
            format: 'float',
            description: 'Minimum day temperature in °C',
            example: '10.39'
        },
        hum: {
            type: 'number',
            format: 'float',
            description: 'humidity of the day in percentage %',
            example: '73.69'
        },
        windS: {
            type: 'number',
            format: 'float',
            description: 'Wind speed of the day in m/s',
            example: '6.15'
        },
        radQg: {
            type: 'number',
            format: 'float',
            description: 'Solar radiation on the surface of the day in MJ m^−2 day^−1',
            example: '9.24'
        },
        radQo: {
            type: 'number',
            format: 'float',
            description: 'Solar radiation at the top of the atmosphere on the day in MJ m^−2 day^−1',
            example: '22.03'
        }
    },
    required: []
}