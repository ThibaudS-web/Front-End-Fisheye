
class mediaSliderModal {
    
    
    openModal() {
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

    closeModal() {
        const medias = document.querySelectorAll('article')
        lightbox.style.display = 'none'
        medias.forEach(media => {
            media.removeAttribute('selected')
        })
    }

    rightArrow() {
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

    leftArrow() {
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

}

export default mediaSliderModal