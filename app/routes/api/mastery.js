import express from 'express';
import { getRandomName, getAutoComplete, getStatistics } from '../../data/business/mastery.js';

const MasteryRouter = express.Router();

MasteryRouter.get('/random', async (req, res) => {
  const name = getRandomName();
  res.send({ name });
});

MasteryRouter.get('/autocomplete', async (req, res) => {
  const { name } = req.query;
  const list = getAutoComplete(name);
  res.send(list);
});

MasteryRouter.get('/statistics', async (req, res) => {
  const { q } = req.query;
  const statistics = getStatistics(q);
  res.send(statistics);
});

export default MasteryRouter;