import axios from 'axios';

const KEY = 'AIzaSyBZcceDRI6Sg4PSlbPdvTWN9zDaIf116mY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        maxResults: 5,
        part:'snippet',
        key: KEY
    }
})
