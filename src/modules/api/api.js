export async function fetchData() {
    const response = await fetch(`https://ovrstat.com/stats/pc/Sergini-21678`)
    const data = await response.json()

    return data
}