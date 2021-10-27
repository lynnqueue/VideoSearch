import axios from 'axios';

const KEY = 'AIzaSyDx7E_35jHwxhc4Zrm-rGsOklkO-heC8J4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});