import transporter from './config/emailConfig.js';

console.log('Testing connection with:', process.env.EMAIL_USER);

transporter.verify(function (error, success) {
  if (error) {
    console.log('Verification Error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});
