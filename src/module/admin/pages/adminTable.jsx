import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';

const AdminTable = ({ data, onEdit, onDelete }) => {
  
  const VehicleDetailsData = [
    {
      id: 1,
      vehicleName: 'Demo Car 1',
      perDayPrice: '$60',
      category: 'SUV',
      title: 'Adventure Car',
      doors: 5,
      uploadedImage: 'https://example.com/demo_car1.jpg',
    },
    {
      id: 2,
      vehicleName: 'Demo Car 2',
      perDayPrice: '$45',
      category: 'Convertible',
      title: 'Luxury Convertible',
      doors: 2,
      uploadedImage: 'https://example.com/demo_car2.jpg',
    },
    
  ];

 
 

  return (
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
          {VehicleDetailsData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.vehicleName}</TableCell>
              <TableCell>{item.perDayPrice}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.doors}</TableCell>
              <TableCell>
                
                <img src={item.uploadedImage} alt="Vehicle" style={{ width: '50px', height: 'auto' }} />
              </TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(item)}>Edit</IconButton>
                <IconButton onClick={() => onDelete(item.id)}>Delete</IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
