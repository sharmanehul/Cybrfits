/*const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;*/

const { google } = require("googleapis");
const nodemailer = require("nodemailer");

/*POPULATE BELOW FIELDS WITH YOUR CREDENTIALS*/

const CLIENT_ID = "1056037640043-84qae2rf1gdnm9t1fccootqqi817fev6.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REFRESH_TOKEN = "1//04pAh1cM60X-DCgYIARAAGAQSNwF-L9IrSQH3_JUkUhAp3oSV_o9nPVtxQOgSyHWtKEmiQkjEEHDgHGFi9Ayt-AZLRYEOhqGykYs";
const REDIRECT_URI = "https://developers.google.com/oauthplayground"; // DON'T EDIT THIS
const MY_EMAIL = "sharmanehul699@gmail.com";

/*POPULATE ABOVE FIELDS WITH YOUR CREDENTIALS*/

// Create an OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Set OAuth2 credentials
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Function to send email
const sendEmail = async ({ email, subject, message }) => { // Modify to accept an object with email, subject, and message
  // Obtain access token
  const ACCESS_TOKEN = await oAuth2Client.getAccessToken();

  // Create Nodemailer transporter
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: MY_EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  // Email options
  const from = MY_EMAIL;

  // Send email
  return new Promise((resolve, reject) => {
    transport.sendMail({ from, to: email, subject, text: message }, (err, info) => { // Use email, subject, and text (plain text email) parameters
      if (err) reject(err);
      resolve(info);
    });
  });
};

module.exports =  sendEmail ;

