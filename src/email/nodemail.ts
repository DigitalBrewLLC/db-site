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

// Add this new interface for the contact form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Add this new function to send contact form emails
export async function sendContactFormEmail(formData: ContactFormData) {
  try {
    const emailContent = {
      from: mailOptions.fromWork,
      to: mailOptions.toWork,
      subject: `New Contact Form Inquiry from ${formData.name}`,
      html: `
        <h2>New Inquiry from ${formData.name}</h2>
        <p><strong>From:</strong> ${formData.name} (${formData.email})</p>
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
