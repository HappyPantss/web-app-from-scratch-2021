import { fetchData } from '../api/api.js'
import { cleanData } from '../components/cleanData.js'

export async function overview() {
    const info = await fetchData()
    const topHeroArray = await cleanData()
    const heroDetail = document.querySelector('.heroDetail')
    heroDetail.innerHTML = ''
    const userProfile = document.querySelector('.profileStats')
    userProfile.innerHTML = ''
    const heroSection = document.querySelector('.heroSection')
    heroSection.innerHTML = ''
    heroSection.classList.remove('hide')

    const profileElement =
        `<article>
            <img id="icon" src="${info.icon}">
            <span>${info.prestige}${info.level}</span>
            <span>${info.name.split('#')[0]}</span>
            <span>Gewonnen games: ${info.gamesWon}</span>
            <span>Endorsement: ${info.endorsement}</span>
        </article>`

    userProfile.insertAdjacentHTML('beforeend', profileElement)

    let sortedArray = topHeroArray.sort((item1, item2) => item2.gamesWon - item1.gamesWon) // Sort on total games won

    document.querySelector('.hero').style.backgroundImage = `url(https://d1u1mce87gyfbn.cloudfront.net/hero/` + sortedArray[0].name + `/career-portrait.png)`;

    const heroList = sortedArray.map(hero => ( // 
            `<a href="#hero/${hero.name}">
            <article>
                <h2>${hero.name}</h2>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/${hero.name.replace(/([A-B])/g, '-$1').replace(/(\d+)/g, '-$1').toLowerCase()}/hero-select-portrait.png">
            </article>
        </a>`
        )).join(' ') // Delete all whitespaces and ,

    heroSection.insertAdjacentHTML('beforeend', heroList)
}