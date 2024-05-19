require('dotenv').config();

const PORT = process.env.PORT ?? 1414;
const DB = process.env.DB ?? 'localhost';

export { PORT, DB };
