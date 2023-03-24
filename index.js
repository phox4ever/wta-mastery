import chalk from 'chalk';
import figlet from 'figlet';
import express from 'express';
import bodyParser from 'body-parser';
import Router from './routes/index.js';
import { engine } from 'express-handlebars';
import { printLogo, printDescription } from './utils/printUtils.js';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));

Router(app);

app.listen(3000);
printLogo();
printDescription();

