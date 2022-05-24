export default class YoutubeServ {
    constructor(key,opt) {
        this.key = key;
        this.opt = opt;
        this.getRequestOptions  = {
            method: "GET",
            redirect: 'follow',
        }
    }

    async mostPopular() {
        return await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${this.opt.maxLength}&key=${this.key}`,
            this.getRequestOptions
        )
        .then(response => response.json())
        .then(result => result.items) 
    }

    async search(query) {
            return await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${this.opt.maxLength}&q=${query}&type=video&key=${this.key}`, 
            this.getRequestOptions
        )
        .then(response => response.json())
        .then(result => result.items.map(item => ({...item,id:item.id.videoId})))
    }
}