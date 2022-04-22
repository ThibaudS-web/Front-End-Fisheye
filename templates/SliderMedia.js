class SliderMedias {
    constructor(media) {
        this.media = media
    }

    createPictureOnSlider() {
        return `
                    <img alt="${this.media.title}" src="./assets/photographers/${this.media.photographerId}/${this.media.image}" class="lightbox-img" />
                    <figcaption>${this.media.title}</figcaption>
                `

    }

    createVideoOnSlider() {
        return ` 
                    <video alt="${this.media.title}" class="lightbox-img" controls>
                        <source src="./assets/photographers/${this.media.photographerId}/${this.media.video}" type=video/mp4>
                    </video>
                     <figcaption>${this.media.title}</figcaption>
                `
    }
}

export default SliderMedias