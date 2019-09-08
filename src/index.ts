import express, { Request, Response } from "express";

import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./controllers/rootcontroller";
import "./controllers/LoginController";
import { AppRouter } from "./appRouter";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["tuperidf"] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log(`listening on port 3K`);
});
