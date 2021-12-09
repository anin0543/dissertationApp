import axios from 'axios'
export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://video.pleaz.io/api/photo/list?format=json',
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        'params': {
            'search':'parameter',
        },
    })
}