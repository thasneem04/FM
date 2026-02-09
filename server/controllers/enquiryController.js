import transporter from '../config/emailConfig.js';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const createEnquiry = async (req, res) => {
  const { name, email, phone, service, message } = req.body || {};

  // Basic Validation
  if (!name || !email || !service) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and service are required.'
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  // Professional HTML Email Template
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
        .header { border-bottom: 2px solid #d10000; padding-bottom: 20px; margin-bottom: 30px; }
        .header h2 { color: #1a1a1a; margin: 0; font-size: 24px; }
        .content { line-height: 1.6; color: #444; }
        .field { margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px; border-left: 4px solid #d10000; }
        .label { font-weight: bold; color: #1a1a1a; display: block; margin-bottom: 5px; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
        .value { font-size: 16px; color: #333; }
        .footer { margin-top: 30px; font-size: 12px; color: #999; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Website Enquiry</h2>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Full Name</span>
            <span class="value">${name}</span>
          </div>
          <div class="field">
            <span class="label">Email Address</span>
            <span class="value">${email}</span>
          </div>
          <div class="field">
            <span class="label">Phone Number</span>
            <span class="value">${phone || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="label">Service Interested In</span>
            <span class="value">${service}</span>
          </div>
          <div class="field">
            <span class="label">Message</span>
            <span class="value">${message || 'No message provided'}</span>
          </div>
        </div>
        <div class="footer">
          This email was sent from your website contact form.
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: 'New Enquiry from Website',
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({
      success: true,
      message: 'Thank you! Our team will contact you within 24 hours.'
    });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send enquiry. Please try again later.'
    });
  }
};

export const createCollaboration = async (req, res) => {
  const { fullName, email, phone, businessName, role, interest, description } = req.body || {};

  if (!fullName || !email || !interest) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and interest are required.'
    });
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
        .header { border-bottom: 2px solid #d10000; padding-bottom: 20px; margin-bottom: 30px; }
        .header h2 { color: #1a1a1a; margin: 0; font-size: 24px; }
        .content { line-height: 1.6; color: #444; }
        .field { margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px; border-left: 4px solid #d10000; }
        .label { font-weight: bold; color: #1a1a1a; display: block; margin-bottom: 5px; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
        .value { font-size: 16px; color: #333; }
        .footer { margin-top: 30px; font-size: 12px; color: #999; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Collaboration Request</h2>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Full Name</span>
            <span class="value">${fullName}</span>
          </div>
          <div class="field">
            <span class="label">Email Address</span>
            <span class="value">${email}</span>
          </div>
          <div class="field">
            <span class="label">Phone / WhatsApp</span>
            <span class="value">${phone || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="label">Business Name</span>
            <span class="value">${businessName || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="label">Role</span>
            <span class="value">${role || 'Not provided'}</span>
          </div>
          <div class="field">
            <span class="label">Collaboration Interest</span>
            <span class="value">${interest}</span>
          </div>
          <div class="field">
            <span class="label">Brief Description</span>
            <span class="value">${description || 'No description provided'}</span>
          </div>
        </div>
        <div class="footer">
          This email was sent from your website collaboration form.
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: 'New Collaboration Request',
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out! We will contact you soon.'
    });
  } catch (error) {
    console.error('Collaboration Email error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send request. Please try again later.'
    });
  }
};
