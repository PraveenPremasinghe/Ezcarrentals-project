import React from "react";

import Typography from "@mui/material/Typography";

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
      <div className='vehicleCard'>
        <img className='vehicleCard-img' src={imageUrl} alt='' />
        <div className='vehicleCard-price'>
          <p className='card__title'>{vehicleName}</p>
          <Typography className='per-day-price'>
           <span>FROM</span> <span>${perDayPrice}</span> / WEEK
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
