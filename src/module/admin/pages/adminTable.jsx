import React,{useEffect,useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton ,Container} from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
 
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
    deleteObject,
} from 'firebase/storage';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
   deleteDoc,
   doc
} from 'firebase/firestore';
import {useNavigate } from 'react-router-dom'

const AdminTable = ({ data, onEdit }) => {
     const navigate = useNavigate();
    const auth = getAuth();
  const storage = getStorage();
  const firestore = getFirestore();
  
  const [vehicleDetailsData,setVehicleDetailsData]  = useState([])

   useEffect(() => {
            onAuthStateChanged(auth, (user) => {
            
              if (user===null) {
                // const uid = user.uid;
                navigate("/admin-login")
   
              }
          });
    fetchVehicleDetails();
  }, [firestore]);

      const fetchVehicleDetails = async () => {
      const vehiclesCollection = collection(firestore, 'vehicles');
      const vehiclesSnapshot = await getDocs(vehiclesCollection);
      const vehiclesData = vehiclesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVehicleDetailsData(vehiclesData);
    };

    const onDelete = async (id, imageUrl) => {
    try {

      await deleteDoc(doc(firestore, 'vehicles', id));

      const imageRef = storageRef(storage, imageUrl);
      await deleteObject(imageRef);

      fetchVehicleDetails();
    } catch (error) {
      console.error('Error deleting image: ', error);
    }
  };

 
 

  return (

    <Container  mt={5}>
    <TableContainer component={Paper}
    >
      <Table
     >
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
                
                <img src={item.imageUrl} alt="Vehicle" style={{ width: '50px', height: 'auto' }} />
              </TableCell>
              <TableCell>
              
                <IconButton onClick={() => onEdit(item)} aria-label="edit">
             
                <AiFillEdit />
      </IconButton>

      <IconButton onClick={() => onDelete(item.id,item.imageUrl)} aria-label="delete"
      sx={{color:'red'}}>
      <MdDeleteForever />
      </IconButton>


              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
};

export default AdminTable;
