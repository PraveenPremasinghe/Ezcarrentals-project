import React, { useState, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Container,
  Box,
  Typography,
  Card,
  Alert,
  Stack,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CircularProgress } from '@mui/material';

const VehicleForm = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const storage = getStorage();
  const firestore = getFirestore();

  const [vehicleName, setVehicleName] = useState("");
  const [perDayPrice, setPerDayPrice] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [doors, setDoors] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('info');
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedImage(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
   

      if (user === null) {
        // const uid = user.uid;
        navigate("/admin-login");
      }
    });
  }, []);

  const handleSubmit = (e) => {
   
    e.preventDefault();
    if (uploadedImage) {
      const StorageRef = storageRef(storage, `images/${uploadedImage.name}`);
      const uploadTask = uploadBytesResumable(StorageRef, uploadedImage);

      // Set loading to true when upload starts
    setLoading(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.error(error.message);
          setLoading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(StorageRef);
          try {
            await addDoc(collection(firestore, "vehicles"), {
              timestamp: new Date(),
              vehicleName: vehicleName,
              imageUrl: downloadURL,
              perDayPrice: perDayPrice,
              category: category,
              title: title,
              doors: doors,
            });

            setProgress(0);
            setVehicleName("");
            setPerDayPrice("");
            setCategory("");
            setTitle("");
            setDoors("");
            setUploadedImage(null);
            // Show success alert
          setAlertMessage("Vehicle added successfully");
          setAlertSeverity("success");
          setShowAlert(true);
          } catch (error) {
            
            console.error("Error adding document: ", error);
          // Show error alert
          setAlertMessage("Error adding document");
          setAlertSeverity("error");
          setShowAlert(true);
          
        } finally {
          // Hide loading indicator when upload is completed
          setLoading(false);
        }
        }
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#F6F6F6",
      }}
    >
      <Container>
        <Card sx={{ p: 3, borderRadius: "14px" }}>
          <Box sx={{ float: "right", mb: 3 }}>
            <Link to="/admin-table">
              <Button variant="contained">Vehicle Details Table</Button>
            </Link>
          </Box>


          <Stack spacing={2} style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
  {showAlert && (
    <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>
      {alertMessage}
    </Alert>
  )}
</Stack>

          <Typography variant="h5" align="center" gutterBottom>
            Vehicle Information Form
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Vehicle Name"
              fullWidth
              margin="normal"
              value={vehicleName}
              onChange={(e) => setVehicleName(e.target.value)}
              sx={{ "& label": { fontSize: "0.8rem" } }}
            />

            <TextField
              label="Per Day Price"
              fullWidth
              margin="normal"
              type="number"
              value={perDayPrice}
              onChange={(e) => setPerDayPrice(e.target.value)}
              sx={{ "& label": { fontSize: "0.8rem" } }}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel sx={{ fontSize: "0.8rem" }}>Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ "& label": { fontSize: "0.8rem" } }}
              >
                <MenuItem value="ECONOMY">Economy</MenuItem>
                <MenuItem value="COMFORT">Comfort</MenuItem>
                <MenuItem value="PREMIUM">Premium</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Title (Vehicle Inner Details)"
              fullWidth
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ "& label": { fontSize: "0.8rem" } }}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel sx={{ fontSize: "0.8rem" }}>Doors</InputLabel>
              <Select
                value={doors}
                onChange={(e) => setDoors(e.target.value)}
                label="Doors"
              >
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
              </Select>
            </FormControl>

            <div
              {...getRootProps()}
              style={{
                margin: "16px 0",
                padding: "16px",
                border: "1px dashed #ccc",
                fontSize: "0.8rem",
              }}
            >
              <input {...getInputProps()} />
              <p>Drag 'n' drop an image here, or click to select an image</p>
              {uploadedImage && (
                <img
                  src={URL.createObjectURL(uploadedImage)}
                  alt="Uploaded"
                  style={{ width: "100%" }}
                />
              )}
            </div>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>

          {loading && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={9999}
        >
          <CircularProgress />
        </Box>
      )}
        </Card>
      </Container>
    </Box>
  );
};

export default VehicleForm;
