const nodemailer = require("nodemailer")
const email = {}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.YOUR_EMAIL,
        pass: process.env.YOUR_EMAIL_PASS
    }
});

email.tokenMail = (token, email) => {
    const mailOptions = {
        from: process.env.YOUR_EMAIL,
        to: `${email}`,
        subject: 'Sending Email using Nodejs',
        text: `Your token verification : ${token} Please input it on domain.com/verif to complete your registration`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
          } else {
            console.log('Email sent: ' + info.response);
          }

        // if (err) throw err;
        // console.log('Email sent: ' + info.response);
    });
}

module.exports = email