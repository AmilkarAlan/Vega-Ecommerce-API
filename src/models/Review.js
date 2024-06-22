const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('review', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 

    rating: {
      type: DataTypes.INTEGER,
      allowNull: false

    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
      

    },

  },
  {
    timestamps: false
  });
};