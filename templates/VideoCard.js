class VideoCard {
    onClick = () => {
        console.log("onClick listener is not defined")
    }
    onLikeClick = () => {
        console.log("onLikeClick listener is not defined")
    }
    onDislikeClick = () => {
        console.log("onDislikeClick listener is not defined")
    }

    constructor(media) {
        this.media = media
        this.$wrapper = document.createElement('article')
    }

    getHTML() {
        const mediaCard = `
            <video controls alt="${this.media.title}">
                <source src="./assets/photographers/${this.media.photographerId}/${this.media.video}" type=video/mp4>
            </video>
				<div class="picture-infos">
					<p>${this.media.title}</p>
					<div class="heart-container">
						<p id='count-likes' class="likeCount">${this.media.likes}</p>
						<i id="heart-full-icon" class="fa-solid fa-heart"></i>
                        <i id="heart-empty-icon" class="fa-regular fa-heart"></i>
					</div>
				</div>
        `
        this.$wrapper.innerHTML = mediaCard
        this.$wrapper.setAttribute('data-src', `./assets/photographers/${this.media.photographerId}/${this.media.video}`)
        this.$wrapper.setAttribute('data-name', `${this.media.title}`)

        this.$wrapper.querySelector('video').addEventListener('click', () => {
            this.onClick(this.media.id)
        })
        this.$wrapper.querySelector('#heart-full-icon').addEventListener('click', () => {
            this.onDislikeClick(this.media.id)
        })
        this.$wrapper.querySelector('#heart-empty-icon').addEventListener('click', () => {
            this.onLikeClick(this.media.id)
        })

        return this.$wrapper
    }

    updateLikes(liked) {
        this.$wrapper.querySelector('#count-likes').innerHTML = this.media.likes
        if (liked) {
            this.$wrapper.querySelector('#heart-empty-icon').style.display = 'none'
            this.$wrapper.querySelector('#heart-full-icon').style.display = 'block'
        } else {
            this.$wrapper.querySelector('#heart-full-icon').style.display = 'none'
            this.$wrapper.querySelector('#heart-empty-icon').style.display = 'block'
        }
    }
}


export default VideoCard
