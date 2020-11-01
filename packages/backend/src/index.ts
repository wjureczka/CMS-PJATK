import express from 'express';
import passport from 'passport';
import cookiesParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';

import { SERVER_PORT } from 'src/config';
import User from 'src/modules/user/User';

const app = express();

// @ts-ignore
passport.use(User.createStrategy());
// @ts-ignore
passport.serializeUser(User.serializeUser());
// @ts-ignore
passport.deserializeUser(User.deserializeUser());

app.use(cookiesParser());
app.use(bodyParser().json());
app.use(bodyParser().urlencoded({ extended: true }));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send('Express + TypeScript Server: CMS PJATK'));

app.listen(SERVER_PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${SERVER_PORT}`);
});
