import { apiClient } from "../api/apiClient.js"
import MediaFactory from "../factories/MediaFactory.js";

let params = (new URL(document.location)).searchParams;

let photographerId = params.get('photographerId')

const getMedias = await apiClient.getMedias()

const mediaFiltred = getMedias.filter(media => media.photographerId == photographerId)
const mediaList = []

mediaFiltred.forEach(media => {
    mediaList.push(new MediaFactory(media, 'slider'))
})

const lightboxBG = document.getElementById("image_lightbox")
const closeBtn = document.getElementById('lightbox-close')
const leftArrow = document.getElementById('modal-left-btn')
const rightArrow = document.getElementById('modal-right-btn')
const mediaContainer = document.getElementById('lightbox-img-container')

mediaList.forEach(media => {
    mediaContainer.appendChild(media)
})

const mediaContainerOnPage = document.querySelector('#media-container')
const medias = document.querySelectorAll('#lightbox-img-container figure')

window.onload = function () {
    const mediaCard = document.querySelectorAll('#media-container article')
    mediaCard.forEach(card => {
        card.addEventListener('click', function () {
            lightboxBG.style.display = 'block'
        })
    })

}


const pictureMarginRightInPixel = 20
const pictureWidthInPixel = 850
let translateXinPixel = pictureMarginRightInPixel + pictureWidthInPixel
let positionInPixel = 0
let picturePosition = 0
let totalPictures = mediaFiltred.length

closeBtn.addEventListener('click', function () {
    lightboxBG.style.display = 'none'
})

// lightboxBG.style.display = 'block'

let index = 0
let translateX = 0

leftArrow.addEventListener('click', function () {
    if (index - 1 >= 0) {
        translateX += translateXinPixel
        mediaList[index].style.transform = `translateX(${translateX}px`
        mediaList[index - 1].style.transform = `translateX(${translateX}px)`
        index--
        console.log(mediaFiltred[index].title, mediaList[index].style.transform)
    } else {
        console.log('Début de tableau')
    }
})

rightArrow.addEventListener('click', function () {
    if (index + 1 < totalPictures) {
        translateX -= translateXinPixel
        mediaList[index].style.transform = `translateX(${translateX}px)`
        mediaList[index + 1].style.transform = `translateX(${translateX}px)`
        index++
        console.log(index)
    } else {
        console.log('Fin de tableau')
    }

})

//On veut que l'image current aille à +870px à droite
//L'imagine caché à gauche doit devenir l'image current et doit aller à +870px à droite
//







