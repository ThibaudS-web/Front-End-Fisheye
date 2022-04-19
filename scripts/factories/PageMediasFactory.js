import PictureCard from "../../templates/PictureCard.js"
import VideoCard from "../../templates/VideoCard.js"

class PageMediasFactory {
    getContent(data, onClick) {

        if (data.image) {

            return new PictureCard(data, onClick).createPictureOnPage()

        } else if (data.video) {

            return new VideoCard(data, onClick).createVideoOnPage()

        } else {

            throw 'Unknow format type'

        }
    }
}

export default PageMediasFactory