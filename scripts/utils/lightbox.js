// import { apiClient } from "../api/apiClient.js"
// import MediaFactory from "../factories/MediaFactory.js";

// let params = (new URL(document.location)).searchParams;

// let photographerId = params.get('photographerId')

// const getMedias = await apiClient.getMedias()

// const mediaFiltred = getMedias.filter(media => media.photographerId == photographerId)
// const mediaList = []

// mediaFiltred.forEach(media => {
//     mediaList.push(new MediaFactory(media))
// })


// const leftArrow = document.getElementById('modal-left-btn')
// const rightArrow = document.getElementById('modal-right-btn')
// const mediaContainer = document.getElementById('lightbox-img-container')

// // mediaList.forEach(media => {
// //     mediaContainer.appendChild(media)
// // })


// const mediaContainerOnPage = document.querySelector('#media-container')
// const media = document.querySelector('#lightbox-img-container')

// const pictureOnSlider = `
//     <img class="lightbox-img" />
// `

// const videoOnSlider = `
//     <video class="lightbox-img" controls>
//         <source type=video/mp4>
//     </video>




























// const pictureMarginRightInPixel = 20
// const pictureWidthInPixel = 850
// let translateXinPixel = pictureMarginRightInPixel + pictureWidthInPixel
// let totalPictures = mediaFiltred.length

// let index = 0
// let translateX = 0

// function slideLeftArrow() {
//     if (index - 1 >= 0) {
//         translateX += translateXinPixel
//         mediaList[index].style.transform = `translateX(${translateX}px`
//         mediaList[index - 1].style.transform = `translateX(${translateX}px)`
//         index--
//         displayLeftArrow(leftArrow)
//         displayRightArrow(rightArrow)
//     } else {
//         console.log('Début de tableau')
//     }
// }

// function slideRightArrow() {
//     if (index + 1 < totalPictures) {
//         translateX -= translateXinPixel
//         mediaList[index].style.transform = `translateX(${translateX}px)`
//         mediaList[index + 1].style.transform = `translateX(${translateX}px)`
//         index++
//         displayLeftArrow(leftArrow)
//         displayRightArrow(rightArrow)
//     } else {
//         console.log('Fin de tableau')
//     }
// }