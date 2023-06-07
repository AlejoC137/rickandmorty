const axios = require('axios')
const URL =  "https://rickandmortyapi.com/api/character/";


const getAllChars = (res,id) => {
    
axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(resp =>resp.results )// data luego se vuelve la respuesta  para then osea que abajo res = res(del primer .then ).data ↓
    .then((data)=>
    
    // console.log(char)
        res
        .writeHead(200, {'Content-type':'application/json'})
        .end(JSON.stringify(data))
    )
    .catch(error =>{
        return res
            .writeHead(500, {'Content-type':'text/plain'})
            .end(error.message)
        }
    )
}

// getCharById()
module.exports = {getAllChars}