import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import Flights from "./components/Flights/Flights";
import Trains from "./components/Trains/Trains";
import Hotels from "./components/Hotels/Hotels";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/trains" element={<Trains />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="*" element={<Navigate to="home" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
