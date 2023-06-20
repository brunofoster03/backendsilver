const { DataTypes, UUIDV4 } = require('sequelize')

// Create & export Trip model
module.exports = (sequelize) => {
  sequelize.define('Trip', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM,
      values: ['hour', 'point', 'courier', 'pointtopoint'],
      allowNull: false
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false  
    },
    end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    state: {
      type: DataTypes.ENUM,
      values: ['pending', 'complete', 'cancel', 'inprogress'],
      allowNull: false,
      defaultValue: 'pending'
    },
    driverRating: {
      type: DataTypes.DECIMAL(2,1),
      allowNull: true
    },
    userRating: {
      type: DataTypes.DECIMAL(2,1),
      allowNull: true
    }
  }, { timestamps: false })
}