import express, { Express, Request, Response, Router } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import "dotenv/config";
import mongoose, { Error } from "mongoose";

const app: Express = express();
const router: Router = express.Router();

app.set("view engine", "ejs");

// Middlewares
app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", express.static("public"));

app.use("/", router);

const server = http.createServer(app);

app.post("/submit-form", (req: Request, res: Response) => {
  res.send(req.body);
});

app.get("/admin", (req: Request, res: Response) => {
  res.render("admin");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}/`);
});

const MONGO_URL = process.env.MONGODB_CONNECTION_STRING;
console.log(MONGO_URL);

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => {
  console.error(error);
});
