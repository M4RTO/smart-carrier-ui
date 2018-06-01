const config = require('../config/config.js').get(process.env.REACT_APP_ENV);
const axios = require('axios');

axios.defaults.baseURL = config.host;
axios.defaults.headers.common['apiKey'] = config.headers.apiKey;

class ShipmentService {
    static getAll() {
        return axios.get(`/shipments`)
                .then(resp => resp.data)
            .catch(error => console.log(error));
    }
    
}

module.exports = ShipmentService;
