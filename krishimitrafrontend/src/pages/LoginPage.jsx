import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS
import axios from "axios"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    mobile: '',
    otp: ''
  });
  const [showOtpField, setShowOtpField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: '',
    mobile: '',
    otp: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = { username: '', mobile: '', otp: '' };

    if (!formData.username || formData.username.trim() === '') {
      newErrors.username = 'Username required not empty';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (!/^[a-zA-Z0-9_ ]+$/.test(formData.username)) {
      newErrors.username = 'Username can only contain letters, numbers, and underscores';
    }

    if (!formData.mobile || formData.mobile.trim() === '') {
      newErrors.mobile = 'Mobile number required not empty';
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }

    setErrors(newErrors);
    return !(newErrors.username || newErrors.mobile);
  };

  const validateOtp = () => {
    const newErrors = { ...errors };

    if (!formData.otp.trim()) {
      newErrors.otp = 'OTP is required';
    } else if (!/^\d{6}$/.test(formData.otp)) {
      newErrors.otp = 'Please enter a valid 6-digit OTP';
    } else {
      newErrors.otp = '';
    }

    setErrors(newErrors);
    return !newErrors.otp;
  };

  const handleGetOtp = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const mobileWithCountry = "+91" + formData.mobile;

      // Call your backend to send ordinary SMS
      const smsRes = await fetch("http://localhost:5000/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobile: mobileWithCountry,
        })
      });

      const smsData = await smsRes.json();

      if (smsData.success) {
        console.log("SMS sent successfully!");
        setShowOtpField(true); // now show OTP input
      } else {
        alert("Failed to send SMS");
      }

    } catch (err) {
      console.error(err);
      alert("Failed to send SMS");
    } finally {
      setIsLoading(false);
    }
  };


  const handleVerifyOtp = async () => {
    if (!validateOtp()) return;

    setIsLoading(true);
    try {
      const mobileWithCountry = "+91" + formData.mobile;
      const res = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: mobileWithCountry, otp: formData.otp })
      });
      const data = await res.json();

      if (data.success) {
        try {
          const dbRes = await axios.post("http://127.0.0.1:8000/api/login/", {
            name: formData.username,
            phone_no: formData.mobile
          });

          localStorage.setItem("phone_no", formData.mobile);
          
          alert("Login successful!");
          navigate("/home");

        } catch (dbErr) {
          if (dbErr.response) {
            console.error("Backend error:", dbErr.response.data);
            alert("DB error: " + JSON.stringify(dbErr.response.data));
          } else {
            console.error("Error saving to DB:", dbErr);
            alert("Login successful but failed to save user!");
          }
        }
        setFormData({ username: '', mobile: '', otp: '' });
        setErrors({ username: '', mobile: '', otp: '' });
        setShowOtpField(false);
      } else {
        alert("Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Verification failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Header */}
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        {/* Form */}
        <div className="form-section">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={errors.username ? 'input error' : 'input'}
              placeholder="Enter your username"
              disabled={showOtpField}
            />
            {errors.username && <p className="error-text">{errors.username}</p>}
          </div>

          {/* Mobile Field */}
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className={errors.mobile ? 'input error' : 'input'}
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
              disabled={showOtpField}
            />
            {errors.mobile && <p className="error-text">{errors.mobile}</p>}
          </div>

          {/* Get OTP */}
          {!showOtpField && (
            <button
              onClick={handleGetOtp}
              disabled={isLoading}
              className="btn btn-primary"
            >
              {isLoading ? 'Sending OTP...' : 'Get OTP'}
            </button>
          )}

          {/* OTP Section */}
          {showOtpField && (
            <div className="otp-section">
              <label htmlFor="otp">Enter OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleInputChange}
                className={errors.otp ? 'input error' : 'input'}
                placeholder="000000"
                maxLength="6"
              />
              {errors.otp && <p className="error-text">{errors.otp}</p>}
              <p className="otp-info">OTP sent to +91-{formData.mobile}</p>

              <div className="otp-buttons">
                <button
                  onClick={() => {
                    setShowOtpField(false);
                    setFormData(prev => ({ ...prev, otp: '' }));
                    setErrors(prev => ({ ...prev, otp: '' }));
                  }}
                  className="btn btn-secondary"
                >
                  Back
                </button>
                <button
                  onClick={handleVerifyOtp}
                  disabled={isLoading}
                  className="btn btn-success"
                >
                  {isLoading ? 'Verifying...' : 'Verify'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="login-footer">
          <p>
            Having trouble? <a href="#">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
