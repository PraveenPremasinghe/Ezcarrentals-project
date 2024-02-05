import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import { initializeApp } from "firebase/app";
import AdminLogin from './module/admin/pages/login';
import UploadDetails from './module/admin/pages/vehicleDetailsUpload';
import { getAuth } from "firebase/auth";
import AdminTable from "./module/admin/pages/adminTable";
import ErrorPage from "../src/Pages/NotFoundPage";



const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};


function App() {

          
  return (
    <>
     
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />

        {/* add admin Routes */}

        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="upload-details" element={<UploadDetails />} />
        <Route path="admin-table" element={<AdminTable />} />



        <Route path="*" element={<ErrorPage />} />
      
      </Routes>
    </>
  );
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default App;
