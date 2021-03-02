export async function fetchData() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const username = urlParams.get('username')
    const userid = urlParams.get('userid').slice(1)

    const response = await fetch(`https://ovrstat.com/stats/pc/` + username + `-` + userid)
    const data = await response.json()

    return data
}