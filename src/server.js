require('dotenv').config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";

let app = express();

//config body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view engine
configViewEngine(app);

//config web route
initWebRoutes(app);

let port = process.env.PORT || 8080;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(port, server_host, function() {
    console.log(`Messenger bot is running at the port ${port}`);
});
