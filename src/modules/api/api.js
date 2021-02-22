export async function fetchData() {
    const response = await fetch(`https://ovrstat.com/stats/pc/Midnan-2237`)
    const data = await response.json()

    return data
}