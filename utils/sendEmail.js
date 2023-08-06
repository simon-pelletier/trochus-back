// send email module

const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: email,
      subject: subject,
      text: text,
    };

    const result = await transporter.sendMail(mailOptions);
    
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = sendEmail;
