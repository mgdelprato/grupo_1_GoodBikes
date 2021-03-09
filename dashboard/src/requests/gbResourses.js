let axios = require('axios');
let defaults = require('./defaults');
const url = 'api/'

module.exports = {
    users: ()=>{
        return axios({
            ...defaults,
            method: 'GET',
            url: url + 'users'
        })
    }
}
