import "./App.css";
import LoginPage from "./Components/Login-SignUp/LoginPage";
import SignUpPage from "./Components/Login-SignUp/SignUpPage";
import HomePage from "./Components/HomePage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyNetwork from "./Components/MYNetwork/MyNetwork";
import MyJob from "./Components/MyJobs/MyJobs";
import Events from "./Components/Events/Events";
import Messaging from "./Components/Messaging/Messaging";
import UserProfile from "./Components/UserProfile/UserProfile";
import MyItems from "./Components/MyItems/MyItems";
import PostJob from "./Components/MyJobs/PostJob";
import AddEvent from "./Components/Events/AddEvent";
import ResumePage from "./Components/Common/ResumePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/myNetwork" element={<MyNetwork />} />
          <Route path="/jobs" element={<MyJob />} />
          <Route path="/events" element={<Events />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/myItems" element={<MyItems />} />
          <Route path="/addJob" element={<PostJob />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/myResume" element={<ResumePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
