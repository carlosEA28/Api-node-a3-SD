import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import router from "./routes/userRoutes.js";
import connectDb from "./db/mongoDB/index.js";
import dotenv from "dotenv";
import CategoryRouter from "./routes/categoryRoutes.js";
dotenv.config();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", router);
app.use("/api", CategoryRouter);
connectDb();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
