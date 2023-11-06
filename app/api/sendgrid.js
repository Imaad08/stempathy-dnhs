import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>The HTML5 Herald</title>
    </head>
    <body>
      <div class="img-container" style="display: flex; justify-content: center; align-items: center; border-radius: 5px; overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
      <div class="container" style="margin-left: 20px; margin-right: 20px;">
        <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email}</h3>
        <div style="font-size: 16px;">
          <p>Message:</p>
          <p>${req.body.message}</p>
          <br>
        </div>
        <img src="https://manuarora.in/logo.png" class="logo-image" style="height: 50px; width: 50px; border-radius: 5px; overflow: hidden;">
        <p class="footer" style="font-size: 16px; padding-bottom: 20px; border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
        <div class="footer-links" style="display: flex; justify-content: center; align-items: center;">
          <a href="https://stempathy-website.vercel.app" style="text-decoration: none; margin: 8px; color: #9CA3AF;">Website</a>
        </div>
      </div>
    </body>
    </html>
    `;

    await sendgrid.send({
      to: "imaadm2008@gmail.com@gmail.com",
      from: "imaadm2008@gmail.com@gmail.com",
      subject: `[Lead from website] : ${req.body.subject}`,
      html: html,
    });

  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;