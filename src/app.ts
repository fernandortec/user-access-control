import 'reflect-metadata';
import './shared/container';
import './infra/database';

import dotenv from 'dotenv';
import express from 'express';

import { routes } from './routes/index.routes';

const path = `${__dirname}/../../../.env`;

dotenv.config({ path });

const app = express();

app.use(express.json());
app.use(routes);

export { app };
