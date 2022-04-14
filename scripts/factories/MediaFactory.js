import PictureCard from "../../templates/PictureCard.js"
import SliderMedias from "../../templates/SliderMedia.js"
import VideoCard from "../../templates/VideoCard.js"

class MediaFactory {
    getContent(data, layout) {
        switch (layout) {
            case 'page':
                if (data.image) {
                    return new PictureCard(data).createPictureOnPage()
                } else if (data.video) {
                    return new VideoCard(data).createVideoOnPage()
                } else {
                    throw 'Unknow format type'
                }
            case 'slider':
                if (data.querySelector('img')) {
                    console.log('image')
                    return new SliderMedias(data).createPictureOnSlider()
                } else if (data.querySelector('video')) {
                    console.log('video')
                    return new SliderMedias(data).createVideoOnSlider()
                } else {
                    throw "Slider does not recognize this data"
                }
            default: 'Unknow Layout!'
        }
    }
}

export default MediaFactory