import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Courses } from "./pages/Courses";
import { ContactUs } from "./pages/ContactUs";
import { ProgramPage } from "./pages/ProgramPage";
import { ThankYou } from "./pages/ThankYou";
import { AboveNavbar } from "./components/AboveNavbar/AboveNavbar";
import { Challenges } from "./pages/Challenges";
import { Programs } from "./pages/Programs";
import { AboutUs } from "./pages/AboutUs";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TawkTo } from "./components/Tawk.to/Tawk";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* <AboveNavbar /> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/pre-licensing" element={<ProgramPage title="Pre Licensing" type="Program" />} />
          <Route path="/program-01" element={<ProgramPage title="Real Estate 01" type="Program" />} />
          <Route path="/program-02" element={<ProgramPage title="Real Estate 02" type="Program" />} />
          <Route path="/program-03" element={<ProgramPage title="Home Inspection 01" type="Program" />} />
          <Route path="/program-04" element={<ProgramPage title="Home Inspection 02" type="Program" />} />
          <Route path="/course-legislative" element={<ProgramPage title="DL/MD Legislative" type="Course" />} />
          <Route path="/course-ethics" element={<ProgramPage title="DL/MD Ethics" type="Course" />} />
          <Route path="/course-brokerage" element={<ProgramPage title="DL/MD Brokerage" type="Course" />} />
          <Route path="/course-fair-housing" element={<ProgramPage title="DL/MD Fair Housing" type="Course" />} />
          <Route path="/course-supervision" element={<ProgramPage title="DL/MD Supervision" type="Course" />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>

        <Newsletter />
        <Footer />
        <TawkTo />
      </BrowserRouter>
    </>
  );
}

export default App;
