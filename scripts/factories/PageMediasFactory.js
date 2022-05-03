import PictureCard from "../../templates/PictureCard.js"
import VideoCard from "../../templates/VideoCard.js"

class PageMediasFactory {
    create(data) {

        if (data.image) {

            return new PictureCard(data)

        } else if (data.video) {

            return new VideoCard(data)

        } else {

            throw 'Unknow format type'

        }
    }
}

export default PageMediasFactory