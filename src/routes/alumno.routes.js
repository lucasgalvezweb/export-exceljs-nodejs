import { Router } from "express";
import { exportExcel } from "../controllers/alumnos/export-alumnos-excel.controller";

let routes = (app) => {
    Router.get("/download", exportExcel);
    app.use("/api/excel", Router);
};

export default routes;