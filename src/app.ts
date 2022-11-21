import express, { Application } from 'express';
require('dotenv').config();
import router from './routes/index';
const app: Application = express();

//settings
app.set('port', process.env.PORT);

app.use(router);
export default app;
