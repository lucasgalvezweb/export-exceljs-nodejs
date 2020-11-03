import { DB, USER, PASSWORD, HOST, dialect as _dialect, pool as _pool } from "../config/db.config";
import Sequelize from "sequelize";

const sequelize = new Sequelize(DB, USER, PASSWORD, {

    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    },   
    subQuery: false,

    host : HOST,
    dialect : _dialect,
    operatorsAliases: false,

    pool: {
        max: _pool.max,
        min: _pool.min,
        acquire: _pool.acquire,
        idle: _pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.alumnos = require("../models/alumnos.model")(sequelize, Sequelize);

export default {
    db,
};