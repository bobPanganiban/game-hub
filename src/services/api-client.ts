import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fa8d8539792c40a1a74da4c329139b15'
    }
})