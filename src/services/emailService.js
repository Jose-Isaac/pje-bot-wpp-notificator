const nodemailer = require("nodemailer")


let transporter
const emailConnect = () => {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
}

const sendEmail = (to, messages) => {
  let text = messages.join('\n')

  const emailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'PJE - Você foi mencionando em um processo',
    text: text
  }

  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.log(error)
    } else console.log('Email send: ' + info.response)
  })
}

module.exports = { sendEmail, emailConnect }