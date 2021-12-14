const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();

async function sendMail(mail, from, subject, html) {
  const myOAuth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  myOAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  try {
    const myAccessToken = await myOAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "axelvigroux@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: myAccessToken,
      },
    });

    let mailOptions = {
      from: from, // sender address
      to: mail, // list of receivers
      subject: subject, // Subject line
      html: html, // html body
    };

    const result = await transport.sendMail(mailOptions);
    console.log("RESULT MAILER", result);
    return result;
  } catch (error) {
    console.log("ERROR MAILER", error);
    return error;
  }
}

module.exports = sendMail;
