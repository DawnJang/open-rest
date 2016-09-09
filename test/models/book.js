var Sequelize = require('sequelize')
  , _         = require('lodash');

module.exports = function(sequelize) {
  return _.extend(sequelize.define('book', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [2, 30]
      }
    },
    avatar: {
      type: Sequelize.STRING(255)
    }
  }), {
    searchCols: {
      name: {
        op: 'LIKE',
        match: "%{1}%"
      },
      email: {
        op: 'LIKE',
        match: "%{1}%"
      }
    }
  });
};
