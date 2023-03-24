/**
 * @author Nicolas Haenni <n.haenni@hf-ict.ch>
 */

import AppRouter from './app/index.js';
import MasteryRouter from './api/mastery.js';

export default function(app) {
  app.use('/', AppRouter);
  app.use('/mastery', MasteryRouter);
};
