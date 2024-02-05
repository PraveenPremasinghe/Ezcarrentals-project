import React, { useState ,useEffect} from 'react';
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
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {useNavigate } from 'react-router-dom'


const VehicleForm = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const storage = getStorage();
  const firestore = getFirestore();

  const [vehicleName, setVehicleName] = useState('');
  const [perDayPrice, setPerDayPrice] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [doors, setDoors] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedImage(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  
      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (!user) {
              const uid = user.uid;
              navigate("/admin-login")
 
            }
          });
         
    }, [])


    const handleSubmit = (e) => {
      console.log('upload')
       e.preventDefault();
    if (uploadedImage) {
       const StorageRef = storageRef(storage,`images/${uploadedImage.name}`);
 const uploadTask = uploadBytesResumable(StorageRef, uploadedImage);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.error(error.message);
        },
        async () => {
          const downloadURL = await getDownloadURL(StorageRef);
               try {
            await addDoc(collection(firestore, 'vehicles'), {
              timestamp: new Date(),
              vehicleName: vehicleName,
              imageUrl: downloadURL,
              perDayPrice: perDayPrice,
              category:category,
              title:title,
              doors:doors
            });

            setProgress(0);
            setVehicleName('');
            setPerDayPrice('');
            setCategory('');
            setTitle('');
            setDoors('');
            setUploadedImage(null);
          } catch (error) {
            console.error('Error adding document: ', error);
          }
        }
      );
    }
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
          sx={{ '& label': { fontSize: '0.8rem' } }} 
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
