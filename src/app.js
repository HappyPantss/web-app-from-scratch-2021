import { fetchData } from './modules/api.js'

console.log(fetchData.data)

async function main() {
    const info = await fetchData()
    const userProfile = document.querySelector('.profileStats')
    const quickStats = document.querySelector('.quick')
    const compStats = document.querySelector('.comp')

    const profileElement =
        `<img id="icon" src="${info.icon}">
        <span>${info.prestige}${info.level}</span>
        <span>${info.name.split('#')[0]}</span>
        <span>Games won: ${info.gamesWon}</span>
        <span>Endorsement: ${info.endorsement}</span>`

    userProfile.insertAdjacentHTML('beforeend', profileElement)

    const quickInfo = info.competitiveStats.careerStats.allHeroes.game;
    const quickElement =
        `<h1>Algemene game statistieken van huidig competitief seizoen van alle heroes:</h1>
            <span>Aantal games gespeeld: ${quickInfo.gamesPlayed}</span>
            <span>Aantal games verloren: ${quickInfo.gamesLost}</span>
            <span>Aantal games gelijk gespeeld: ${quickInfo.gamesTied}</span>
            <span>Aantal games gewonnen: ${quickInfo.gamesWon}</span>
            <span>Aantal gespeelde tijd: ${quickInfo.timePlayed}</span>`

    quickStats.insertAdjacentHTML('beforeend', quickElement)

    const compInfo = info.competitiveStats.careerStats.allHeroes.game;
    const compElement =
        `<h1>Algemene game statistieken van huidig competitief seizoen van alle heroes:</h1>
        <span>Aantal games gespeeld: ${compInfo.gamesPlayed}</span>
        <span>Aantal games verloren: ${compInfo.gamesLost}</span>
        <span>Aantal games gelijk gespeeld: ${compInfo.gamesTied}</span>
        <span>Aantal games gewonnen: ${compInfo.gamesWon}</span>
        <span>Aantal gespeelde tijd: ${compInfo.timePlayed}</span>`

    compStats.insertAdjacentHTML('beforeend', compElement)

    // const topHeroes = info.quickPlayStats.topHeroes
    // getPlayTime(topHeroes)

    // const playTime = info.quickPlayStats.topHeroes["reinhardt"].timePlayed
    // console.log(playTime)

    // const playTime = info.quickPlayStats.topHeroes.timePlayed
    // console.log(playTime)

    // const reversed = Object.getOwnPropertyNames(info.quickPlayStats.topHeroes).sort()
    // console.log(reversed)
}

main()