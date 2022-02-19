const nodemailer = require("nodemailer")

/**mailtrap used for testing */
const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 465,
    secure: false,
    auth: {
        user:"e6060712172606",
        pass:"54b709d5d9d35c"
    }
})
var message = {
  from: "noreply@veekshith.com",
  to: "veekshithgandhi10@gmail.com",
  subject: "Message title",
  text: "Plaintext version of the message",
};


const sendEmail = (req, res) => {
    transporter.sendMail(message, err => {
        if (err) return res.status(400).json({ status: "failure" })
        return res.status(400).json({ status: "sucess" })
    })
}

module.exports = sendEmail