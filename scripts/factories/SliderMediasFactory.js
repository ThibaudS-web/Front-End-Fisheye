import SliderMedias from "../../templates/SliderMedia.js"

class SliderMediasFactory {
    getContent(data) {

        if (data.image) {

            return new SliderMedias(data).createPictureOnSlider()

        } else if (data.video) {

            return new SliderMedias(data).createVideoOnSlider()

        } else {

            throw "Slider does not recognize this data"
            
        }
    }
}

export default SliderMediasFactory

