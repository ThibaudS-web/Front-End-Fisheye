import { dataBaseClient } from '../api/DataBaseClient.js'
import PhotographerInfos from '../../templates/PhotographerInfos.js'

async function getPhotographers() {
    const photographers = await dataBaseClient.getPhotographers()
    return ({
        photographers
    })
}
// console.log(await getPhotographers())
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    const photograherInfos = new PhotographerInfos()
    
    photographers.forEach((photographer) => {
        const userCardDOM = photograherInfos.getPhotograherCardInLandingPage(photographer)
        photographersSection.innerHTML += userCardDOM;
    })
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init()
