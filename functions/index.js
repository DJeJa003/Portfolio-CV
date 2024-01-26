const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendEmail = functions.https.onRequest((req, res) => {
  const formData = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jetcher77@gmail.com',
      pass: '8VptLhdWzpx2hWc!',
    },
  });

  // Define the email content
  const mailOptions = {
    from: 'jetcher77@gmail.com',
    to: 'jere-janhunen@hotmail.com',
    subject: `New Form Submission - ${formData.subject}`,
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    return res.status(200).send('Email sent successfully!');
  });
});
