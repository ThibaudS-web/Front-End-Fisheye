class VideoCard {
    constructor(media) {
        this.media = media
        this.$wrapper = document.createElement('article')
        this.$wrapperFigure = document.createElement('figure')
    }

    createVideoOnPage() {
        const mediaCard = `
            <video controls alt="${this.media.title}">
                <source src="./assets/photographers/${this.media.photographerId}/${this.media.video}" type=video/mp4>
            </video>
				<div class="picture-infos">
					<p>${this.media.title}</p>
					<div class="heart-container">
						<p class="likeCount">${this.media.likes}</p>
						<i class="fa-solid fa-heart"></i>
					</div>
				</div>
        `
        this.$wrapper.innerHTML = mediaCard
        this.$wrapper.setAttribute('data-src', `./assets/photographers/${this.media.photographerId}/${this.media.video}`)
        this.$wrapper.setAttribute('data-name', `${this.media.title}`)
        this.clickOpenModal()
        return this.$wrapper
    }
    
    clickOpenModal() {
        const modal = document.getElementById("image_lightbox")
        this.$wrapper.addEventListener('click', function () {
            modal.style.display = 'block'
        })
    }
}


export default VideoCard
