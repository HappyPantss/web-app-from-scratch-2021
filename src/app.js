import { fetchData } from './modules/api.js'
import { cleanData } from './modules/cleanData.js'

async function main() {
    const info = await fetchData()
    const topHeroArray = await cleanData()
    const heroSection = document.querySelector('.heroSection')
    const userProfile = document.querySelector('.profileStats')

    // console.log(topHeroArray)

    const heroList = topHeroArray.map(hero => (
        `<article>
            <h2>Name: ${hero.name}</h2>
            <p>${hero.eliminationsPerLife}</p>
        </article>`
    )).join(' ')

    const profileElement =
        `<img id="icon" src="${info.icon}">
        <span>${info.prestige}${info.level}</span>
        <span>${info.name.split('#')[0]}</span>
        <span>Gewonnen games: ${info.gamesWon}</span>
        <span>Endorsement: ${info.endorsement}</span>`

    userProfile.insertAdjacentHTML('beforeend', profileElement)
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

main()