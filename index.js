const server = require('./src/index.js')
const { database } = require('./src/database.js')
require('dotenv').config()
const { DB_PORT } = process.env

// Syncs sequelize models & starts server
database.sync({ force: true }).then(() => {
  server.listen(DB_PORT, () => {
    console.log('Silver Express listening at port', DB_PORT)
  })
})
