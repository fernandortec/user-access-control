import dotenv from 'dotenv';
import express from 'express';

import 'reflect-metadata';
import { routes } from './routes/index.routes';
import './shared/container';

const path = `${__dirname}/../../../.env`;

dotenv.config({ path });

const app = express();

app.use(express.json());
app.use(routes);

// if (err instanceof AppError) {
//   reply.status(err.statusCode).send({
//     status: 'error',
//     statusCode: err.statusCode,
//     message: err.message
//   });
// }
// reply.status(500).send({
//   status: 'error',
//   message: `Internal Server Error ${err.message}`
// });

export { app };
