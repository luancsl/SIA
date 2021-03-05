export const culturePath = {
    get: {
        tags: ['Culture'],
        summary: 'Lists all registered cultures',
        description: 'This route returns an array with all registered crops and their respective properties',
        parameters: [
            {
                name: 'culture',
                in: 'query',
                description: 'Filter search by culture name',
                schema: {
                    type: 'string'
                },
                example: "Onion"
            },
            {
                name: 'type',
                in: 'query',
                description: 'filter search by crop type',
                schema: {
                    type: 'string'
                },
                example: 'white'
            },
            {
                name: 'class',
                in: 'query',
                description: 'filter search by culture class',
                schema: {
                    type: 'string'
                },
                example: 'vegetable'
            }
        ],
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: { $ref: '#/schemas/cultureSchema' }
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
        tags: ['Culture'],
        summary: 'Register a collection of cultures',
        description: 'Register one or more cultures',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/cultureSchema'
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

export const cultureSearch = {
    get: {
        tags: ['Culture'],
        summary: 'Find culture from a text',
        description: 'This route returns an array with all cultures found from the text given in order of greater identification',
        parameters: [
            {
                name: 'text',
                in: 'query',
                description: 'Search text',
                schema: {
                    type: 'string'
                },
                example: "small vegetables"
            }
        ],
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: { $ref: '#/schemas/cultureSchema' }
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
}

export const cultureIdPath = {
    parameters: [{
        name: 'cultureId',
        in: 'path',
        description: 'Id of a registered culture',
        schema: {
            type: 'hexadecimal string',
            format: '12-byte'
        },
        example: '507f1f77bcf86cd799439011'
    }],
    get: {
        tags: ['Culture'],
        summary: 'Search a culture',
        description: 'Search for a specific culture',
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/cultureSchema'
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
        tags: ['Culture'],
        summary: 'Update a culture record',
        description: 'Updates a previously registered culture',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/cultureSchema'
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'Success, returns the new updated culture',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/cultureSchema'
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
        tags: ['Culture'],
        summary: 'Removes a registered culture',
        description: 'Removes a previously registered crop',
        responses: {
            200: {
                description: 'Success, returns the removed culture',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/cultureSchema'
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