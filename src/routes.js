import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import ResultsController from './app/controllers/ResultsController';
import RespostasController from './app/controllers/RespostasController';
import PlanController from './app/controllers/PlanController';
import ConsultController from './app/controllers/ConsultController';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';
import AnswerHelpOrderController from './app/controllers/AnswerHelpOrderController';
import StudentHelpOrderController from './app/controllers/StudentHelpOrderController';
import DashboardCheckinsByDayController from './app/controllers/DashboardCheckinsByDayController';
import DashboardCheckinsByHourController from './app/controllers/DashboardCheckinsByHourController';
import DashboardBirthdaysController from './app/controllers/DashboardBirthdaysController';
import StudentWithoutRegistrationController from './app/controllers/StudentWithoutRegistrationController';

import validateSessionStore from './app/validators/SessionStore';
import validateStudentStore from './app/validators/StudentStore';
import validateStudentUpdate from './app/validators/StudentUpdate';
import validateStudentDelete from './app/validators/StudentDelete';
import validateConsultStore from './app/validators/ConsultStore';
import validatePlanStore from './app/validators/PlanStore';
import validatePlanUpdate from './app/validators/PlanUpdate';
import validatePlanDelete from './app/validators/PlanDelete';
import validateResultsStore from './app/validators/ResultsStore';
import validateResultsUpdate from './app/validators/ResultsUpdate';
import validateResultsDelete from './app/validators/ResultsDelete';
import validateRegistrationStore from './app/validators/RegistrationStore';
import validateRegistrationUpdate from './app/validators/RegistrationUpdate';
import validateRegistrationDelete from './app/validators/RegistrationDelete';
import validateHelpOrderStore from './app/validators/HelpOrderStore';
import validateAnswerHelpOrderStore from './app/validators/AnswerHelpOrderStore';
import validateCheckinStore from './app/validators/CheckinStore';
import validateCheckinIndex from './app/validators/CheckinIndex';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

const convertLimitToInt = (req, res, next) => {
  req.query.limit = parseInt(req.query.limit, 10);
  next();
};

/*
 * PUBLIC ROUTES
 */
routes.post('/sessions', validateSessionStore, SessionController.store);

routes.get(
  '/students/:student_id/checkins',
  validateCheckinIndex,
  CheckinController.index
);
routes.post(
  '/students/:student_id/checkins',
  validateCheckinStore,
  CheckinController.store
);
routes.get(
  '/students/:student_id/help-orders',
  StudentHelpOrderController.index
);
routes.post(
  '/students/:student_id/help-orders',
  validateHelpOrderStore,
  HelpOrderController.store
);

routes.use(authMiddleware);

/*
 * PRIVATE ROUTES
 */
routes.get('/dashboard/checkins/day', DashboardCheckinsByDayController.index);
routes.get('/dashboard/checkins/hour', DashboardCheckinsByHourController.index);
routes.get('/dashboard/birthdays', DashboardBirthdaysController.index);

routes.get(
  '/report/students/without/registration',
  StudentWithoutRegistrationController.index
);

routes.get('/students', convertLimitToInt, StudentController.index);
routes.post('/students', validateStudentStore, StudentController.store);
routes.put('/students/:id', validateStudentUpdate, StudentController.update);
routes.delete('/students/:id', validateStudentDelete, StudentController.delete);

routes.get('/plans', convertLimitToInt, PlanController.index);
routes.post('/plans', validatePlanStore, PlanController.store);
routes.put('/plans/:id', validatePlanUpdate, PlanController.update);
routes.delete('/plans/:id', validatePlanDelete, PlanController.delete);

routes.get('/results', convertLimitToInt, ResultsController.index);
routes.post('/results', validateResultsStore, ResultsController.store);
routes.put('/results/:id', validateResultsUpdate, ResultsController.update);
routes.delete('/results/:id', validateResultsDelete, ResultsController.delete);

routes.get('/respostas', convertLimitToInt, RespostasController.index);

routes.get('/students/:student_id/consults', ConsultController.index);
routes.post(
  '/students/consults',
  validateConsultStore,
  ConsultController.store
);
routes.put(
  '/students/consults/:id',
  ConsultController.update
);

routes.get(
  '/students/consults/:id',
  ConsultController.result
);

routes.get('/registrations', convertLimitToInt, RegistrationController.index);
routes.post(
  '/registrations',
  validateRegistrationStore,
  RegistrationController.store
);
routes.put(
  '/registrations/:id',
  validateRegistrationUpdate,
  RegistrationController.update
);
routes.delete(
  '/registrations/:id',
  validateRegistrationDelete,
  RegistrationController.delete
);

routes.get('/help-orders', HelpOrderController.index);
routes.post(
  '/help-orders/:help_order_id/answer',
  validateAnswerHelpOrderStore,
  AnswerHelpOrderController.store
);

export default routes;
