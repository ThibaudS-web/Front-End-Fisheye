import { apiClient } from '../api/apiClient.js'
import MediaFactory from '../factories/MediaFactory.js';

let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId')

const getMedias = await apiClient.getMedias()
const getPhotographers = await apiClient.getPhotographers()
const mediaCard = document.querySelectorAll('#media-container article')
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
        const mediaCard = new MediaFactory(media, 'page')
        $wrapperMedias.appendChild(mediaCard)
    });
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
    AddMedias()
}

init()









