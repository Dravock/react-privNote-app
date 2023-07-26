require('dotenv').config();
const express = require("express"); 
const bodyParser = require("body-parser");
const apicache = require("apicache");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express(); 
const cache = apicache.middleware;
const API_PORT = process.env.API_PORT || 3000; 

app.use(bodyParser.json());
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(API_PORT, () => { 
    console.log(`API is listening on port ${API_PORT}`); 
    V1SwaggerDocs(app, API_PORT);
});