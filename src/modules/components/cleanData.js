import { fetchData } from '../api/api.js'

export async function cleanData() {
    const info = await fetchData()

    return Object.entries(info.competitiveStats.topHeroes).map(x => { // Map the array

        return {
            name: x[0], // Key
            ...x[1] // Value
        }
    })
}

cleanData()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries