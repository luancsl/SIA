import paths from "./paths";
import components from "./components"
import schemas from "./schemas"

export const options = {
    openapi: '3.0.0',
    info: {
        title: 'SIA',
        version: '1.0.0',
        description: '# Smart Irrigation Assistant',
        'x-logo': {
            url: 'http://localhost:3000/public/siaLogo.png'
        }
    },
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