// const request = require('request')


// const URI = `https://pokeapi.co/api/v2`

// const getDitto = () => {
//   request.get(`${URI}/pokemon/ditto`, (error, response) => {
//     if (response.statusCode === 200) {
//       const parsedJson = JSON.parse(response.body)
//       console.log(parsedJson.name);
//     } else {
//       console.log(`Hubo un error: código ${response.statusCode}`);
//     }
//   })
// }


// getDitto()


//Crear función "getPokemonById" que reciba como parametro el nombre del pokemon y lo busque
// Crear función "getPokemonTypes" e imprimirlos en la consola

// --------------------->CHALLENGE<----------------------//
// const request = require('request')

// const URI = `https://pokeapi.co/api/v2`

// const getPokemonById = (pokemonId) => {
//     request.get(`${URI}/pokemon/${pokemonId}`, (error, response, body) => {
//       if (response.statusCode === 200) {
//         const parsedJson = JSON.parse(response.body);
//         console.log(`Información pokemon:`, parsedJson);
//       } else {
//         console.log(`Hubo un error de código: ${response.statusCode}`);
//       }
//     });
//   };
//   getPokemonById(4);
// //------------>2do CHALLENGE<------------//  

//   const getPokemonTypes = () => {
//       request.get(`${URI}/type`, (error, response, body) => {
//           if (response.statusCode === 200) {
//             const parsedJson = JSON.parse(response.body);
//             console.log(`Tipos de pokemon:`, parsedJson);
//           } else {
//             console.log(`Hubo un error de código: ${response.statusCode}`);
//           }
//         });
//   }
//   getPokemonTypes('grass');

//---------->CHALLENGE NASA<----------//

// const request = require('request')


const NASA_URI = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-08-18&end_date=2020-08-24&api_key=JliHQNFzdiu27fjDSbAjg06PmQBfzMYNpdtJQMDM'

const getDangerousAteroids = () => {
    Response.get(`${NASA_URI}`, (error, Response, body) => {
        if(Response.statuscode === 200){
            const body = JSON.parse(Response.body)
            console.log(body)
        }else {
            console.log(`hubo un error, codigo: ${response.statuscode}`)
            console.log(error, Response)
        }
    })
}
getDangerousAteroids()

//------------>2.2 PROMESAS<-----------//
//Resolve: se ejecuta cuando el objetivo
