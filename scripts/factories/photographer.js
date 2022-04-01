function photographerFactory(data) {
    const { id, name, portrait, price, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const link = document.createElement('a')
        const location = document.createElement('p')
        const tagLine = document.createElement('p')
        const priceContainer = document.createElement('p')
        const div = document.createElement('div')

        //Stock the photographer id parameter in the url
        let params = new URLSearchParams(document.location.search)
        params.set("photographerId", `${id}`)

        link.setAttribute('href', `photographer.html?${params}`)
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)

        article.appendChild(link)
        article.appendChild(div)
        div.appendChild(location).textContent = `${city}, ${country}`
        div.appendChild(tagLine).textContent = `${tagline}`
        div.appendChild(priceContainer).textContent = `${price}€/jour`
        h2.textContent = name;
        link.appendChild(img);
        link.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}