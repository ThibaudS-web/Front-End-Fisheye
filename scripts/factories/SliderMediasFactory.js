import SliderMedias from "../../templates/SliderMedia.js"

class SliderMediasFactory {
    getContent(data) {

        if (data.querySelector('img')) {

            return new SliderMedias(data).createPictureOnSlider()

        } else if (data.querySelector('video')) {

            return new SliderMedias(data).createVideoOnSlider()

        } else {

            throw "Slider does not recognize this data"

        }
    }
}

export default SliderMediasFactory

//Créer des enums pour gérer seulement le type