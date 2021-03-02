export async function fetchData() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const platform = urlParams.get('platform')
    const username = urlParams.get('username')

    const response = await fetch(`https://ovrstat.com/stats/` + platform + `/` + username)
    const data = await response.json()

    return data
}