import nodemailer from "nodemailer";

export const workTransporter = nodemailer.createTransport({
  host: "smtp.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_WORK,
    pass: process.env.EMAIL_WORK_PASSWORD,
  },
  debug: true,
});

export const mailOptions = {
  fromWork: "Digital Brew <" + process.env.EMAIL_WORK + ">",
  toWork: process.env.EMAIL_WORK,
};

// interface for the contact form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

//function to send contact form emails
export async function sendContactFormEmail(formData: ContactFormData) {
  try {
    const emailContent = {
      from: mailOptions.fromWork,
      to: mailOptions.toWork,
      subject: `Contact Form Inquiry - ${formData.name}`,
      html: `
        <h2>New Inquiry from ${formData.name}</h2>
        <p><strong>From:</strong>(${formData.email})</p>
        <h3>Message:</h3>
        <p>${formData.message}</p>
      `,
    };

    const info = await workTransporter.sendMail(emailContent);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending contact form email:", error);
    throw error;
  }
}
