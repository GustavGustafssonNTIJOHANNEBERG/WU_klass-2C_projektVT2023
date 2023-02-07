const burger = document.getElementById('burger')

function togglemenu() {

    document.getElementById('link_list').classList.toggle('link_list_visible')

    burger.classList.toggle('burger_in_x')

}


burger.addEventListener('click', togglemenu)