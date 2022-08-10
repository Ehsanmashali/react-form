import "./App.css";
import SignUp from "./components/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Navigate to="/signUp" />} />
        
        {/* V5 */}
        {/* <Redirect from="/" to="/signUp" /> */}
      </Routes>
    </div>
  );
}

export default App;
