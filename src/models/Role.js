const { DataTypes } = require('sequelize')

// Create & export Role model
module.exports = (sequelize) => {
  sequelize.define('Role', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.ENUM,
      values: ['admin', 'user', 'driver'],
      allowNull: false
    }
  }, { timestamps: false })
}