
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Courses extends Sequelize.Model {}
  Courses.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    estimatedTime: {
        type: Sequelize.STRING
    },
    materialsNeeded: {
    type: Sequelize.STRING
    }
  }, { sequelize });

  Courses.associate = (models) => {
    Courses.belongsTo(models.Users, {
      as: 'teacher',
      foreignKey: {
        fieldName: 'userId',
        allowNull: false,
      },
    });
  };

  return Courses;
};