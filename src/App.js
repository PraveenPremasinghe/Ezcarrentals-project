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

// var firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDe7-cEpO0aL_GpCJeFZCafz5e4o3EHZiY",
  authDomain: "ezcarrental-prod.firebaseapp.com",
  projectId: "ezcarrental-prod",
  storageBucket: "ezcarrental-prod.appspot.com",
  messagingSenderId: "1080956829194",
  appId: "1:1080956829194:web:797d0cac6d8d7c51fe69f3",
  measurementId: "G-W99BGF6M2N"
};


function App() {
  console.log(process.env.REACT_APP_API_KEY)
          
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />

        {/* add admin Routes */}

        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="upload-details" element={<UploadDetails />} />
        <Route path="admin-table" element={<AdminTable />} />

      
      </Routes>
    </>
  );
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default App;
