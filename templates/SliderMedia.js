class SliderMedias {
    constructor(article) {
        this.article = article
    }

    createPictureOnSlider() {
        const pictureCard = `
                    <img src='${this.article.dataset.src}' class="lightbox-img" />
                    <figcaption>${this.article.dataset.name}</figcaption>
                `
        return pictureCard
    }

    createVideoOnSlider() {
        const videoCard = ` 
                    <video class="lightbox-img" controls>
                        <source src='${this.article.dataset.src}'type=video/mp4>
                    </video>
                     <figcaption>${this.article.dataset.name}</figcaption>
                `
        return videoCard
    }
}

export default SliderMedias