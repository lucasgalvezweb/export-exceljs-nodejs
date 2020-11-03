import { Router } from "express";

import notifyController from "../controllers/notification/send-email.controller"; 

let routes = (app) => {
    app.use("/api/v1", Router);
    Router.post("/notify", notifyController.sendEmailNotification);
};

export default routes;