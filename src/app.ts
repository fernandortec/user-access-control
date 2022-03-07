import dotenv from 'dotenv';
import express from 'express';

import 'express-async-errors';
import 'reflect-metadata';
import './infra/database';
import { routes } from './routes/index.routes';
import './shared/container';

const path = `${__dirname}/../../../.env`;

dotenv.config({ path });

const app = express();

app.use(express.json());
app.use(routes);

export { app };
