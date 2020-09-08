import paths from "./paths";
import components from "./components"
import schemas from "./schemas"

export const options = {
    openapi: '3.0.0',
    info: {
        title: 'SIA',
        version: '1.0.0',
        description: '# Smart Irrigation Assistant\n The **SIA API** is a computer program stored in the cloud that has the functionality of serving and providing reference evapotranspiration data (ETo) for a given location, obtaining and crossing data from terrestrial weather stations and the NASA Power service, in addition to providing specific data. of hundreds of registered cultures as the crop coefficient, an indispensable data in the calculation of the actual culture evapotranspiration (ETc).\n Among the main resources, we have:\n - Easy to obtain data accessed from anywhere;\n - Specific and self-declared endpoints for each type of data, facilitating public use by any professional in the field of agrometeorology;\n - Possibility of adding new crop data and resources under the review of agrometeorology professionals;\n - Enables the addition of new services providing meteorological data;\n - Providing easy implementation in other IT projects, through its flexible nature, obtaining data by message in a standardized HTTP protocol does not depend on the technology used in the project.',
        'x-logo': {
            url: 'http://173.82.232.87:3000/public/siaLogo.png'
        }
    },
    servers: [{
        url: '/api',
        description: 'Servidor Principal'
    }],
    tags: [
        {
            name: 'Culture',
            description: 'Culture-related APIs',
        },
        {
            name: 'Station',
            description: 'Station-related APIs',
        },
        {
            name: 'Clime',
            description: 'Service-related APIs',
        }
    ],
    'x-tagGroups': [
        {
            name: 'General',
            tags: ['Culture', 'Station']
        },
        {
            name: 'Services',
            tags: ['Clime']
        }
    ],
    paths,
    schemas,
    components,
};