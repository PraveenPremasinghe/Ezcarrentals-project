import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import { initializeApp } from "firebase/app";

function App() {

            var firebaseConfig = {
               apiKey: process.env.REACT_APP_API_KEY,
               authDomain: process.env.REACT_APP_AUTH_DOMAIN,
               projectId: process.env.REACT_APP_PROJECT_ID,
               storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
               messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
               appId: process.env.REACT_APP_APP_ID,
               measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

        
               initializeApp(firebaseConfig);
          
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
      
      </Routes>
    </>
  );
}

export default App;
