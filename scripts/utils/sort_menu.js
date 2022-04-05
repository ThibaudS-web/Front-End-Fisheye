const listMenu = Array.from(document.querySelectorAll('#menu-sort li'))
const menu = document.querySelector('#menu-sort')
const arrow = document.querySelector('.select-box')

let isDisplay = true

function openMenu() {
    listMenu.slice(1).forEach(list => {
        list.style.display = 'block'
        arrow.classList.add('arrow-up')
        isDisplay = false
    })
}

function closeMenu() {
    listMenu.slice(1).forEach(list => {
        list.style.display = 'none'
        arrow.classList.remove('arrow-up')
        isDisplay = true
    })
}

closeMenu()

function displayMenu() {
    if (isDisplay) {
        openMenu()
    } else {
        closeMenu()
    }
}

menu.addEventListener('click', displayMenu)
