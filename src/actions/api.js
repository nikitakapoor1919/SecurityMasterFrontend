import axios from "axios";

const baseUrl = "http://localhost:14011/api/"



export default {

    Bond(url = baseUrl + 'bond/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            // create: newRecord => axios.post(url, newRecord),
            create: () => axios.post(url),
           // update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}