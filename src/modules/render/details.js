import { cleanData } from '../components/cleanData.js'

export async function renderDetail(name) {
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
        <p>Games won: <span>${hero.gamesWon}</span></p>
        <p>Time played: <span>${hero.timePlayed}</span></p>
        <p>Eliminations per life: <span>${hero.eliminationsPerLife}</span></p>
        <p>Best multikill: <span>${hero.multiKillBest}</span></p>
        <p>Objective kills: <span>${hero.objectiveKills}</span></p>
        <p>Weapon accuracy: <span>${hero.weaponAccuracy}</span></p>
        <p>Win percentage: <span>${hero.winPercentage}</span></p>`

    heroDetail.insertAdjacentHTML('beforeend', profileElement)

}