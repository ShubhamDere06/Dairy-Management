import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box, Typography, Container, CssBaseline, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './App.css';

const LoginForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log('Username:', values.username);
      console.log('Password:', values.password);
      resetForm();
    },
  });

  const handleRegistration = () => {
    navigate('/register');
  };

  return (
    <>
      <CssBaseline />
      <div className="background-container">
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" className="fw-bold text-danger">
              Welcome To ShivaSankruti Group
            </Typography>
            <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'info.main',
                p: 4,
                borderRadius:3,
                boxShadow: 5,
              }}
            >
              <Typography component="h2" variant="h6" className="fw-bold">
                Milk Collection Center
              </Typography>
              <form onSubmit={formik.handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      autoComplete="username"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleRegistration}
                >
                  Registration
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
        <Typography component="p" variant="body2" align="center" className="fw-bold fs-6 text-danger" sx={{ mt: 5 }}>
        Provide The Quality Milk
      </Typography>
      </div>
      
    </>
  );
};

export default LoginForm;
