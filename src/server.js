import express from "express";
import globalRouter from "./routers/globalRouter";

const app = express();

const PORT = 5000;

const handleListening = () => {
  console.log(`🌼 Server listening on port http://localhost:${PORT} 🌼`);
};

app.listen(PORT, handleListening);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);

export default app;
