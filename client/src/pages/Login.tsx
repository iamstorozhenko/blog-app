import React, { useState } from "react";
import { loginUser } from "../features/auth/authSlice";
import { useAppDispatch } from "../features/hooks/hooks";
import { useNavigate } from "react-router-dom";

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
    // console.log(formData);
    // setFormData({ email: "", password: "" });
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
