const nodemailer = require('nodemailer');
const { ACCOUNT, SENDER, RECEIVERS, URLS } = require('./constants');

function alert() {
  return nodemailer
    .createTransport({
      host: 'smtp.elasticemail.com',
      port: 2525,
      auth: ACCOUNT,
    })
    .sendMail({
      from: SENDER,
      to: RECEIVERS,
      subject: "Tests failed! Check out the products' pages",
      html: URLS.map(url => `<a href="${url}">${url}</a>`).join('<br />'),
    });
}

module.exports = alert
