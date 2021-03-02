import { fetchData } from '../api/api.js'
import { cleanData } from '../components/cleanData.js'

export async function renderDetail(name) {
    const info = await fetchData()
    const topHeroArray = await cleanData()
    const heroDetail = document.querySelector('.heroDetail')
    heroDetail.innerHTML = ''
    const heroSection = document.querySelector('.heroSection')
    heroSection.classList.add('hide')
    heroSection.innerHTML = ''

    const hero = topHeroArray.find(hero => (
        hero.name.toLowerCase() === name.toLowerCase()
    ))

    document.querySelector('.hero').style.backgroundImage = `url(https://d1u1mce87gyfbn.cloudfront.net/hero/${hero.name.replace(/([A-B])/g, '-$1').replace(/(\d+)/g, '-$1').toLowerCase()}/career-portrait.png)`; // Change hero image with specifiek hero 

    const profileElement =
        `<h1>${hero.name}</h1>
        <p>timePlayed: ${hero.timePlayed}</p>
        <p>eliminationsPerLife: ${hero.eliminationsPerLife}</p>
        <p>gamesWon: ${hero.gamesWon}</p>
        <p>multiKillBest: ${hero.multiKillBest}</p>
        <p>objectiveKills: ${hero.objectiveKills}</p>
        <p>weaponAccuracy: ${hero.weaponAccuracy}</p>
        <p>winPercentage: ${hero.winPercentage}</p>`

    heroDetail.insertAdjacentHTML('beforeend', profileElement)

}