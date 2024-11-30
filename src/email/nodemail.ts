import nodemailer from "nodemailer";

//personal email
export const personalTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_PERSONAL,
    pass: process.env.EMAIL_PERSONAL_PASSWORD,
  },
});

//work email
export const workTransporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_WORK,
    pass: process.env.EMAIL_WORK_PASSWORD,
  },
});

//there shouldn't be anything from the personal email
//only work email should be sending emails
export const mailOptions = {
  toPersonal: process.env.EMAIL_PERSONAL,
  fromWork: process.env.EMAIL_WORK,
  toWork: process.env.EMAIL_WORK,
};
