export const cultureSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'object',
            description: 'Common names and scientific name',
            properties: {
                enUS: {
                    type: 'string',
                    description: 'Name in English language United States',
                    example: 'broccoli'
                },
                ptBR: {
                    type: 'string',
                    description: 'Name in Brazilian Portuguese language',
                    example: 'brócolis'
                },
                scientific: {
                    type: 'string',
                    description: 'Culture scientific name',
                    example: 'Brassica oleracea var'
                }
            },
            required: ['enUS', 'ptBR']
        },
        type: {
            type: 'object',
            description: 'Culture type',
            properties: {
                enUS: {
                    type: 'string',
                    description: 'Type in English language United States',
                    example: 'Purple Sprouting'
                },
                ptBR: {
                    type: 'string',
                    description: 'Type in Brazilian Portuguese language',
                    example: 'Brócolis roxo'
                },
            }
        },
        class: {
            type: 'object',
            description: 'Culture class',
            properties: {
                enUS: {
                    type: 'string',
                    description: 'Class in English language United States',
                    example: 'Small vegetables'
                },
                ptBR: {
                    type: 'string',
                    description: 'Class in Brazilian Portuguese language',
                    example: 'Vegetais pequenos'
                },
            },
            required: ['ptBR']
        },
        description: {
            type: 'object',
            description: 'Culture description',
            properties: {
                enUS: {
                    type: 'string',
                    description: 'Description in English language United States',
                    example: 'Broccoli, Brassica oleracea, is an herbaceous annual or biennial grown for its edible flower heads which are used as a vegetable. The broccoli plant has a thick green stalk, or stem, which gives rise to thick, leathery, oblong leaves which are gray-blue to green in color.'
                },
                ptBR: {
                    type: 'string',
                    description: 'Description in Brazilian Portuguese language',
                    example: 'Brócolis, Brassica oleracea, é um herbáceo anual ou bienal cultivado por suas flores comestíveis que são utilizadas como vegetais. A planta de brócolis tem um espesso caule verde, ou caule, que dá origem a folhas grossas, coriáceas e oblongas, que são de cor cinza-azulada a verde.'
                },
            }
        },
        iniStageKc: {
            type: 'number',
            format: 'float',
            minimum: 0,
            maximum: 9,
            description: 'Crop coefficient at the initial stage',
            example: 0.7
        },
        devStageKc: {
            type: 'number',
            format: 'float',
            minimum: 0,
            maximum: 9,
            description: 'Crop coefficient in the development phase',
            example: 1.05
        },
        midStageKc: {
            type: 'number',
            format: 'float',
            minimum: 0,
            maximum: 9,
            description: 'Crop coefficient mid-season',
            example: 1.05
        },
        endStageKc: {
            type: 'number',
            format: 'float',
            minimum: 0,
            maximum: 9,
            description: 'Crop coefficient last season',
            example: 0.95
        },
        cultureMonths: {
            type: 'array',
            description: 'Culture months',
            items: {
                type: 'number',
                format: 'int32',
                example: 9
            }
        },
        maxCropHeight: {
            type: 'number',
            format: 'float',
            minimum: 0,
            maximum: 15,
            description: 'Maximum crop height in (m)',
            example: 0.3
        },
        icon: {
            type: 'string',
            format: 'url',
            description: 'Culture image icon',
            example: 'https://seminisbrazil.s3.amazonaws.com/app/uploads/2019/06/Podridao-Mole-do-Brocolis.jpg'
        },
        images: {
            type: 'array',
            description: 'Some images of the culture',
            items: {
                type: 'object',
                properties: {
                    url: {
                        type: 'string',
                        format: 'url',
                        description: 'Image url',
                        example: 'https://seminisbrazil.s3.amazonaws.com/app/uploads/2019/06/Podridao-Mole-do-Brocolis.jpg'
                    },
                    source: {
                        type: 'string',
                        format: 'url',
                        description: 'Image source',
                        example: 'https://seminisbrazil.com'
                    }
                }
            }
        },
        regions: {
            type: 'array',
            description: 'Native culture regions and days of each stage',
            items: {
                type: 'object',
                properties: {
                    name: {
                        type: 'object',
                        properties: {
                            enUS: {
                                type: 'string',
                                description: 'Region or climate name in English language United States',
                                example: 'Calif. Desert, USA'
                            },
                            ptBR: {
                                type: 'string',
                                description: 'Region or climate name in Brazilian Portuguese language',
                                example: 'Deserto da Califórnia, EUA'
                            }
                        },
                        required: ['enUS', 'ptBR']

                    },
                    iniStageDays: {
                        type: 'number',
                        format: 'int32',
                        description: 'initial stage length in days',
                        example: 35
                    },
                    devStageDays: {
                        type: 'number',
                        format: 'int32',
                        description: 'development stage duration in days',
                        example: 45
                    },
                    midStageDays: {
                        type: 'number',
                        format: 'int32',
                        description: 'half-season internship duration in days',
                        example: 40
                    },
                    endStageDays: {
                        type: 'number',
                        format: 'int32',
                        description: "last season's internship duration in days",
                        example: 15
                    },
                    totalDays: {
                        type: 'number',
                        format: 'int32',
                        description: 'total length of crop growth in days',
                        example: 135
                    },
                    cultureMonths: {
                        type: 'array',
                        description: 'culture months',
                        items: {
                            type: 'number',
                            format: 'int32',
                            example: 9
                        }
                    }
                },
                required: ['iniStageDays', 'devStageDays', 'midStageDays', 'endStageDays', 'totalDays', 'cultureMonths']
            }
        },
        tags: {
            type: 'array',
            description: 'Culture related tags',
            items: {
                type: 'string',
                example: 'Small vegetables'
            }
        },
        source: {
            type: 'string',
            description: 'Data source',
            example: 'http://www.fao.org'
        }
    },
    required: ['source', 'icon', 'iniStageKc', 'devStageKc', 'midStageKc', 'endStageKc']
}