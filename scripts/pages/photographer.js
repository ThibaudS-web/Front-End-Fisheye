import { apiClient } from '../api/apiClient.js'
import MediaFactory from '../factories/MediaFactory.js';

let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId')

const getMedias = await apiClient.getMedias()
const getPhotographers = await apiClient.getPhotographers()


const mediaFiltred = getMedias.filter(media => media.photographerId == photographerId)

const photographerFiltred = getPhotographers.filter(photographer => photographer.id == photographerId)

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

    mediaFiltred.forEach(media => {
        const mediaCard = new MediaFactory().getContent(media, 'page')
        $wrapperMedias.appendChild(mediaCard)
    });
}

function setupAttributOnMedias() {
    const articles = document.querySelectorAll('#media-container article')
    articles.forEach((article, index) => {
        if (article.querySelector('img')) {
            article.setAttribute('data-id', index + 1)
        } else if (article.querySelector('video')) {
            article.setAttribute('data-id', index + 1)
        } else {
            throw 'Image or Video Element not found!'
        }
    })
}

function openModal() {
    const figure = document.querySelector("#lightbox-img-container figure")
    const articles = document.querySelectorAll('#media-container article')
    articles.forEach((article) => {
        article.addEventListener('click', () => {
            article.setAttribute('selected', '')
            figure.innerHTML = new MediaFactory().getContent(article, 'slider')
        })
    })
}


const rightArrow = document.getElementById('modal-right-btn')
const leftArrow = document.getElementById('modal-left-btn')
const figure = document.querySelector("#lightbox-img-container figure")

rightArrow.addEventListener('click', function () {
    const medias = Array.from(document.querySelectorAll('article'))
    let mediaSelected

    medias.forEach(media => {
        media.attributes.selected ? mediaSelected = media : false
        media.removeAttribute('selected')
    })

    let indexMediaSelected = medias.indexOf(mediaSelected) + 1

    if (indexMediaSelected > medias.length - 1) {
        medias[0].setAttribute('selected', '')
        indexMediaSelected = 0
    } else {
        medias[indexMediaSelected].setAttribute('selected', '')
    }

    figure.innerHTML = new MediaFactory().getContent(medias[indexMediaSelected], 'slider')
})


leftArrow.addEventListener('click', function () {
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
    } else {
        medias[indexMediaSelected].setAttribute('selected', '')
    }
    
    figure.innerHTML = new MediaFactory().getContent(medias[indexMediaSelected], 'slider')
})

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

closeBtn.addEventListener('click', closeSlider)

function init() {
    AddInfoPhotographer()
    AddMedias()
    setupAttributOnMedias()
    openModal()
}

init()
