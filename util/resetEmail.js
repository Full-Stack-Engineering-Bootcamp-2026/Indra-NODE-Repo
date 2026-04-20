const sgMail =  require("@sendgrid/mail");

sgMail.setApiKey(process.env.SG_API)

 const resetEmail = async (email,obj) => {
  const msg = {
    to: email,
    from: 'indra.phand@mindbowser.com', // must be verified in SendGrid
    subject: obj.subject,
    html: obj.html,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = resetEmail