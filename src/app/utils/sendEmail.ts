import Nodemailer from "nodemailer";

interface SendEmailProps {
  replyTo: string;
  html: string;
}

const SendEmail = async ({ html, replyTo }: SendEmailProps) => {
  const transporter = Nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    // port: 587,
    secure: false,
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // This is to prevent email failure
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Message from anuoluwapomichaelayeni.com",
    html,
    replyTo,
  };

  try {
    const data = await transporter.sendMail(mailOptions);
    return data;
  } catch (err) {
    return err;
  }
};

export default SendEmail;
