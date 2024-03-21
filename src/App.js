import "../src/dist/styles.css";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
 
import TestimonialsPage from "./Pages/TestimonialsPage";
import { initializeApp } from "firebase/app";
import AdminLogin from './module/admin/pages/login';
import UploadDetails from './module/admin/pages/vehicleDetailsUpload';
import { getAuth } from "firebase/auth";
import AdminTable from "./module/admin/pages/adminTable";
import NotFound from "../src/Pages/NotFoundPage";

 

var firebaseConfig = {
  apiKey: "AIzaSyDe7-cEpO0aL_GpCJeFZCafz5e4o3EHZiY",
  authDomain: "ezcarrental-prod.firebaseapp.com",
  databaseURL: "https://ezcarrental-prod-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ezcarrental-prod",
  storageBucket: "ezcarrental-prod.appspot.com",
  messagingSenderId: "1080956829194",
  appId: "1:1080956829194:web:797d0cac6d8d7c51fe69f3",
  measurementId: "G-W99BGF6M2N"
};


 


function App() {
 
          
  return (
    <>
  
      <Routes>
        <Route index path="/" element={<Home />} />
      
       
        <Route path="testimonials" element={<TestimonialsPage />} />

        {/* add admin Routes */}

        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="upload-details" element={<UploadDetails />} />
        <Route path="admin-table" element={<AdminTable />} />
        <Route path="*" element={<NotFound />} />
      
      </Routes>
    </>
  );
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default App;
