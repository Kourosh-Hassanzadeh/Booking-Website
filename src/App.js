import "./App.css";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/Home"} replace/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </>
  );
}

export default App;
