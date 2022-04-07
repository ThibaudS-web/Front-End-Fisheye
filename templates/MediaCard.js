class MediaCard {
    constructor(media) {
        this.media = media
        this.$wrapper = document.createElement('article')
    }

    createMediaCard() {
        const mediaCard = `
            <img src="./assets/photographers/${this.media.photographerId}/${this.media.image}" alt="${this.media.title}" />
				<div class="picture-infos">
					<p>${this.media.title}</p>
					<div class="heart-container">
						<p class="likeCount">${this.media.likes}</p>
						<i class="fa-solid fa-heart"></i>
					</div>
				</div>
        `

        this.$wrapper.innerHTML = mediaCard

        return this.$wrapper
    }
}

export default MediaCard
