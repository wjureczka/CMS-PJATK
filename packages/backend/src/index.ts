import express from 'express';

import { SERVER_PORT } from 'src/config';

const app = express();


app.get('/', (req, res) => res.send('Express + TypeScript Server: CMS PJATK'));

app.listen(SERVER_PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${SERVER_PORT}`);
});
