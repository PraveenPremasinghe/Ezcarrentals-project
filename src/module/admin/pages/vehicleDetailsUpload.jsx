import React, { useState } from 'react';
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
  Stack
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import * as muiSystem from '@mui/system';
import { borderRadius } from './../../../../node_modules/@mui/system/index.d';


const VehicleForm = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [perDayPrice, setPerDayPrice] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [doors, setDoors] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedImage(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', {
      vehicleName,
      perDayPrice,
      category,
      title,
      doors,
      uploadedImage,
    });
    
  };

  return (

    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',  
      bgcolor: '#F6F6F6',
    }}
  >

    <Container>

        

        <Card 
        sx={{p:3,borderRadius:'14px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Vehicle Information Form
      </Typography>
      

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Vehicle Name"
          fullWidth
          margin="normal"
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)}
        />

        <TextField
          label="Per Day Price"
          fullWidth
          margin="normal"
          type="number"
          value={perDayPrice}
          onChange={(e) => setPerDayPrice(e.target.value)}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Doors</InputLabel>
          <Select
            value={doors}
            onChange={(e) => setDoors(e.target.value)}
          >
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="2">2</MenuItem>
            {/* Add other options as needed */}
          </Select>
        </FormControl>

        <div {...getRootProps()} style={{ margin: '16px 0', padding: '16px', border: '1px dashed #ccc' }}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image here, or click to select an image</p>
          {uploadedImage && <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" style={{ width: '100%' }} />}
        </div>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
      </Card>
    </Container>
   </Box>
  );
};

export default VehicleForm;
