const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const emaili = process.env.APP_EMAIL;
const password = process.env.APP_PASSWORD;
const email2 = process.env.PERSONAL_EMAIL;


exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const formData = req.body;

    if (!formData || typeof formData !== 'object') {
        return res.status(400).send('Invalid form data');
    }

    const { name, email, subject, message } = formData;
    console.log('Decoded formData:', { name, email, subject, message });
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emaili,
        pass: password,
      },
    });

    if (!email || email.trim() === '') {
        alert('Email is required.')
        return res.status(400).send('Email is required.');
      }

    const mailOptions = {
        from: emaili,
        to: email2,
        subject: `New Form Submission - ${subject || 'No Subject'}`,
        text: `Name: ${name || 'No Name'}\n\nEmail: ${email || 'No Email'}\n\nMessage: ${message || 'No Message'}`,
    };
    

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }

      if (formData.email !== null) {
        alert("Form successfully sent!");
        setTimeout(() => {
          res.redirect('https://janhunenjere.com');
        }, 50);
      } else {
        alert('Please fill out all fields.');
        return res.status(400).send('Failed to send the form, please fill out all fields.');
      }
    });
  });
});