import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: "imaadm2008@gmail.com",
        pass: "kYTb0Pd397Vm6WxL",
    },
});

export default async function handler(req, res) {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'imaadmuzaffer@gmail.com',
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send email.' });
    }
}
