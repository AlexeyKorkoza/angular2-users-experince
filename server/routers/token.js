var jwt = require('express-jwt');
var jwtSecret = "Anaheim Mighty Ducks";

function getTokenFromHeader(req){
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

var token = {
  required: jwt({
    secret: jwtSecret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  })
};

module.exports = token;