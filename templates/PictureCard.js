class PictureCard {
    constructor() {
        this.$wrapper = document.createElement('article')
        this.$wrapperFigure = document.createElement('figure')
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

    createPictureOnSlider(media) {
        const mediaCard = `
				<img class="lightbox-img" src="./assets/photographers/${media.photographerId}/${media.image}" alt="${media.title}" />
				<figcaption>${media.title}</figcaption>	
        `
        this.$wrapperFigure.innerHTML = mediaCard
        return this.$wrapperFigure
    }
}

export default PictureCard 
