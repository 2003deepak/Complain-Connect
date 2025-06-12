const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  }
});

const sendOTP = async (to, subject, msg) => {
  const mailOptions = {
    from: process.env.GMAIL_USER, // sender address
    to: to, 
    subject: subject, // Subject line
    html: msg // html body
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Mail not Sent")
    } else {
     console.log("Mail sent" )
    }
  });
}

module.exports = sendOTP;
