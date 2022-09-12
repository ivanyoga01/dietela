// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/route.js";
// Import Body Parser
import bodyParser from "body-parser";

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Testing database connection
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// use router
app.use(Router);

// listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'));

export default app;
