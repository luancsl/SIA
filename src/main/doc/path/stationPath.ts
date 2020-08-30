export const stationPath = {
    get: {
        tags: ['Station'],
        summary: 'Lists all registered stations',
        description: 'This route returns a matrix with all registered stations and their respective properties',
        parameters: [
            {
                name: 'stationCod',
                in: 'query',
                description: 'Filter search by station code',
                schema: {
                    type: 'string'
                },
                example: "A336"
            },
            {
                name: 'stationName',
                in: 'query',
                description: 'Filter search by station name',
                schema: {
                    type: 'string'
                },
                example: "ALVORADA DO GURGUEIA"
            },
            {
                name: 'type',
                in: 'query',
                description: 'filter search by station type',
                schema: {
                    type: 'string',
                    enum: ['automatic', 'manual']
                },
                example: 'automatic'
            },
            {
                name: 'status',
                in: 'query',
                description: 'filter search by station status',
                schema: {
                    type: 'string',
                    enum: ['enabled', 'disabled']
                },
                example: 'enabled'
            }
        ],
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {$ref: '#/schemas/stationSchema'},
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
    },
    post: {
        tags: ['Station'],
        summary: 'Register a collection of stations',
        description: 'Register one or more stations',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/stationSchema'
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'Success'
            },
            400: {
                $ref: '#/components/badRequest'
            },
            403: {
                $ref: '#/components/forbidden'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    }
}

export const stationIdPath = {
    parameters: [{
        name: 'stationId',
        in: 'path',
        description: 'Id of a registered station',
        schema: {
            type: 'hexadecimal string',
            format: '12-byte'
        },
        example: '507f1f77bcf86cd799439011'
    }],
    get: {
        tags: ['Station'],
        summary: 'Search a station',
        description: 'Search for a specific station',
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/stationSchema'
                        }
                    }
                }
            },
            400: {
                $ref: '#/components/badRequest'
            },
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    },
    put: {
        tags: ['Station'],
        summary: 'Update a station record',
        description: 'Updates a previously registered station',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/stationSchema'
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'Success, returns the new updated station',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/stationSchema'
                        }
                    }
                }
            },
            400: {
                $ref: '#/components/badRequest'
            },
            401: {
                $ref: '#/components/unauthorized'
            },
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    },
    delete: {
        tags: ['Station'],
        summary: 'Removes a registered station',
        description: 'Removes a previously registered station',
        responses: {
            200: {
                description: 'Success, returns the removed station',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/stationSchema'
                        }
                    }
                }
            },
            401: {
                $ref: '#/components/unauthorized'
            },
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    },
}