import { fetchData } from '../api/api.js'

export async function cleanData() {
    const info = await fetchData()
        // console.log(info.competitiveStats.topHeroes)

    const topHeroes = info.competitiveStats.topHeroes
        // console.log(Object.entries(topHeroes))

    // Making a new array
    const topHeroArray = [];

    for (const [key, value] of Object.entries(topHeroes)) { // Loop through all the objects in 'topHeroes'
        const newObject = { name: key } // Making a new object called 'name'
        const returnedTarget = Object.assign(newObject, value) // Add the value of name, to the object.. so it becomes: {name: 'ana'}.. and add this to the existing object

        topHeroArray.push(returnedTarget) // Push everything into the new array, so we can use this later
    }

    // console.log(topHeroArray.map(a => a.name))

    return topHeroArray
}

cleanData()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign