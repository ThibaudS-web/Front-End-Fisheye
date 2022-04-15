const listMenu = Array.from(document.querySelectorAll('ul li'))
const menu = document.querySelector('ul')
const DOMListMenu = menu.querySelectorAll('li')

let newMenu = DOMListMenu

newMenu.forEach(list => {
    list.addEventListener('click', function () {
        menu.insertBefore(this, menu.children[0])
        newMenu = menu.querySelectorAll('li')
    })
})

let isDisplay = false

function openMenu() {
    Array.from(newMenu).slice(1).forEach(list => {
        list.style.display = 'block'
        menu.classList.add('arrow-up')
        isDisplay = false
    })
}

function closeMenu() {
    Array.from(newMenu).slice(1).forEach(list => {
        list.style.display = 'none'
        menu.classList.remove('arrow-up')
        isDisplay = true
    })
}

function displayMenu() {
    if (isDisplay) {
        openMenu()
    } else {
        closeMenu()
    }
}

menu.addEventListener('click', displayMenu)

displayMenu()

