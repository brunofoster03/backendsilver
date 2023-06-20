const { Sequelize } = require('sequelize')
require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

// Database sequelize connection
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false,
  native: false
})

// Imports models
const EnterpriseModel = require('./models/Enterprise.js')
const ExtraModel = require('./models/Extra.js')
const ReserveModel = require('./models/Reserve.js')
const RolModel = require('./models/Role.js')
const TripModel = require('./models/Trip.js')
const UserModel = require('./models/User.js')

// Create sequelize models
EnterpriseModel(sequelize)
ExtraModel(sequelize)
ReserveModel(sequelize)
RolModel(sequelize)
TripModel(sequelize)
UserModel(sequelize)

// Create database relations
const { Enterprise, Extra, Reserve, Role, Trip, User } = sequelize.models

// User & Role relation
// User.belongsToMany(Role, {through: 'user_roles', timestamps: false, as: 'roles'})
// Role.belongsToMany(User, {through: 'user_roles', timestamps: false, as: 'roles'})
// // User & Enterprise relation
// User.belongsTo(Enterprise, {through: 'enterprise_users', timestamps: false, as: 'employees'})
// Enterprise.belongsToMany(User, {through: 'enterprise_users', timestamps: false, as: 'employees'})
// // User & Reserve relation
// User.belongsToMany(Reserve, {through: 'user_reservations', timestamps: false, as: 'reservations'})
// Reserve.belongsTo(User, {through: 'user_reservations', timestamps: false, as: 'reservations'})
// // User & Trip relation
// User.belongsToMany(Trip, {through: 'user_trips', timestamps: false, as: 'trips'})
// Trip.belongsTo(User, {through: 'user_trips', timestamps: false, as: 'trips'})
// // Reserve & Enterprise relation
// Reserve.hasOne(Enterprise, {foreignKey: 'enterpriseId', timestamps: false, as: 'reserve_enterprise'})
// Enterprise.belongsTo(Reserve, {foreignKey: 'enterpriseId', timestamps: false, as: 'enterprise_reserve'})
// // Trip & Reserve relation
// Trip.hasOne(Reserve, {foreignKey: 'reserveId', timestamps: false, as: 'trip_reserve'})
// Reserve.belongsTo(Trip, {foreignKey: 'reserveId', timestamps: false, as: 'reserve_trip'})
// // Extra & Trip relation
// Extra.hasOne(Trip, {foreignKey: 'tripId', timestamps: false, as: 'extra_trip'})
// Trip.belongsTo(Extra, {foreignKey: 'tripId', timestamps: false, as: 'trip_extra'})

// Exports sequelize models & sequelize database connection
module.exports = {
  Enterprise,
  Extra,
  Reserve,
  Role,
  Trip,
  User,
  database: sequelize
}