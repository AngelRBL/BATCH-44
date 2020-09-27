//------>EJEMPLO DE PROMESA<----------/

// const { default: Axios } = require("axios")

// const error = false

// const promiseTest = new Promise((resolve, reject)=>{
//     if (!error) { 
//     resolve('cuando la promesa es resuelta')
//     }else {reject('cuando falla')
//     }
// })

// promiseTest
// .then(resolve => {
//     console.log(resolve)
// })
// .catch(error => {
//     console.log(error)
// })

//------> AQUI SE DEFINE UNA PROMESA AL PRINCIPIO<---------//
// const request = require('request');
// const { default: Axios } = require('axios');
// const URI = `https://pokeapi.co/api/v2`

// const getPokemonById = (id) => {
//   return new Promise((resolve, reject) => {
//     request.get(`${URI}/pokemon/${id}`, (error, response, body) => {
//       if (response.statusCode === 200) {
//         const body = JSON.parse(response.body)
//         resolve(body.name)
//       } else {
//         reject(`Hubo un error. ${response.body}`)
//       }
//     })
//   })
// }

// getPokemonById(`ditto`)
// .then(resolve => console.log(resolve))
// .catch(error => console.log(error))

//---------->ESTE FUNCIONA CON EL PAQUETE AXIOS<-----------//
// const axios = require('axios')

// axios.get(`${URI}/pokemon/${18}`)
// .then(resolve => console.log(resolve))
// .catch(error => console.log(error))



// getPokemonById(18)
// .then(response => {
//     console.log(response.data.name)
// })


//---------->AQUI ES CON .THEN Y .CATCH<-------------//
// getPokemonById(18)
// .then(response => {
//     const statuscode = response.status
//     const body = response.data
//     console.log(body.name, statuscode)
// })
// .catch(error => console.log(error))

//----------->ESTE ES CON ASYNC Y NORMALMETE ES EL QUE UTILIZA EL PROFESOR EN SU TRABAJO<----------------//
// const asyncPokeIde = async () => {
//     try{
//         const response = await axios.get(`${URI}/pokemon/${id}`)
//         if(response.status === 200) {
//             const body = respose.data
//             return body
//         }else {
//             throw new Error('Mensaje de error')
//         } 
//     }catch (error) {
//         console.log(error.massage)
//     }
// }
//---------->CHALLENGE 1<-----------//
// const axios = require('axios')

// const getPokemon = async (name) => {
//     try {
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
//         if (response.status ===200) {
//         const response = response.data
//         return response

//        }else {
//         throw new Error(`Hubo un problema`)
//     }
//     } catch (error) {
//         console.log(error.massage)
//     }

// }
// getPokemon(('ditto'))



//--------------------->CHALLENGE 2<-----------------------//

// const getDangerousAteroids = async(start_date, end_date, api_key) => {
// const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${api_key}`
// const response = await Axios.get(NASA_URI)
// console.log(response.data)
// return response.data
// }

// getDangerousAteroids('2021-08-24','2020-08-24','JliHQNFzdiu27fjDSbAjg06PmQBfzMYNpdtJQMDM')
// .then(resolve => console.log(resolve))
// .catch(error => console.log(error.massage))

// getDangerousAteroids = async (start_date, end_date, api_key) => {
//     try{
//         const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${api_key}`

//         const response = await Axios.get(NASA_URI)

//         const body = response.data

//         const NEOarray = Object.values(body.near_earth_objects)

//         const flattedNEO = NEOarray.flat()

//         const getDangerousAteroids = flattedNEO.filter(asteroid => asteroid.is_potentially_hazardous_asteroid)

//         console.log(dangerousAsteroids)
//         return dangerousAsteroids
//     } catch (error) {
//         throw new Error(error.massage)
//     }
// }
// getDangerousAteroids('2020-08-18','2020-08-24','JliHQNFzdiu27fjDSbAjg06PmQBfzMYNpdtJQMDM')

// const dates = {
//     '2020-08-18': [{},{},{}],
//     '2020-08-18': [{},{}],
//     '2020-08-18': [{}],
//     '2020-08-18': []
// }


//-------------->EJEMPLO<---------//

//---->Object.value()---->Se convierte en un arreglo con los valores
//---->Object.keys()---->Hace un arreglo de llaves
//---->NEOarray----> el arrray solo lo utilizo para ver que es un arreglo
//--->NEO es de objetos cercanos a la tierra

// const getAsteroids = (start_date, end_date, api_key) => {
//     const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${api_key}`
//     const response = axios.get(NASA_URI)
//     return response.data
// }
// getAsteroids('2020-08-18','2020-08-24','JliHQNFzdiu27fjDSbAjg06PmQBfzMYNpdtJQMDM')
//----------------------------------//
//-------EJERCICIO DE 2.5-BACKEND CONECATADO A INDEX.JS------//

