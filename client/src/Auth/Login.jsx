import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Api/api";
import "../styles/user.css";
import { toast } from "react-toastify";
import { useAuth } from "../Context/auth";
import { FaGoogle } from "react-icons/fa";
import { auth, provider } from "../GoogleAuth/config";
import { signInWithPopup } from "firebase/auth";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
      .then((user) => {
        console.log(user, "user");
      })
      .catch((e) => {
        console.log("error in google sign in", e);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const { email, password } = formData;
      if (email === "admin@gmail.com" && password === "admin123") {
        setSuccess("Admin login successful!");
        toast.success("Admin login successful!");
        login("admin-token", true);
        navigate("/admin");
      } else {
        const response = await loginUser(formData);
        if (response.status === 200) {
          setSuccess("Login successful!");
          toast.success("Login successful!");
          login(response.data.token);
          setFormData({
            email: "",
            password: "",
          });
          navigate("/");
        } else {
          throw new Error("Unexpected response code");
        }
      }
    } catch (error) {
      setError("Login failed. Please try again.");
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="form-Container">
      <div className="form-inner-container">
        <h2 className="form-title">Login</h2>
        {error && <div className="alert error">{error}</div>}
        {success && <div className="alert success">{success}</div>}
        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>

          <p className="pd-top">OR</p>
          <button onClick={signInWithGoogle} className="submit-button pd-top">
            Login with google {<FaGoogle />}
          </button>
        </form>
        <div className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
