import nodemailer from 'nodemailer';

const getEmailConfig = () => ({
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

let transporter;

export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
const initializeTransporter = () => {
  try {
    // Get config when actually needed
    const emailConfig = getEmailConfig();
    
    console.log('=== EMAIL DEBUG ===');
    console.log('EMAIL_USER:', emailConfig.auth.user);
    console.log('EMAIL_PASSWORD:', emailConfig.auth.pass ? 'SET' : 'UNDEFINED');
    console.log('EMAIL_SERVICE:', emailConfig.service);
    console.log('===================');
    
    transporter = nodemailer.createTransport(emailConfig);
    console.log('Email service initialized successfully');
  } catch (error) {
    console.error('Email service initialization failed:', error);
    throw error;
  }
};
export const sendOTPEmail = async (email, otp) => {
  try {
    if (!transporter) initializeTransporter();
    console.log("email: ", email);
    console.log("otp: ", otp);
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Your Productr Login OTP',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Welcome to Productr!</h2>
          <p>Your One-Time Password (OTP) for login is:</p>
          <h1 style="color: #4050FF; letter-spacing: 5px;">${otp}</h1>
          <p>This OTP will expire in 10 minutes.</p>
          <p>If you didn't request this, please ignore this email.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
};