import { fetchData } from './api.js'

export async function cleanData() {
    const info = await fetchData()
        // console.log(info.competitiveStats.topHeroes)

    const object1 = info.competitiveStats.topHeroes
        // console.log(Object.entries(object1))

    // Making a new array
    const topHeroArray = [];

    for (const [key, value] of Object.entries(object1)) { // Loop through all the objects in 'topHeroes'
        const newObject = { name: key } // Making a new object called 'name'
        const returnedTarget = Object.assign(newObject, value) // Add the value of name, to the object.. so it becomes: {name: 'ana'}.. and add this to the existing object

        topHeroArray.push(returnedTarget) // Push everything into the new array, so we can use this later
    }

    return topHeroArray
}

cleanData()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign