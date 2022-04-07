import { apiClient } from '../api/apiClient.js'
import MediaCard from '../../templates/mediaCard.js'

let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId')

const getMedias = await apiClient.getMedias()
const getPhotographers = await apiClient.getPhotographers()

const mediaFiltred = getMedias.filter(media => media.photographerId == photographerId)

const photographerFiltred = getPhotographers.filter(photographer => photographer.id == photographerId)

//Display the name of photographer on the modal contact
const name = document.getElementById('modal-photograph-name')
name.innerHTML = photographerFiltred[0].name

async function AddMedias() {
    const $wrapperMedias = document.getElementById('media-container')
    mediaFiltred.forEach(media => {
        if (media.image) {
            const mediaCard = new MediaCard(media).createPictureCard()
            $wrapperMedias.appendChild(mediaCard)
        } else {
            const mediaCard = new MediaCard(media).createVideoCard()
            $wrapperMedias.appendChild(mediaCard)
        }

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









