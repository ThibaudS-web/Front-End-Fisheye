class PictureCard {
    constructor() {
        this.$wrapper = document.createElement('article')
    }

    createPictureOnPage(media) {
        const mediaCard = `
            <img src="./assets/photographers/${media.photographerId}/${media.image}" alt="${media.title}" />
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

    createPictureOnSlider() {
        const mediaCard = `
            <img src="./assets/photographers/${media.photographerId}/${media.image}" alt="${media.title}" />
				<div class="picture-infos">
					<p>${media.title}</p>
        `
        this.$wrapper.innerHTML = mediaCard

        return this.$wrapper
    }
}

export default PictureCard
