const listMenu = Array.from(document.querySelectorAll('ul li'))
const menu = document.querySelector('ul')

let sortLabel = document.querySelector('#sort-label')

const arrow = document.querySelector('ul')

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

function displayMenu() {
    if (isDisplay) {
        openMenu()
    } else {
        closeMenu()
    }
}

closeMenu()

menu.addEventListener('click', displayMenu)

// sortLabel.addEventListener('click', function () {
//     const popularity = document.getElementById('popularity')
//     const date = document.getElementById('date')
//     const title = document.getElementById('title')
//     const li = document.createElement('li')

//     menu.replaceChild(date, popularity)
//     menu.appendChild(popularity)
//     console.log(popularity)
// })

// listMenu.forEach(listItem => {
//     const popularity = document.getElementById('popularity')
//     const date = document.getElementById('date')
//     const title = document.getElementById('title')
//     const FP = menu.children[0]
//     listItem.addEventListener('click', function () {
//         menu.replaceChild(this, FP)
//         menu.appendChild(FP)
        
        
//     })
// })


