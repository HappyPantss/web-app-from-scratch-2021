import { overview } from '../render/overview.js'
import { renderDetail } from '../render/details.js'

export default function handleRoutes() {
    routie({
        '': function() {
            overview()
        },
        'hero/:name': function(name) {
            renderDetail(name)
        }
    });
}