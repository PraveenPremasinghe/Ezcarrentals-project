import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref as storageRef } from "firebase/storage";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { FaArrowCircleRight } from "react-icons/fa";

function BookCar() {
  const storage = getStorage();
  const firestore = getFirestore();

  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [carName, setCarName] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  //vehicleDetails
  const [vehicleDetailsData, setVehicleDetailsData] = useState([]);

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
   
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    fetchVehicleDetails();
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  useEffect(() => {
    fetchVehicleDetails();
  }, []);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();

    const payload = {
      carType: carType,
      carName: carName,
      pickUp: pickUp,
      dropOff: dropOff,
      pickTime: pickTime,
      dropTime: dropTime,
      carImg: carImg,

      // modal infos
      firstName: name,
      lastName: lastName,
      phone: phone,
      age: age,
      email: email,
      address: address,
      city: city,
      zipcode: zipcode,
    };


    emailjs.send(process.env.REACT_APP_EMAIL_SERVIC_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, payload, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setModal(!modal);
          const doneMsg = document.querySelector(".booking-done");
          doneMsg.style.display = "flex";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    console.log(e);
    setCarType(e);
    const selectedDate = vehicleDetailsData.find(
      (data) => data.id === e.value
    );
    setCarImg(selectedDate.imageUrl);
    setCarName(selectedDate.vehicleName);
  };


  const handlePick = (e) => {
    setPickUp(e);
 
  };

  const handleDrop = (e) => {
    setDropOff(e);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  const fetchVehicleDetails = async () => {
    const vehiclesCollection = collection(firestore, "vehicles");
    const vehiclesSnapshot = await getDocs(vehiclesCollection);
    const vehiclesData = vehiclesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setVehicleDetailsData(vehiclesData);
    console.log(vehiclesData);
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

  const pickUpLocations = [
    { value: "Belgrade", label: "Belgrade" },
    { value: "Novi Sad", label: "Novi Sad" },
    { value: "Nis", label: "Nis" },
    { value: "Kragujevac", label: "Kragujevac" },
    { value: "Subotica", label: "Subotica" },
  ];

  const dropOffLocations = [
    { value: "Novi Sad", label: "Novi Sad" },
    { value: "Belgrade", label: "Belgrade" },
    { value: "Nis", label: "Nis" },
    { value: "Kragujevac", label: "Kragujevac" },
    { value: "Subotica", label: "Subotica" },
  ];


    // Get the current date in the format "YYYY-MM-DD"
    const currentDate = new Date().toISOString().split('T')[0];
  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="book-content">
          <div className="book-content__box ">
            <div className="book-content-bg">
              <h2 className="book-car-title">
                {" "}
                <span>BOOK A CAR TODAY!</span>{" "}
              </h2>

              <p className="error-message">
                <Alert severity="error">
                  <AlertTitle>
                    Please fill all fields — <strong>check it out!</strong>
                  </AlertTitle>
                </Alert>
              </p>

              <p className="booking-done">
              Thank You for Booking with us!
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                  </label>

                  {/* *****************************fdhbdfgh******************************** */}
                 

             

 


                  <Select
                    value={carType}
                    onChange={handleCar}
                    options={CarList}
                    placeholder="Select your car type"
                  />

                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up
                    Location
                  </label>

                  <Select
                    value={pickUp ? { value: pickUp, label: pickUp } : null}
                    onChange={(selectedOption) =>
                      handlePick(selectedOption ? selectedOption.value : null)
                    }
                    options={pickUpLocations}
                    placeholder="Select pick up location"
                  />

                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-off
                    Location
                  </label>

                  <Select
                    value={dropOff ? { value: dropOff, label: dropOff } : null}
                    onChange={(selectedOption) =>
                      handleDrop(selectedOption ? selectedOption.value : null)
                    }
                    options={dropOffLocations}
                    placeholder="Select drop off location"
                  />
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i>{" "}
                    &nbsp;Pick-up Date
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                    min={currentDate}
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i>{" "}
                    &nbsp;Drop-Off Date
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                    min={currentDate} 
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                  </label>
                  <div className="search-btn">
                    <button onClick={openModal} type="submit">
                      Search &nbsp; <FaArrowCircleRight />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} {" "}
                    {/* <input type="time" className="input-time"></input> */}
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropTime} {" "}
                    {/* <input type="time" className="input-time"></input> */}
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Your Selected Car</span> {carName}
            </h5>
            {carImg && <img src={carImg} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name 
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                
              </span>

              <span>
                <label>
                  Last Name
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
          
              </span>

              <span>
                <label>
                  Phone Number 
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                
              </span>

              <span>
                <label>
                  Age 
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                ></input>
                
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email 
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                
              </span>

              <span>
                <label>
                  Address 
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
              
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City 
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                
              </span>

              <span>
                <label>
                  Zip Code 
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
             
              </span>
            </div>

     

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
