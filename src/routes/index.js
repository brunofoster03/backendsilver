const { Router } = require('express')
const { auth, requiresAuth } = require('express-openid-connect')
const { User } = require('../database')

// Create router
const router = Router()

// Test route
router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
})

router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user))
})

router.get('/login', (req, res) =>
  res.oidc.login({
    returnTo: '/profile',
    authorizationParams: {
      redirect_uri: 'http://localhost:7209/callback',
    },
  })
)

router.get('/custom-logout', (req, res) => res.send('bye'))

router.post('/callback', async (req, res) => {
  try{
    await res.oidc.callback({
      redirectUri: 'http://localhost:7209/callback'
    })
    const userData = req.oidc.user

    await User.findOrCreate({
      where: {
        id: userData.sub
      },
      defaults: {
        name: userData.name,
        email: userData.email
      }
    })

  }
  catch(error){
    console.log(error)
  }
}
)

// Exports router
module.exports = router