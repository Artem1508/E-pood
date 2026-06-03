import dotenv from "dotenv";
dotenv.config();
import app from "./app";



declare const process: any;

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});