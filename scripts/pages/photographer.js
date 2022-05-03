import { dataBaseClient } from '../api/DataBaseClient.js'
import PageMediasFactory from '../factories/PageMediasFactory.js';
import checkMenuDisplay from '../UI/sort_menu.js'
import ModalComponent from '../components/ModalComponent.js'
import RedirectionComponent from '../components/RedirectionComponent.js'

let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId')

const getMedias = await dataBaseClient.getMedias()
const getPhotographers = await dataBaseClient.getPhotographers()

const currentPhotographerMedias = getMedias.filter(media => media.photographerId == photographerId)
const currentPhotographer = getPhotographers.filter(photographer => photographer.id == photographerId)[0]

//Dependancies 
const modalComponent = new ModalComponent()
const redirection = new RedirectionComponent()

const likedMedias = new Map()

function init() {
    verifyURLOnPhotographerHTML()
    editTitleDocument()
    addMedias()
    photographerInfosBottomBanner()
    AddInfoPhotographer()
    callModalContact()
    sortMedias()
}

init()

function verifyURLOnPhotographerHTML() {

    function matchId() {
        return getPhotographers.some(photographer => photographer.id == photographerId)
    }

    if (!matchId()) {
        redirection.redirectOnPageNotFound()
    }
}

function editTitleDocument() {
    const documentTitle = document.querySelector('head title')
    documentTitle.innerHTML = `FishEye - ${currentPhotographer.name}`
}

//Display the like and price informations
function photographerInfosBottomBanner() {
    const likeContainer = document.getElementById('like')

    let totalLikesCount = 0
    currentPhotographerMedias.forEach(media => {
        totalLikesCount += media.likes
    })

    likeContainer.innerHTML = `${totalLikesCount} <i id="heart-bottom" class="fa-solid fa-heart"></i>`

    const price = document.getElementById('price')
    price.innerHTML = `${currentPhotographer.price}€ / jour`
}

function updateLikesOnBottomBanner() {
    const likeContainer = document.getElementById('like')

    const likes = Array.from(document.querySelectorAll('.likeCount')).map((likeElement) => parseInt(likeElement.innerHTML))

    let totalLikes = likes.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    )

    likeContainer.innerHTML = `${totalLikes} <i id="heart-bottom" class="fa-solid fa-heart"></i>`
}

function callModalContact() {
    const openModalContact = document.querySelector("#contact-btn")
    const modalContact = document.querySelector("#contact_modal")
    openModalContact.addEventListener('click', () => {
        modalComponent.displayContact(modalContact, currentPhotographer.name)
    })
}

function displaySliderModal(mediaId) {
    const modalSlider = document.querySelector('#image_lightbox')
    modalComponent.displayMediaSlider(modalSlider, currentPhotographerMedias, mediaId)
}

function likeMedia(mediaId) {
    let currentMedia = currentPhotographerMedias.find((media) => media.id === mediaId)

    if (likedMedias.has(mediaId)) {
        // Nothing happens, media is already liked
    } else {
        likedMedias.set(mediaId, true)
        currentMedia.likes++
    }
}


function dislikeMedia(mediaId) {
    let currentMedia = currentPhotographerMedias.find((media) => media.id === mediaId)

    if (!likedMedias.has(mediaId)) {
        // Nothing happens, media is already disliked
    } else {
        likedMedias.delete(mediaId)
        currentMedia.likes--
    }
}

function addMedias() {
    const $wrapperMedias = document.getElementById('media-container')

    currentPhotographerMedias.forEach(media => {
        const mediaCard = new PageMediasFactory().create(media)

        mediaCard.onClick = (id) => {
            displaySliderModal(id)
        }

        mediaCard.onLikeClick = (id) => {
            likeMedia(id)
            mediaCard.updateLikes(true)
            updateLikesOnBottomBanner()
        }

        mediaCard.onDislikeClick = (id) => {
            dislikeMedia(id)
            mediaCard.updateLikes(false)
            updateLikesOnBottomBanner()
        }

        $wrapperMedias.appendChild(mediaCard.getHTML())
    })
}

function removeMedias() {
    const $wrapperMedias = document.getElementById('media-container')
    $wrapperMedias.querySelectorAll('article').forEach(media => media.remove())
}

async function sortMedias() {
    const popularity = document.getElementById('popularity')
    const date = document.getElementById('date')
    const title = document.getElementById('title')
    let lastSort

    function sortByPopularity() {
        if (checkMenuDisplay()) {
            currentPhotographerMedias.sort((a, b) => b.likes > a.likes ? 1 : -1)     
            if (lastSort !== 'popularity') {
                removeMedias()
                addMedias()
            }
            lastSort = 'popularity'
        } else {
            return
        }
    }

    function sortByDate() {
        if (checkMenuDisplay()) {
            currentPhotographerMedias.sort((a, b) => b.date > a.date ? 1 : -1)
            console.log(currentPhotographerMedias)
            if (lastSort !== 'date') {
                removeMedias()
                addMedias()
            }
            lastSort = 'date'
        } else {
            return
        }
    }

    function sortByTitle() {
        if (checkMenuDisplay()) {
            currentPhotographerMedias.sort((a, b) => b.title < a.title ? 1 : -1)
            if (lastSort !== 'title') {
                removeMedias()
                addMedias()
            }
            lastSort = 'title'
        } else {
            return
        }
    }

    popularity.addEventListener('click', sortByPopularity)
    date.addEventListener('click', sortByDate)
    title.addEventListener('click', sortByTitle)
}

async function AddInfoPhotographer() {
    const name = document.getElementById('photographer-name')
    const location = document.getElementById('photographer-location')
    const tagline = document.getElementById('photographer-tagline')
    const img = document.getElementById('photographer-img')

    name.innerHTML = currentPhotographer.name
    location.innerHTML = `${currentPhotographer.city}, ${currentPhotographer.country}`
    tagline.innerHTML = currentPhotographer.tagline
    img.setAttribute('src', `./assets/photographers/${currentPhotographer.portrait}`)
    img.setAttribute('alt', `${currentPhotographer.name}`)
    img.setAttribute('tabindex', `0`)       
}