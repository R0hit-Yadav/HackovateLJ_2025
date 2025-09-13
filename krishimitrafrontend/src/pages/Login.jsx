import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validateName = (input) => {
        const regex = /^[A-Za-z\s]+$/;
        if (!regex.test(input)) {
            setNameError("Name should not contain special characters or digits.");
            return false;
        }
        setNameError("");
        return true;
    };

    const validatePhone = (input) => {
        const regex = /^\d{10}$/;
        if (!regex.test(input)) {
            setPhoneError("Phone number should be exactly 10 digits.");
            return false;
        }
        setPhoneError("");
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const isNameValid = validateName(name);
        const isPhoneValid = validatePhone(phone);

        if (isNameValid && isPhoneValid) {
            setIsLoading(true);
            try {
                const response = await axios.post("http://127.0.0.1:8000/agri_app/login/", {
                    name,
                    phone,
                });

                // Show success message
                const successMessage = document.createElement("div");
                successMessage.className = "success-message";
                successMessage.textContent = "Login successful!";
                document.body.appendChild(successMessage);

                setTimeout(() => {
                    successMessage.remove();
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    navigate("/home");
                }, 1500);
            } catch (error) {
                console.error("Login Error:", error);
                const errorMessage = document.createElement("div");
                errorMessage.className = "error-message-popup";
                errorMessage.textContent = "Error logging in. Please try again.";
                document.body.appendChild(errorMessage);

                setTimeout(() => {
                    errorMessage.remove();
                }, 3000);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="login-container">
            <div className="background-shapes">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>

            <div className="login-card">
                <div className="logo-container">
                    <svg viewBox="0 0 24 24" className="farm-logo">
                        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.7L19.3 12H17v8h-4v-6H11v6H7v-8H4.7L12 5.7z" />
                    </svg>
                </div>

                <h2>Farmer Login</h2>

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                validateName(e.target.value);
                            }}
                            required
                        />
                        <span className="input-icon">👤</span>
                        {nameError && <p className="error-message">⚠ {nameError}</p>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                validatePhone(e.target.value);
                            }}
                            required
                        />
                        <span className="input-icon">📱</span>
                        {phoneError && <p className="error-message">⚠ {phoneError}</p>}
                    </div>

                    <button 
                        type="submit" 
                        className={`login-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="loading-spinner"></span>
                                Loading...
                            </>
                        ) : (
                            "LOGIN"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
