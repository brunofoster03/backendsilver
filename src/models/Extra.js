const { DataTypes } = require('sequelize')

// Create & export Extra model
module.exports = (sequelize) => {
  sequelize.define('Extra', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    observations: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'No observations'
    },
    toll: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    parking: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    Detour: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, { timestamps: false })
}