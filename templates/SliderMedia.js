class SliderMedias {
    constructor(media) {
        this.media = media
    }

    createPictureOnSlider() {
        const pictureCard = `
                    <img src="./assets/photographers/${this.media.photographerId}/${this.media.image}" class="lightbox-img" />
                    <figcaption>${this.media.title}</figcaption>
                `
        return pictureCard
    }

    createVideoOnSlider() {
        const videoCard = ` 
                    <video class="lightbox-img" controls>
                        <source src="./assets/photographers/${this.media.photographerId}/${this.media.video}" type=video/mp4>
                    </video>
                     <figcaption>${this.media.title}</figcaption>
                `
        return videoCard
    } 
}

export default SliderMedias