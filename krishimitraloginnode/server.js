const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(express.json());

// Twilio credentials
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER;
const client = new twilio(accountSid, authToken);

let otpStore = {};

// Send ordinary SMS
app.post("/send-sms", async (req, res) => {
  try {
    const { mobile, message } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStore[mobile] = otp;

    const sms = await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: fromNumber,
      to: mobile
    });

    console.log("SMS sent:", sms.sid);
    res.status(200).json({ success: true, sid: sms.sid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post("/verify-otp", (req, res) => {
  const { mobile, otp } = req.body;
  if (!mobile || !otp) return res.status(400).json({ success: false, message: "Mobile and OTP required" });

  if (otpStore[mobile] && otpStore[mobile] == otp) {
    delete otpStore[mobile]; // clear OTP once verified
    return res.json({ success: true, message: "OTP verified successfully" });
  }

  return res.status(400).json({ success: false, message: "Invalid OTP" });
});


app.listen(5000, () => console.log("Server running on port 5000"));