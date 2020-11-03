import { createTransport } from 'nodemailer';

const sendEmailNotification = (req, res) => {

    console.log(req.body);
    const { name, email, dni, codigo, fecha_firma } = req.body;

    mailTemplate = `
        <h3>Estimado Alumno(a),</h3>
        <p>Te informamos que se ha recibido la aceptación a la carta compromiso de cumplimiento de las políticas de UTEC sobre el regreso al campus durante la pandemia, indicado en el documento "Procedimiento de ingreso y permanencia en el campus durante pandemia - Alumnos".</p>
        <p>Los datos ingresados fueron:</p>
        <ul>
        <li>Nombres Completos: <span style="font-weight: bold;">${name}</span></li>
        <li>DNI: <span style="font-weight: bold;">${dni}</span></li>
        <li>Codigo: <span style="font-weight: bold;">${codigo}</span></li>
        <li>Fecha y Hora de la Aceptación: <span style="font-weight: bold;">${fecha_firma}</span></li>
        </ul>
    `;

    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER, 
            pass: process.env.MAIL_PASSWORD
        }
    });
    
    const mailOptions = {
        from: 'reglamentos_seguridad@utec.edu.pe',
        to: `${email}`,
        subject: 'Confirmación de Firma de Carta Compromiso COVID-19',
        html: mailTemplate
    };
    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.json({
        "status": "success",
        "message": "Mail enviado"
    });

};

export default {
    sendEmailNotification,
};