const db = require("../../models/index").default;
const Alumno = db.alumnos;

const excel = require("exceljs");

const exportExcel = (req, res) => {
    Alumno.findAll().then((objs) => {
        let alumnos = [];

        objs.forEach(obj => {
            alumnos.push({
                ID: obj.ID,
                emailAlumno: obj.emailAlumno,
                nombre_completo_alumno: obj.nombre_completo_alumno,
                dni_alumno: obj.dni_alumno,
                codigo_alumno: obj.codigo_alumno,
                documento_covid: obj.documento_covid,
                fecha_documento_covid: obj.fecha_documento_covid,
            });
        });

        

        let workbook = new excel.Workbook();
        let worksheet = workbook.addWorksheet("Alumnos");

        worksheet.columns = [
            { header: "ID", key: "ID", width: 5 },
            { header: "Correo", key: "emailAlumno", width: 25 },
            { header: "Nombre y Apellidos", key: "nombre_completo_alumno", width: 25 },
            { header: "DNI", key: "dni_alumno", width: 10 },
            { header: "Codigo del Alumno", key: "codigo_alumno", width: 10 },
            { header: "¿Firmó documento?", key: "documento_covid", width: 5 },
            { header: "Fecha?", key: "fecha_documento_covid", width: 10 },
        ];

        worksheet.addRows(alumnos);

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader(
            "Content-Disposition",
            "attachment; filename=" + "alumnos_doc_covid19.xlsx"
        );

        return workbook.xlsx.write(res).then(function () {
            res.status(200).end();
        });
    });
};

module.exports = {
    exportExcel,
};