// import { overview, detail } from './render.js'
// import { overview } from '../render/overview.js'
// import { detail } from '../render/details.js'

export default function handleRoutes() {
    // routie('', overview)
    // routie('overview', overview)
    // routie('game/:id', detail)
    routie('hero/:name', function() {
        console.log('Homepage')
    });
}

// '/:id'