import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";

import { FaGears } from "react-icons/fa6";
import { GiCarDoor } from "react-icons/gi";
import { LuArmchair } from "react-icons/lu";

const CustomCard = styled(Card)({
  position: "relative",
  width: "100%",
  height: 160,
  bottom: 0,
  border: 0,
  backgroundColor: "transparent",
  overflow: "hidden",
  transition: "height 0.3s",
  cursor: "pointer",
  boxShadow: "none",
  "&:hover": {
    height: "500px",
    "& $CustomCardMedia": {
      transform: "scale(0.5)",
    },
  },
});

const CustomCardMedia = styled(CardMedia)({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  zIndex: 1,
  transition: "transform 0.3s",
  top: 0,
});

const ExpandedCard = styled("div")({
  position: "absolute",
  bottom: "0",
  width: "100%",
  height: "250px",
  backgroundColor: "#F6F6F6",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  borderRadius: "20px 20px 0px 0px",
  padding: "10px",
  opacity: 0,
  transition: "bottom 0.3s, opacity 0.3s",
  zIndex: -1,
  gap: 3,
  border: "2px solid #FDC323",
});

const VehicleCard = ({
  imageUrl,
  vehicleName,
  category,
  doors,
  perDayPrice,
  transmission,
  seats,
}) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <CustomCard
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CustomCardMedia
        component="img"
        alt={vehicleName}
        height="140"
        image={imageUrl}
        className={isHovered ? "hidden-car" : ""}
      />

      <ExpandedCard
        style={{
          bottom: isHovered ? "0" : "-250px",
          opacity: isHovered ? 1 : 0,
        }}
      >
        <Typography variant="h6">{vehicleName} </Typography>
        <Typography variant="body2" sx={{ color: "#9A9A9A", fontSize: "14px" }}>
          <FaGears />
          &nbsp; {transmission}{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "#9A9A9A",
          }}
        >
          <Typography variant="body2">
            <GiCarDoor />
            &nbsp; {doors}{" "}
          </Typography>
          <Typography variant="body2">
            <LuArmchair />
            &nbsp; {seats}{" "}
          </Typography>
        </Box>

        <Typography className="per-day-price">
          {" "}
          <span>$ {perDayPrice}</span> / day
        </Typography>

        <Button
          sx={{ width: "100%", bgcolor: "#FDC323", color: "#000", mt: 2 }}
        >
          Book Now
        </Button>
      </ExpandedCard>
    </CustomCard>
  );
};

export default VehicleCard;
