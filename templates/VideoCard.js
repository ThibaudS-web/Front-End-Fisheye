class VideoCard {
    constructor() {
        this.$wrapper = document.createElement('article')
        this.$wrapperFigure = document.createElement('figure')
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

    createVideoOnSlider(media) {
        const mediaCard = `
            <video class="lightbox-img" controls alt="${media.title}">
                <source src="./assets/photographers/${media.photographerId}/${media.video}" type=video/mp4>
            </video>
            <figcaption>${media.title}</figcaption>
        `
        this.$wrapperFigure.innerHTML = mediaCard
        return this.$wrapperFigure
    }
}

export default VideoCard
