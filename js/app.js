async function getStats() {
    const response = await fetch(`https://ovrstat.com/stats/pc/Sergini-21678`)
    const data = await response.json()

    console.log(data)
    return data
}

// function getInfo(info) {
//     console.log(info.icon);
//     console.log(info.level);
// }

async function main() {
    const info = await getStats()
    const userProfile = document.querySelector('.profile')

    const profileElement =
        `<img id="icon" src="${info.icon}">
        <h1>${info.name}</h1>
        <h2>${info.prestige}${info.level}</h2>`

    userProfile.insertAdjacentHTML('beforeend', profileElement)
    const userStats = document.querySelector('.stats')

    const statsElement =
        `<h1>${info.quickPlayStats.topHeroes}</h1>`

    userStats.insertAdjacentHTML('beforeend', statsElement)


}

main()