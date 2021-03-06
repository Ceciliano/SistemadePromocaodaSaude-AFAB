import Sequelize from 'sequelize';

import User from '../app/models/User';
import Student from '../app/models/Student';
import Plan from '../app/models/Plan';
import Results from '../app/models/Results';
import Registration from '../app/models/Registration';
import Checkin from '../app/models/Checkin';
import HelpOrder from '../app/models/HelpOrder';
import Respostas from '../app/models/Respostas';
import Consult from '../app/models/Consult';
import ConsultResposta from '../app/models/ConsultResposta';


import databaseConfig from '../config/database';
import Consult from '../app/models/Consult';

const models = [
  User,
  Student,
  Plan,
  Results,
  Registration,
  Checkin,
  HelpOrder,
  Respostas,
  Consult,
  ConsultResposta
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
