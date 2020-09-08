export const climePath = {
    get: {
        tags: ['Clime'],
        summary: 'List climates',
        description: 'This route returns a matrix with all climates by date for a given coordinate',
        parameters: [
            {
                name: 'lat',
                in: 'query',
                required: true,
                description: 'Latitude coordinate',
                schema: {
                    type: 'number'
                },
                example: "-34.049733"
            },
            {
                name: 'lng',
                in: 'query',
                required: true,
                description: 'Longitude coordinate',
                schema: {
                    type: 'number'
                },
                example: "23.127510"
            },
            {
                name: 'startDate',
                in: 'query',
                required: true,
                description: 'Start date',
                schema: {
                    type: 'string',
                },
                example: '20200825'
            },
            {
                name: 'endDate',
                in: 'query',
                required: true,
                description: 'End date',
                schema: {
                    type: 'string',
                },
                example: '20200901'
            },
            {
                name: 'type',
                in: 'query',
                description: 'Type of measuring device',
                schema: {
                    enum: ['station', 'satellite'],
                },
                example: 'station'
            }
        ],
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/climeResponseSchema' ,
                        }
                    }
                }
            },
            204: {
                description: 'Success, but no data to display'
            },
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    }
}

