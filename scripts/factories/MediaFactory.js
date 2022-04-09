import PictureCard from "../../templates/PictureCard.js"
import VideoCard from "../../templates/VideoCard.js"

class MediaFactory {
    constructor(data, layout) {
        if (data.image) {
            switch (layout) {
                case 'page':
                    return new PictureCard().createPictureOnPage(data)
                case 'slider':
                    return new PictureCard().createPictureOnSlider(data)
                default:
                    console.log("Sorry, layout unknow")
            }
        } else if (data.video) {
            switch (layout) {
                case 'page':
                    return new VideoCard().createVideoOnPage(data)
                case 'slider':
                    return new VideoCard().createVideoOnSlider(data)
                default:
                    console.log("Sorry, layout unknow")
            }
        } else {
            return 'Unknow format type'
        }
    }
}

export default MediaFactory