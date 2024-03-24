import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import NotFound from "../src/Pages/NotFoundPage";
import "../src/dist/styles.css";
import Home from "./Pages/Home";
import AdminTable from "./module/admin/pages/adminTable";
import AdminLogin from "./module/admin/pages/login";
import UploadDetails from "./module/admin/pages/vehicleDetailsUpload";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

function App() {
  return (
    <>
      <Routes>
        <Route index path='/' element={<Home />} />
        {/* add admin Routes */}
        <Route path='admin-login' element={<AdminLogin />} />
        <Route path='upload-details' element={<UploadDetails />} />
        <Route path='admin-table' element={<AdminTable />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default App;
