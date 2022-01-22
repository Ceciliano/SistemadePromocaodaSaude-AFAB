module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      atividades: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      naturalidade: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      religiao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      raca: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      estadocivil: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      escolaridade: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      rendafamiliar: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      doencascronicas: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      niveldependencia: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('students');
  },
};
