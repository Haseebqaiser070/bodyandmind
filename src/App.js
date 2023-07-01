import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import AllUsers from "./components/AllUsers";
import Forums from "./components/Forums";
import LogIn from "./components/LogIn";
import Uform from "./components/Uform";
import User1 from "./components/User1";
import Courses from "./components/Courses";
import Cform from "./components/Cform";
import Audio from "./components/Audio";
import Aform from "./components/Aform";
import Begandend from "./components/Begandend";
import Audiopkg from "./components/Audiopkg";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/Dashboard" element={<Navigation />}>
          <Route path="/Dashboard/AllUsers" element={<AllUsers />} />
          <Route path="/Dashboard/User1" element={<User1 />} />
          <Route path="/Dashboard/Forums" element={<Forums />} />
          <Route path="/Dashboard/Courses" element={<Courses />} />
          <Route path="/Dashboard/Audio" element={<Audio />} />
          <Route path="/Dashboard/Begandend" element={<Begandend />} />
          <Route path="/Dashboard/Aform" element={<Aform />} />
          <Route path="/Dashboard/Audiopkg" element={<Audiopkg />} />
          <Route path="/Dashboard/Cform" element={<Cform />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
