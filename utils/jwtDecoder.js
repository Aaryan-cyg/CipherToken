const jwt = require('jsonwebtoken');

function decodeJWT(token){
    const response=jwt.decode(token,{complete: true});
    console.log(response);
    return response;
}

module.exports =decodeJWT;