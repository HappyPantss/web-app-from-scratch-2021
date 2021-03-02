import { overview } from '../render/overview.js'
import { renderDetail } from '../render/details.js'
import { login } from '../render/login.js'

export default function handleRoutes() {
    routie({
        '': function() {
            login()
        },
        'overview': function() {
            overview()
        },
        'hero/:name': function(name) {
            renderDetail(name)
        }
    });
}