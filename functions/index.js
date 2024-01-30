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

    if (!email || email.trim() === '') {
        alert('Email is required.')
        return res.status(400).send('Email is required.');
      }

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

      if (formData.email !== null) {
        // Handle success on the client-side
        alert("Form successfully sent!");
        setTimeout(() => {
          // Redirect on the client-side
          res.redirect('https://janhunenjere.com');
        }, 50);
      } else {
        // Handle failure on the client-side
        alert('Please fill out all fields.');
        return res.status(400).send('Failed to send the form, please fill out all fields.');
      }
    //   if (res.ok && formData.email !== null) {
    //     res.status(200).send('Form successfully sent.');
    //   alert("Form successfully sent!");
    //   setTimeout(() => {
    //     res.redirect('https://janhunenjere.com');
    //   }, 50);
    //   } else {
    //     alert('Please fill out all fields.')
    //     return res.status(400).send('Failed to send the form, please fill out all fields.');
    //   }
      
    //   res.status(200).send('Form successfully sent.');
    //   setTimeout(() => {
    //     res.redirect('https://janhunenjere.com');
    //   }, 50);
    });
  });
});