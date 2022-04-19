import { apiClient } from '../api/apiClient.js'
import PageMediasFactory from '../factories/PageMediasFactory.js';
import SliderMediasFactory from '../factories/SliderMediasFactory.js';
import checkMenuDisplay from '../utils/sort_menu.js'

let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId')

const getMedias = await apiClient.getMedias()
const getPhotographers = await apiClient.getPhotographers()


const mediaFiltred = getMedias.filter(media => media.photographerId == photographerId)

const photographerFiltred = getPhotographers.filter(photographer => photographer.id == photographerId)

const documentTitle = document.querySelector('head title')
documentTitle.innerHTML = `FishEye - ${photographerFiltred[0].name}`

//Display the name of photographer on the modal contact
const name = document.getElementById('modal-photograph-name')
name.innerHTML = photographerFiltred[0].name

//Display the like and price informations
const likeContainer = document.getElementById('like')
let totalLikesCount = 0
mediaFiltred.forEach(media => {
    totalLikesCount += media.likes
})

likeContainer.innerHTML = `${totalLikesCount} <i id="heart-bottom" class="fa-solid fa-heart"></i>`

const price = document.getElementById('price')
price.innerHTML = `${photographerFiltred[0].price}€ / jour`

async function AddMedias() {
    const $wrapperMedias = document.getElementById('media-container')
    if ($wrapperMedias.querySelectorAll('article').length === 0) {
        mediaFiltred.forEach(media => {
            const mediaCard = new PageMediasFactory().getContent(media)
            $wrapperMedias.appendChild(mediaCard)
        });
    } else {
        $wrapperMedias.querySelectorAll('article').forEach(media => media.remove())
        AddMedias()
    }
}

async function sortMedias() {
    const popularity = document.getElementById('popularity')
    const date = document.getElementById('date')
    const title = document.getElementById('title')

    function sortByPopularity() {
        if (checkMenuDisplay()) {
            mediaFiltred.sort((a, b) => b.likes > a.likes ? 1 : -1)
            console.log(mediaFiltred)
            AddMedias()
            openModal()
        } else {
            return
        }
    }

    function sortByDate() {
        if (checkMenuDisplay()) {
            mediaFiltred.sort((a, b) => b.date > a.date ? 1 : -1)
            console.log(mediaFiltred)
            AddMedias()
            openModal()
        } else {
            return
        }
    }

    function sortByTitle() {
        if (checkMenuDisplay()) {
            mediaFiltred.sort((a, b) => b.title < a.title ? 1 : -1)
            console.log(mediaFiltred)
            AddMedias()
            openModal()
        } else {
            return
        }
    }

    popularity.addEventListener('click', sortByPopularity)
    date.addEventListener('click', sortByDate)
    title.addEventListener('click', sortByTitle)
}

function openModal() {
    const figure = document.querySelector("#lightbox-img-container figure")
    const articles = document.querySelectorAll('#media-container article')
    articles.forEach((article) => {
        article.addEventListener('click', () => {
            article.setAttribute('selected', '')
            console.log(article)
            figure.innerHTML = new SliderMediasFactory().getContent(article)
        })
    })
}

const rightArrow = document.getElementById('modal-right-btn')
const leftArrow = document.getElementById('modal-left-btn')
const figure = document.querySelector("#lightbox-img-container figure")

function rightArrowModal() {
    const medias = Array.from(document.querySelectorAll('article'))
    let mediaSelected

    medias.forEach(media => {
        media.attributes.selected ? mediaSelected = media : null
        media.removeAttribute('selected')
    })

    let indexMediaSelected = medias.indexOf(mediaSelected) + 1

    if (indexMediaSelected > medias.length - 1) {
        medias[0].setAttribute('selected', '')
        indexMediaSelected = 0
        console.log(medias[0])
    } else {
        console.log(medias[indexMediaSelected])
        medias[indexMediaSelected].setAttribute('selected', '')
    }

    figure.innerHTML = new SliderMediasFactory().getContent(medias[indexMediaSelected])
}

function leftArrowModal() {
    const medias = Array.from(document.querySelectorAll('article'))
    let mediaSelected

    medias.forEach(media => {
        media.attributes.selected ? mediaSelected = media : false
        media.removeAttribute('selected')
    })

    let indexMediaSelected = medias.indexOf(mediaSelected) - 1

    if (indexMediaSelected < 0) {
        medias[medias.length - 1].setAttribute('selected', '')
        indexMediaSelected = medias.length - 1
        console.log(medias[medias.length - 1])
    } else {
        console.log(medias[indexMediaSelected])
        medias[indexMediaSelected].setAttribute('selected', '')
    }

    figure.innerHTML = new SliderMediasFactory().getContent(medias[indexMediaSelected])
}

async function AddInfoPhotographer() {
    const name = document.getElementById('photographer-name')
    const location = document.getElementById('photographer-location')
    const tagline = document.getElementById('photographer-tagline')
    const img = document.getElementById('photographer-img')

    name.innerHTML = photographerFiltred[0].name
    location.innerHTML = `${photographerFiltred[0].city}, ${photographerFiltred[0].country}`
    tagline.innerHTML = photographerFiltred[0].tagline
    img.setAttribute('src', `./assets/photographers/${photographerFiltred[0].portrait}`)
    img.setAttribute('alt', `${photographerFiltred[0].name}`)
}


const closeBtn = document.getElementById('lightbox-close')
const lightbox = document.getElementById("image_lightbox")

function closeSlider() {
    const medias = document.querySelectorAll('article')
    lightbox.style.display = 'none'
    medias.forEach(media => {
        media.removeAttribute('selected')
    })
}

rightArrow.addEventListener('click', rightArrowModal)
leftArrow.addEventListener('click', leftArrowModal)
closeBtn.addEventListener('click', closeSlider)

function init() {
    AddInfoPhotographer()
    AddMedias()
    sortMedias()
    openModal()
}

init()


