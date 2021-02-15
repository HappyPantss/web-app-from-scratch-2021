import { fetchData } from '../api/api.js'
import { cleanData } from '../components/cleanData.js'

export async function detail() {
    const info = await fetchData()
    const topHeroArray = await cleanData()
    const userProfile = document.querySelector('.profileStats')
    const heroSection = document.querySelector('.heroSection')
    const heroPortrait = '../public/img/portraits/'

    console.log(info)

    const profileElement =
        `<h1>${hero.name}</h1>`

    userProfile.insertAdjacentHTML('beforeend', profileElement)

}