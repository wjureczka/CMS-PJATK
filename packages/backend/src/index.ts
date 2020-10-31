import express from 'express';

import { SERVER_PORT } from 'src/config';

const app = express();


app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(SERVER_PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${SERVER_PORT}`);
});
