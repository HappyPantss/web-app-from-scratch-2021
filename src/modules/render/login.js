export async function login() {
    const userProfile = document.querySelector('.profileStats')
    userProfile.innerHTML = ''

    const profileElement =
        `<form action="#overview" style="margin:auto;max-width:400px">

        <input type="text" placeholder="Sergini-21678" name="username" id="username">
        <div class="custom-select">
            <select name="platform" id="platform" class="dropdown">
                <option value="pc" id="platformChoice1">PC</option>
                <option value="psn" id="platformChoice2">PLAYSTATION 4</option>
                <option value="xbl" id="platformChoice3">XBOX ONE</option>
                <option value="nintendo-switch" id="platformChoice4">NINTENDO SWITCH</option>
            </select>
        </div>
        
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>`

    userProfile.insertAdjacentHTML('beforeend', profileElement)
}