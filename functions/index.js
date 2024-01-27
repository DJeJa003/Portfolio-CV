const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const formData = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jetcher77@gmail.com',
        pass: '8VptLhdWzpx2hWc!',
      },
    });

    const mailOptions = {
        from: 'jetcher77@gmail.com',
        to: 'jere-janhunen@hotmail.com',
      subject: `New Form Submission - ${formData.subject}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      return res.status(200).send('Email sent successfully!');
    });
  });
});