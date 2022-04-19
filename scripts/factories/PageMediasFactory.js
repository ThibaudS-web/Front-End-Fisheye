import PictureCard from "../../templates/PictureCard.js"
import VideoCard from "../../templates/VideoCard.js"

class PageMediasFactory {
    getContent(data) {

        if (data.image) {

            return new PictureCard(data).createPictureOnPage()

        } else if (data.video) {

            return new VideoCard(data).createVideoOnPage()

        } else {

            throw 'Unknow format type'

        }
    }
}

export default PageMediasFactory