import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Alert,
  Container,
  Typography,
  Stack,
  TextField,
  Modal,
  Button,
  Box,
} from "@mui/material";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const AdminTable = ({ data, onEdit }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const storage = getStorage();
  const firestore = getFirestore();

  const [vehicleDetailsData, setVehicleDetailsData] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        // const uid = user.uid;
        navigate("/admin-login");
      }
    });
    fetchVehicleDetails();
  }, [firestore]);

  const fetchVehicleDetails = async () => {
    const vehiclesCollection = collection(firestore, "vehicles");
    const vehiclesSnapshot = await getDocs(vehiclesCollection);
    const vehiclesData = vehiclesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setVehicleDetailsData(vehiclesData);
  };

  const onDelete = async (id, imageUrl) => {
    try {
      setLoading(true);
      await deleteDoc(doc(firestore, "vehicles", id));

      const imageRef = storageRef(storage, imageUrl);
      await deleteObject(imageRef);

      fetchVehicleDetails();

      // Show success alert
      setAlertMessage("Vehicle deleted successfully");
      setAlertSeverity("success");
      setShowAlert(true);
    } catch (error) {
      console.error("Error deleting Vehicle: ", error);
      // Show error alert
      setAlertMessage("Error deleting Vehicle");
      setAlertSeverity("error");
      setShowAlert(true);
    } finally {
      // Hide loading spinner when deletion process is completed
      setLoading(false);
    }
  };

  const [editingItem, setEditingItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const [loading, setLoading] = useState(false);

  const [editedData, setEditedData] = useState({
    vehicleName: "",
    perDayPrice: "",
    category: "",
    title: "",
    doors: "",
    imageUrl: "",
  });

  const handleEdit = (item) => {
    setEditingItem(item);
    setEditedData(item); // Pre-fill the form fields with existing data
    setOpenModal(true);
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      // Update the document with the edited data
      await updateDoc(doc(firestore, "vehicles", editingItem.id), editedData);
      setOpenModal(false);
      // Optionally, you may want to fetch the updated data again to reflect changes in the UI
      fetchVehicleDetails();

      // Show success alert
      setAlertMessage("vehicle details updated successfully");
      setAlertSeverity("success");
      setShowAlert(true);
    } catch (error) {
      console.error("Error updating document: ", error);
      // Show error alert
      setAlertMessage("Error updating document");
      setAlertSeverity("error");
      setShowAlert(true);
    } finally {
      // Hide loading spinner when deletion process is completed
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <Container mt={5}>
      <Typography variant='h4' align='center' gutterBottom mt={5} mb={5}>
        Vehicle Details
      </Typography>

      <Box sx={{ float: "right", mb: 3 }}>
        <Link to='/upload-details'>
          <Button variant='contained'>Add new Vehicle</Button>
        </Link>
      </Box>

      <Stack
        spacing={2}
        style={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}
      >
        {showAlert && (
          <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>
            {alertMessage}
          </Alert>
        )}
      </Stack>

      {loading && (
        <Box
          position='fixed'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          zIndex={9999}
        >
          <CircularProgress />
        </Box>
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vehicle Name</TableCell>
              <TableCell>Per Day Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Doors</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicleDetailsData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.vehicleName}</TableCell>
                <TableCell>{item.perDayPrice}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.doors}</TableCell>
                <TableCell>
                  <img
                    src={item.imageUrl}
                    alt='Vehicle'
                    style={{ width: "50px", height: "auto" }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleEdit(item)}
                    aria-label='edit'
                  >
                    <AiFillEdit />
                  </IconButton>

                  <IconButton
                    onClick={() => onDelete(item.id, item.imageUrl)}
                    aria-label='delete'
                    sx={{ color: "red" }}
                  >
                    <MdDeleteForever />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div
          style={{
            position: "absolute",
            width: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <TextField
            label='Vehicle Name'
            name='vehicleName'
            value={editedData.vehicleName}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label='Per Day Price'
            name='perDayPrice'
            value={editedData.perDayPrice}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label='Category'
            name='category'
            value={editedData.category}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label='Title'
            name='title'
            value={editedData.title}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label='Doors'
            name='doors'
            value={editedData.doors}
            onChange={handleInputChange}
            fullWidth
          />
          <Button
            variant='contained'
            color='primary'
            onClick={handleSave}
            style={{ marginTop: "20px" }}
          >
            Save
          </Button>
        </div>
      </Modal>
    </Container>
  );
};

export default AdminTable;
