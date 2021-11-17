import { observable, action } from 'mobx'

import axios from 'axios'

let baseURL = 'https://pleaz.io/wp-json/'

class AppStore {
    api = axios.create({ baseURL })

    @observable users = []

    getUsers = async () => {
        let users = await this.api.get('wp/v2/')
        console.log(users)
    }

    @observable title = "Hello World HI"
    @action onChangeText = (val) => {
        this.title = val
    }

}

export default AppStore