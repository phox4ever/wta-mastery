import express from 'express';

const AppRouter = express.Router();

AppRouter.get('/', async (req, res) => {
  res.render('index');
});

export default AppRouter;