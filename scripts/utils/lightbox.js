import { apiClient } from "../api/apiClient.js"

let params = (new URL(document.location)).searchParams;

let photographerId = params.get('photographerId')

const getMedias = await apiClient.getMedias()

const mediaFiltred = getMedias.filter(media => media.photographerId == photographerId)

console.log(mediaFiltred.length)


const lightboxBG = document.getElementById("image_lightbox")
const closeBtn = document.getElementById('lightbox-close')
const leftArrow = document.getElementById('modal-left-btn')
const rightArrow = document.getElementById('modal-right-btn')
const figure = document.getElementById('lightbox-img-container')

closeBtn.addEventListener('click', function () {
    lightboxBG.style.display = 'none'
})





