require('dotenv').config()
const { AUTH_SECRET, AUTH_BASEURL, AUTH_CLIENTID, AUTH_ISSUER } = process.env
const { User } = require('./database')

// Auth0 initial configuration
const config = {
  idpLogout: true,
  authRequired: false,
  auth0Logout: true,
  secret: AUTH_SECRET,
  baseURL: AUTH_BASEURL,
  clientID: AUTH_CLIENTID,
  issuerBaseURL: AUTH_ISSUER,
  routes: {
    login: false,
    callback: false,
    postLogoutRedirect: '/custom-logout'
  }
}

module.exports = config