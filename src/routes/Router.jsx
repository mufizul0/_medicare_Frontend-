import { Routes, Route } from "react-router-dom";
import DoctorsDetalis from "../pages/Doctors/DoctorsDetalis";
import Home from "./../pages/Home";
import Doctors from "../pages/Doctors/Doctors";
import Login from "./../pages/Login";
import Sinup from "./../pages/Sinup";
import Contact from "./../pages/Contact";
import Services from "./../pages/Services";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors/:id" element={<DoctorsDetalis />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sinup" element={<Sinup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Router;
