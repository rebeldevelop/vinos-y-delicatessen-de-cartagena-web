const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const cors = require('cors')({origin: true})
admin.initializeApp()

/**
* Here we're using Gmail to send
*/
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rebeldevelop@gmail.com',
    pass: 'embudopeloti1'
  }
})

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const from = req.query.from
    const dest = req.query.dest
    const body = req.query.html
    const mailOptions = {
      from: from,
      to: dest,
      subject: 'Nuevo mail desde la web',
      html: body
    }
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString())
      }
      console.log(req)
      return res.redirect('https://vinosydelicatessencartagena.com/mensajeenviado')
    })
  })
})
