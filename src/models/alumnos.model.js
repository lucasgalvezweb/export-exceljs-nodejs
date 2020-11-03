module.exports = (sequelize, Sequelize) => {
    const Alumno = sequelize.define("agreementsalumno", {
        ID: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        emailAlumno: {
            type: Sequelize.STRING
        },
        nombre_completo_alumno: {
            type: Sequelize.STRING
        },
        dni_alumno: {
            type: Sequelize.INTEGER
        },
        codigo_alumno: {
            type: Sequelize.INTEGER
        },
        documento_covid: {
            type: Sequelize.BOOLEAN
        },
        fecha_documento_covid: {
            type: Sequelize.DATE
        }
    });

    return Alumno;
};