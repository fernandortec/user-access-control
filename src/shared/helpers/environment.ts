import dotenv from 'dotenv';

const path = `${__dirname}/../../../.env`;

dotenv.config({ path });

export const { JANE_DOE } = process.env;
