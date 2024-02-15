// src/components/LoginForm.js
import React, { useState,useEffect  } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import Logo from "../../../images/logo/Ezcarrentals-logo.png";
import {  getAuth,signInWithEmailAndPassword ,onAuthStateChanged  } from 'firebase/auth';
import Box from "@mui/material/Box";
import {useNavigate } from 'react-router-dom'

const LoginForm = () => {
   const navigate = useNavigate();
   const auth = getAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
 e.preventDefault();
        signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
             const user = userCredential.user;
            if(user){
            navigate("/admin-table")
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
        });
  };


      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              navigate("/upload-details")
          
            }
          });
         
    }, [])

  return (
    <Box sx={{ bgcolor: "#333333" }}>
      <Container component="main" maxWidth="md">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Card sx={{ position: "relative", maxWidth: 400, margin: "auto" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: 2,
                }}
              >
                <img src={Logo} alt="logo-img" />
              </Box>

              <Typography variant="h6">Login</Typography>
              <form>
                <TextField
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  InputProps={{
                    style: { fontSize: "16px" },
                  }}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    style: { fontSize: "16px" },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleLogin}
                  sx={{
                    fontSize: "16px",
                    bgcolor: "#333333",
                    mt: 3,
                    mb: 3,
                    p: 1,
                  }}
                >
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Box>
  );
};

export default LoginForm;
