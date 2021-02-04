async function getStats() {
    const response = await fetch(`https://ovrstat.com/stats/pc/Sergini-21678`)
    const data = await response.json()

    console.log(data)
    return data
}

// Only show top 3 heroes WIP !!!
function timePlayedStringToDateObject(hero) {
    let timePlayedOfHeroToDate = new Date()
    let [hours, minutes, seconds] = hero.timePlayed.split(':')
    return timePlayedOfHeroToDate
}

function getPlaytimesOfTop3HeroesWithHighestPlaytime(topHeroes) {

    let top3HeroesWithHighestPlaytime = []

    for (const heroProperty in topHeroes) {
        if (top3HeroesWithHighestPlaytime.length <= 0) {
            top3HeroesWithHighestPlaytime.push(topHeroes[heroProperty])
            continue
        } else {
            top3HeroesWithHighestPlaytime.find(hero => {
                // console.log(timePlayedOfHeroToDate)
                if (timePlayedStringToDateObject(hero) < timePlayedStringToDateObject(topHeroes[heroProperty])) {
                    top3HeroesWithHighestPlaytime.push(topHeroes[heroProperty])
                }
            })
        }
        console.log(top3HeroesWithHighestPlaytime)
            // console.log(topHeroes[heroProperty].timePlayed)
    }
}
// ----------------------------------

async function main() {
    const info = await getStats()
    const userProfile = document.querySelector('.profile')

    const profileElement =
        `<img id="icon" src="${info.icon}">
        <span>${info.prestige}${info.level}</span>
        <span>${info.name}</span>
        <span>Games won: ${info.gamesWon}</span>
        <span>Endorsement: ${info.endorsement}</span>`

    userProfile.insertAdjacentHTML('beforeend', profileElement)

    const quickStats = document.querySelector('.quick')
    const quickInfo = info.competitiveStats.careerStats.allHeroes.game;
    const quickElement =
        `<h1>Algemene game statistieken van huidig competitief seizoen van alle heroes:</h1>
            <span>Aantal games gespeeld: ${quickInfo.gamesPlayed}</span>
            <span>Aantal games verloren: ${quickInfo.gamesLost}</span>
            <span>Aantal games gelijk gespeeld: ${quickInfo.gamesTied}</span>
            <span>Aantal games gewonnen: ${quickInfo.gamesWon}</span>
            <span>Aantal gespeelde tijd: ${quickInfo.timePlayed}</span>`

    quickStats.insertAdjacentHTML('beforeend', quickElement)

    const compStats = document.querySelector('.comp')
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
    // getPlaytimesOfTop3HeroesWithHighestPlaytime(topHeroes)

    // const playTime = info.quickPlayStats.topHeroes["reinhardt"].timePlayed
    // console.log(playTime)

    // const playTime = info.quickPlayStats.topHeroes.timePlayed
    // console.log(playTime)

    // const reversed = Object.getOwnPropertyNames(info.quickPlayStats.topHeroes).sort()
    // console.log(reversed)
}

main()