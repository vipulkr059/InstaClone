import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/home";
import Message from "./components/message/message";
import Explore from "./components/explore/explore";
import AddPost from "./components/addpost/addpost";
import UserProfile from "./components/userProfile/userProfile";
function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}>
          <Route path=":home" element={<Home />} />
          <Route path="message" element={<Message />} />
          <Route path="addpost" element={<AddPost />} />
          <Route path="explore" element={<Explore />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
