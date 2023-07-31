// send email module

const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    console.log("****************** sendEmail");
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
    console.log("result", result);
    return result;
  } catch (error) {
    //! INVALID LOGIN !!
    console.log("error", error);
    return error;
  }
};

module.exports = sendEmail;
