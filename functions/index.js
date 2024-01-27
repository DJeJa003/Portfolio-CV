const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

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
        user: 'jetcher77@gmail.com',
        pass: 'irmzfsddseqopphh',
      },
    });

    const mailOptions = {
        from: 'jetcher77@gmail.com',
        to: 'jere-janhunen@hotmail.com',
        subject: `New Form Submission - ${subject || 'No Subject'}`,
        text: `Name: ${name || 'No Name'}\n\nEmail: ${email || 'No Email'}\n\nMessage: ${message || 'No Message'}`,
    };
    

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent successfully, returning to homepage.');
      alert("Email sent successfully!");
      setTimeout(() => {
        res.redirect('https://janhunenjere.com');
      }, 1000);
    //   res.status(200).send('Email sent successfully.', formData);
    //   alert("Email sent successfully!")
    //   setTimeout(() => {
    //     res.status(200).json({message: "Email sent successfully!", formData});
    //   }, 1500);
    });
  });
});