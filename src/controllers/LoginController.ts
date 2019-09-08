import { Request, Response, Router, NextFunction } from "express";
import { get } from "./decorators/routes";

@controller("/")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response) {
    res.send(`
        <form method ="POST">
      <div>
      <label>Email</label>
      <input name="email"/>
      </div>
      <div>
      <label>Password</label>
      <input type="password" name="password"/>
      </div>
      <button>Submit</button>
        </form>
        `);
  }
}
