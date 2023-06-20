const { DataTypes, UUIDV4 } = require('sequelize')

// Create & export Enterprise model
module.exports = (sequelize) => {
  sequelize.define('Enterprise', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    ruc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}