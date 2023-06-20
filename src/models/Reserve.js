const { DataTypes, UUIDV4 } = require('sequelize')

// Create & export Reserve model
module.exports = (sequelize) => {
  sequelize.define('Reserve', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    reserve: {
      type: DataTypes.DATE,
      allowNull: false
    },
    trip: {
      type: DataTypes.DATE,
      allowNull: false
    },
    startPoint: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endPoint: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}