class VideoCard {
    constructor(media , onClick) {
        this.media = media
        this.onClick = onClick
        this.$wrapper = document.createElement('article')
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
        this.$wrapper.addEventListener('click', () => {
            this.onClick(this.media.id)
        })
        return this.$wrapper
    }
}


export default VideoCard
