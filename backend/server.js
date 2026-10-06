import express from "express";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import alertsRoute from "./routes/alerts.route.js";
import authRoute from "./routes/auth.route.js";


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({}));
app.use(express.json());
app.use(helmet());


app.use("/api/alerts", alertsRoute);
app.use("/api/auth", authRoute);


app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "somthig wrong!"
    });

});


app.listen(PORT, () => {
    console.log(`server runing on http://localhost:${PORT}`);
});