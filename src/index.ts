import express, { Request, Response } from "express";

import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { router } from "./routes/loginRoutes";
import "./controllers/LoginController";
import { AppRouter } from "./appRouter";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["tuperidf"] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log(`listening on port 3K`);
});
