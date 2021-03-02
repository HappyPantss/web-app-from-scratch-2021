export async function login() {
    const userProfile = document.querySelector('.profileStats')
    userProfile.innerHTML = ''

    const profileElement =
        `<form action="#overview" style="margin:auto;max-width:300px">
            <input type="text" placeholder="Sergini" name="username" id="username" value="Sergini">
            <input type="text" placeholder="#21678" name="userid" id="userid" value="#21678">
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>`

    userProfile.insertAdjacentHTML('beforeend', profileElement)
}