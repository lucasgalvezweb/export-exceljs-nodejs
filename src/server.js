import express, { urlencoded } from "express";
const app = express();
import db from "./models/index";
import alumnoRoutes from "./routes/alumno.routes";

import notifyRoutes from "./routes/index.routes";

app.use(urlencoded({ extended: true }));

alumnoRoutes(app);
notifyRoutes(app);

db.sequelize.sync();

let apiPort = process.env.XMYSQL_API_PORT || 3000;
app.listen(apiPort, () => {
    console.log(`Running at localhost:${apiPort}`);
});