import { dataBaseClient } from '../api/DataBaseClient.js'
import PhotographerInfos from '../../templates/PhotographerInfos.js'

async function getPhotographers() {
    const photographers = await dataBaseClient.getPhotographers()
    return ({
        photographers
    })
}

function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    const photograherInfos = new PhotographerInfos()
    
    photographers.forEach((photographer) => {
        const userCardDOM = photograherInfos.getHTML(photographer)
        photographersSection.innerHTML += userCardDOM;
    })
}

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init()
