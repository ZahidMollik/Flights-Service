'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Airbus A330',
        capacity: 400,
        createdAt:new Date(),
        updatedAt:new Date()
      }
     ],
      {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airplanes');
  }
};
