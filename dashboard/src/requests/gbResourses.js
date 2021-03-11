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
    },
    products: ()=>{
        return axios({
            ...defaults,
            method: 'GET',
            url: url + 'products'
        })
    },
    detailUser: (id)=>{
        return axios ({
            ...defaults,
            method: 'GET',
            url: url + 'users/' + id
        })
    }
}

