class PictureCard {
    constructor(media) {
        this.media = media
        this.$wrapper = document.createElement('article')
        this.$wrapperFigure = document.createElement('figure')
    }

    createPictureOnPage() {
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
        this.$wrapper.setAttribute('data-src', `./assets/photographers/${this.media.photographerId}/${this.media.image}`)
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

export default PictureCard 

//Ajouter event ici

//data-id => selectionner en JS dataSet.id
//class selected


//1 : selectionner l'image avec l'attribut selected
//2 :