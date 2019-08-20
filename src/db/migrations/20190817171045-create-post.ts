import 'regenerator-runtime/runtime'
import { QueryInterface } from 'sequelize'
import uuid from 'uuid/v4'

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: any) =>
    queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuid(),
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: async (queryInterface: QueryInterface) =>
    queryInterface.dropTable('Posts'),
}
