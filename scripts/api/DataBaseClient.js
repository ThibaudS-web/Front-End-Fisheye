class DataBaseClient {
    constructor() {
        this.url = '../../data/photographers.json'
    }

    async getDB() {
        const response = await fetch(this.url)
        this.handleErrors(response)
        const result = await response.json()
        return result
    }

    async getPhotographers() {
        const dataBase = await this.getDB()
        const photographers = dataBase?.photographers
        return photographers
    }

    async getMedias() {
        const dataBase = await this.getDB()
        const medias = dataBase?.media
        return medias
    } 

    handleErrors(response) {
        if (!response.ok) throw new Error(response.status)
        return response
    }
}

export const dataBaseClient = new DataBaseClient()
