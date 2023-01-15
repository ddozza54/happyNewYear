import express from "express";
import globalRouter from "./routers/globalRouter";

const app = express();

const PORT = 5000;

const handleListening = () => {
  console.log(`🌼 Server listening on port http://localhost:${PORT} 🌼`);
};

app.listen(PORT, handleListening);

app.use("/", globalRouter);

export default app;
