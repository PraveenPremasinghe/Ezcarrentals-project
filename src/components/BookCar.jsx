import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import TextField from "@mui/material/TextField";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Select from "react-select";

function BookCar() {
  const storage = getStorage();
  const firestore = getFirestore();

  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [carName, setCarName] = useState("");

  const [carImg, setCarImg] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // modal infos
  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  //vehicleDetails
  const [vehicleDetailsData, setVehicleDetailsData] = useState([]);
  const [formValid, setFormValid] = useState(false);

  

  useEffect(() => {
    setFormValid(validateForm());
  }, [carType, name, phone, email, message]);

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    fetchVehicleDetails();
  }, []);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();

     // Check if any field is empty
  if (!carType || !name || !phone || !email || !message) {
    setError(true); // Set error state to true
    return; // Exit the function early
  }

    const payload = {
      carType: carType.label,
      name: name,
      phone: phone,
      email: email,
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        payload,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          const doneMsg = document.querySelector(".booking-done");
          doneMsg.style.display = "flex";
        },
        (error) => {
        
        }
      );
  };

  // taking value of booking inputs
  const handleCar = (e) => {
 
    setCarType(e);
    const selectedDate = vehicleDetailsData.find((data) => data.id === e.value);
    setCarImg(selectedDate.imageUrl);
    setCarName(selectedDate.vehicleName);
  };

  const fetchVehicleDetails = async () => {
    const vehiclesCollection = collection(firestore, "vehicles");
    const vehiclesSnapshot = await getDocs(vehiclesCollection);
    const vehiclesData = vehiclesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setVehicleDetailsData(vehiclesData);
 
  };

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  const CarList = vehicleDetailsData.map((data) => ({
    value: data.id,
    label: data.vehicleName,
  }));

  const validateForm = () => {
    return carType && name && phone && email && message;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Use a regular expression to check if the phone number is in a valid format
    const regex = /^\d{10}$/; // Assuming a 10-digit phone number format
    return regex.test(phoneNumber);
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        <div className="book-content">
          <div className="book-content__box ">
            <div className="book-content-bg">
              <h2 className="book-car-title">
                {" "}
                <span>Request a Quote</span>{" "}
              </h2>

              {error && ( // Show error message if there's an error
              <p className="error-message">
                <Alert severity="error">
                  <AlertTitle>
                    Please fill all fields — <strong>check it out!</strong>
                  </AlertTitle>
                </Alert>
              </p>
            )}

              <p className="booking-done">
                Thank You for Requesting  us!
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                  </label>

                  <Select
                    value={carType}
                    onChange={handleCar}
                    options={CarList}
                    placeholder="Select your car type"
                    isSearchable={false}
                    
                  />
                </div>

                <div className="box-form__car-time">
                  <label>
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;Full
                    Name
                  </label>
                  <TextField
                    placeholder="Enter your name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    value={name}
                    onChange={handleName}
                    sx={{ m: 0 , cursor:'auto'}}
                  />
                </div>

                <div className="box-form__car-time">
                  <label>
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;Phone
                  </label>
                  <TextField
                    placeholder="Phone Number"
                    variant="outlined"
                    margin="normal"
                    value={phone}
                    onChange={handlePhone}
                    type="number"
                    fullWidth
                    required
                    error={Boolean(phone) && !validatePhoneNumber(phone)} // Add error prop based on phone number validation
                    helperText={Boolean(phone) && !validatePhoneNumber(phone) ? 'Invalid phone number' : ''} 
                    sx={{ m: 0 }}
                  />
                </div>

                <div className="box-form__car-time">
                  <label>
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;Email
                  </label>
                  <TextField
                    placeholder="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    value={email}
                    onChange={handleEmail}
                    type="email"
                    error={Boolean(email) && !validateEmail(email)}  
                    helperText={Boolean(email) && !validateEmail(email) ? 'Invalid email' : ''}
                    sx={{ m: 0 }}
                  />
                </div>

                <div className="box-form__car-time">
                  <label>
                    <i className="fa-regular fa-calendar-days "></i>{" "}
                    &nbsp;Message
                  </label>
                  <TextField
                    placeholder="Message"
                    variant="outlined"
                    margin="normal"
                    onChange={handleMessage}
                    
                    fullWidth
                    required
                    multiline // Enable multiline
  rows={3} 
                    sx={{ m: 0,backgroundColor:'#fff' ,borderRadius:'5px'}}
                  />
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                  </label>
                  <div className="search-btn">
                    <button onClick={confirmBooking} type="submit" disabled={!formValid}>
                      Request &nbsp; <FaArrowCircleRight />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookCar;
