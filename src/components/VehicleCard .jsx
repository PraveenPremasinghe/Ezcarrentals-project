import React, { useState } from "react";

 
import { PiGearFineBold ,PiCurrencyDollarBold  } from "react-icons/pi";
import { GiCarDoor } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


 

 



const VehicleCard = ({
  imageUrl,
  vehicleName,
  category,
  doors,
  perDayPrice,
  transmission,
  seats,
}) => {
  return (
      <>
      <div className="vehicleCard">
       <img className="vehicleCard-img" src={imageUrl} alt="" />

       <div className="vehicleCard-price">
       <p className="card__title">{vehicleName}</p>
       <Typography className="per-day-price">
          {" "}
          <span>$100{perDayPrice}</span> / day
        </Typography>
       
       </div>
       
       
       

  {/* <div className="card__content">
    <p className="card__title">{vehicleName}</p>
    <div className="card__description">
    <table className="card-table" >
  <tr>
    <td> <p> <PiGearFineBold />  &nbsp; {category}</p></td>
    <td> <p> <GiCarDoor />  &nbsp; {doors} </p></td>
    <td><p><FaPeopleGroup />  &nbsp;{seats} </p></td>
  </tr>
</table>
    </div>
   <hr />
   <div className="card-bottom">
   <Typography className="per-day-price">
          {" "}
          <span>${perDayPrice}</span> / day
        </Typography>
   </div>
  </div> */}

</div>
    </>
  );
};

export default VehicleCard;
