import { apiClient } from '../api/apiClient.js'
import PageMediasFactory from '../factories/PageMediasFactory.js';
import checkMenuDisplay from '../UI/sort_menu.js'
import ModalComponent from '../components/modal/ModalComponent.js'

let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId')

const getMedias = await apiClient.getMedias()
const getPhotographers = await apiClient.getPhotographers()

const mediaFiltred = getMedias.filter(media => media.photographerId == photographerId)
console.log(mediaFiltred)

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

//New Instance of ModalComponent
const modalComponent = new ModalComponent()

//Display Modal Contact
const openModalContact = document.querySelector("#contact-btn")
const modalContact = document.querySelector("#contact_modal")
openModalContact.addEventListener('click', () => {
    modalComponent.displayContact(modalContact)
})

likeContainer.innerHTML = `${totalLikesCount} <i id="heart-bottom" class="fa-solid fa-heart"></i>`

const price = document.getElementById('price')
price.innerHTML = `${photographerFiltred[0].price}€ / jour`

const modalSlider = document.querySelector('#image_lightbox')

async function addMedias() {
    const $wrapperMedias = document.getElementById('media-container')
    if ($wrapperMedias.querySelectorAll('article').length === 0) {
        mediaFiltred.forEach(media => {
            const mediaCard = new PageMediasFactory().getContent(media, (mediaId) => {
                modalComponent.displayMediaSlider(modalSlider, mediaFiltred, mediaId)
            })
            $wrapperMedias.appendChild(mediaCard)
        })
    } else {
        $wrapperMedias.querySelectorAll('article').forEach(media => media.remove())
        addMedias()
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
            addMedias()
        } else {
            return
        }
    }

    function sortByDate() {
        if (checkMenuDisplay()) {
            mediaFiltred.sort((a, b) => b.date > a.date ? 1 : -1)
            console.log(mediaFiltred)
            addMedias()
        } else {
            return
        }
    }

    function sortByTitle() {
        if (checkMenuDisplay()) {
            mediaFiltred.sort((a, b) => b.title < a.title ? 1 : -1)
            console.log(mediaFiltred)
            addMedias()
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

    name.innerHTML = photographerFiltred[0].name
    location.innerHTML = `${photographerFiltred[0].city}, ${photographerFiltred[0].country}`
    tagline.innerHTML = photographerFiltred[0].tagline
    img.setAttribute('src', `./assets/photographers/${photographerFiltred[0].portrait}`)
    img.setAttribute('alt', `${photographerFiltred[0].name}`)
}

function init() {
    AddInfoPhotographer()
    addMedias()
    sortMedias()
}

init()


