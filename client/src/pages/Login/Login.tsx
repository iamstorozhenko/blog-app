import React, { useState } from "react";
import { loginUser } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../features/hooks/hooks";
import { useNavigate } from "react-router-dom";
import "./Login.css";

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { payload } = (await dispatch(loginUser(formData))) as {
        payload: any;
      };
      if (payload.token) {
        navigate("/");
      }
      console.log("Login successful", payload);
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div>
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login Page</h2>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label >Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className='login-btn'>Login</button>
          <div className="create-account">
            <p>Don't have an account?</p>
            <a href="/register">Create one</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
