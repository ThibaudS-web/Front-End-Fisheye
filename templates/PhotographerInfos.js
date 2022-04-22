class photographerInfo {
    getPhotograherCardInLandingPage(dataPhotographer) {
        return `<article>
	                <a  href="photographer.html?photographerId=${dataPhotographer.id}">
		                <img src="assets/photographers/${dataPhotographer.portrait}" alt="${dataPhotographer.name}" />
		                <h2>${dataPhotographer.name}</h2>
	                </a>
	                <div>
		                <p>${dataPhotographer.city}, ${dataPhotographer.country}</p>
		                <p>${dataPhotographer.tagline}</p>
		                <p>${dataPhotographer.price}€/jour</p>
	                </div>
                </article>`
    }
}

export default photographerInfo