import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
