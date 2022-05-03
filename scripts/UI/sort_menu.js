const menu = document.querySelector('ul')
const DOMListMenu = menu.querySelectorAll('li')

let newMenu = DOMListMenu

newMenu.forEach(list => {
    list.addEventListener('click', function () {
        menu.insertBefore(this, menu.children[0])
        newMenu = menu.querySelectorAll('li')
    })
})

let menuIsDisplay = false

function openMenu() {
    Array.from(newMenu).slice(1).forEach(list => {
        list.style.display = 'block'
        menu.classList.add('arrow-up')
        menuIsDisplay = false
    })
}

function closeMenu() {
    Array.from(newMenu).slice(1).forEach(list => {
        list.style.display = 'none'
        menu.classList.remove('arrow-up')
        menuIsDisplay = true
    })
}

function displayMenu() {
    if (menuIsDisplay) {
        openMenu()
    } else {
        closeMenu()
    }
}

menu.addEventListener('click', displayMenu)

displayMenu()

function checkMenuDisplay() {
    if (menuIsDisplay) {
        return false
    } else {
        return true
    }
}

export default checkMenuDisplay