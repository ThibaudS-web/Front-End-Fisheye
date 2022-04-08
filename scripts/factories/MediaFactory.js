import PictureCard from "../../templates/PictureCard.js"
import VideoCard from "../../templates/VideoCard.js"

class MediaFactory {
    constructor(data) {
        if (data.image) {
            return new PictureCard().createPictureOnPage(data)
        } else if (data.video) {
            return new VideoCard().createVideoOnPage(data)
        } else {
            return 'Unknow format type'
        }
    }
}

export default MediaFactory