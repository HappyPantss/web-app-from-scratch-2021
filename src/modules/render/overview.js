import { fetchData } from '../api/api.js'
import { cleanData } from '../components/cleanData.js'

export async function overview() {
    const info = await fetchData()
    const topHeroArray = await cleanData()
    const userProfile = document.querySelector('.profileStats')
    const heroSection = document.querySelector('.heroSection')
        // const heroPortrait = '../public/img/portraits/'

    console.log(info)

    const profileElement =
        `<article>
            <img id="icon" src="${info.icon}">
            <span>${info.prestige}${info.level}</span>
            <span>${info.name.split('#')[0]}</span>
            <span>Gewonnen games: ${info.gamesWon}</span>
            <span>Endorsement: ${info.endorsement}</span>
        </article>`

    userProfile.insertAdjacentHTML('beforeend', profileElement)

    const heroList = topHeroArray.map(hero => (
        `<a href="/:name">
            <article>
                <h2>${hero.name}</h2>
                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/${hero.name}/hero-select-portrait.png">
                <h2>Tijd: ${hero.timePlayed}</h2>
            </article>
        </a>`
    )).join(' ')

    heroSection.insertAdjacentHTML('beforeend', heroList)

    // Competitive
    // const quickStats = document.querySelector('.competitiveStats')

    // const quickInfo = info.competitiveStats.careerStats.allHeroes.game;
    // const quickElement =
    //     `<h1>Algemene game statistieken van huidig competitief seizoen van alle heroes:</h1>
    //         <span>Aantal games gespeeld: ${quickInfo.gamesPlayed}</span>
    //         <span>Aantal games verloren: ${quickInfo.gamesLost}</span>
    //         <span>Aantal games gelijk gespeeld: ${quickInfo.gamesTied}</span>
    //         <span>Aantal games gewonnen: ${quickInfo.gamesWon}</span>
    //         <span>Aantal gespeelde tijd: ${quickInfo.timePlayed}</span>`

    // quickStats.insertAdjacentHTML('beforeend', quickElement)

    // Quick Play
    // const compStats = document.querySelector('.quickPlayStats')

    // const compInfo = info.quickPlayStats.careerStats.allHeroes.game;
    // const compElement =
    //     `<h1>Algemene game statistieken van huidig quick play matches van alle heroes:</h1>
    //     <span>Aantal games gespeeld: ${compInfo.gamesPlayed}</span>
    //     <span>Aantal games verloren: ${compInfo.gamesLost}</span>
    //     <span>Aantal games gelijk gespeeld: ${compInfo.gamesTied}</span>
    //     <span>Aantal games gewonnen: ${compInfo.gamesWon}</span>
    //     <span>Aantal gespeelde tijd: ${compInfo.timePlayed}</span>`

    // compStats.insertAdjacentHTML('beforeend', compElement)
}