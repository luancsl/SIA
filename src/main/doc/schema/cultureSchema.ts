export const cultureSchema = {
    type: 'object',
    properties: {
        culture: {
            type: 'string',
            description: 'Culture name',
            example: 'cassava'
        },
        type: {
            type: 'string',
            description: 'Culture type',
            example: '1 year'
        },
        class: {
            type: 'string',
            description: 'Culture class',
            example: 'Roots and tubers'
        },
        ini: {
            type: 'number',
            format: 'float',
            minimum: 0,
            maximum: 9,
            description: 'Crop coefficient at the initial stage',
            example: 0.3
        },
        mid: {
            type: 'number',
            format: 'float',
            minimum: 0,
            maximum: 9,
            description: 'Crop coefficient in the development phase',
            example: 0.8
        },
        end: {
            type: 'number',
            format: 'float',
            minimum: 0,
            maximum: 9,
            description: 'Crop coefficient at the end of the season',
            example: 0.3
        },
        maxCropHeight: {
            type: 'number',
            format: 'float',
            minimum: 0,
            maximum: 15,
            description: 'Maximum crop height',
            example: 1.0
        },
        imageLink: {
            type: 'string',
            format: 'url',
            description: 'Culture image',
        },
        region: {
            type: 'string',
            description: 'Native culture region'
        },
    },
    required: ['culture', 'ini', 'mid', 'end', 'imageLink']
}