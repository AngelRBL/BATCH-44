//ESTE CODIGO ESTA CONECTADO A 2.5-BACKEND

const axios = require('axios')

const { default: Axios } = require('axios');


const fetchMyapi = (id) => {
    return axios.get(`http://localhost:5000/pet/${id}/bambino`)
}

fetchMyapi()
.then(response => {
    const statuscode = response.status
    console.log(response.status);
    return response.data
})
.catch(error => console.log(error.massage))