const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send
*/
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rebeldevelop@gmail.com',
    pass: 'embudopeloti1'
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const dest = req.query.dest;

    const mailOptions = {
      from: 'RebelDevelop<rebeldevelop@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
      to: dest,
      subject: 'Rebel Develop te envía tol imeil', // email subject
      html: `<p style="font-size: 16px;"></p>
            ` // email content in HTML
    };

      // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send('Sended');
    });
  });
});
