class VideoCard {
    constructor() {
        this.$wrapper = document.createElement('article')
    }

    createVideoOnPage(media) {
        const mediaCard = `
            <video controls alt="${media.title}">
                <source src="./assets/photographers/${media.photographerId}/${media.video}" type=video/mp4>
            </video>
				<div class="picture-infos">
					<p>${media.title}</p>
					<div class="heart-container">
						<p class="likeCount">${media.likes}</p>
						<i class="fa-solid fa-heart"></i>
					</div>
				</div>
        `
        this.$wrapper.innerHTML = mediaCard
        return this.$wrapper
    }

    createVideoOnSlider() {
        const mediaCard = `
            <video controls alt="${media.title}">
                <source src="./assets/photographers/${media.photographerId}/${media.video}" type=video/mp4>
            </video>
            <p>${media.title}</p>
        `
        this.$wrapper.innerHTML = mediaCard
        return this.$wrapper
    }
}

export default VideoCard
