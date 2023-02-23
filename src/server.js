import "./db";
import "./models/User";
import express from "express";
import rootRouter from "./routers/rootRouter";

const PORT = 5000;

const app = express();

const handleListening = () => {
  console.log(`🌼 Server listening on port http://localhost:${PORT} 🌼`);
};

app.listen(PORT, handleListening);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);

export default app;
