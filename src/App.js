import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import Flights from "./components/Flights/Flights";
import Trains from "./components/Trains/Trains";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/Home"} replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/trains" element={<Trains />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
