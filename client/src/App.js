import "./App.css";
import LoginPage from "./Components/Login-SignUp/LoginPage";
import SignUpPage from "./Components/Login-SignUp/SignUpPage";
import HomePage from "./Components/HomePage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
