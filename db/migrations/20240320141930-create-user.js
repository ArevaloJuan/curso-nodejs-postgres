'use strict';

const { UserSchema, USER_TABLE} = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);//creacion
  },

  async down (queryInterface, Sequelize) {//revertir cambios
    await queryInterface.dropTable(USER_TABLE);
  }
};
