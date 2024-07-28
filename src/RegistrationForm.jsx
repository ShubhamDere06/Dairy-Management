import React from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  mobileNumber: Yup.string().required('Mobile number is required'),
  address: Yup.string().required('Address is required'),
  centerName: Yup.string().required('Center Name is required'),
  centerAddress: Yup.string().required('Center Address is required'),
  username: Yup.string().required('Username is required'),  
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const initialValues = {
  name: '',
  mobileNumber: '',
  address: '',
  centerName: '',
  centerAddress: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const RegistrationForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission here, e.g., send data to backend
    console.log(values);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Registration Form
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  label="Name"
                  name="name"
                  fullWidth
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  label="Mobile Number"
                  name="mobileNumber"
                  fullWidth
                  error={touched.mobileNumber && !!errors.mobileNumber}
                  helperText={touched.mobileNumber && errors.mobileNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Address"
                  name="address"
                  fullWidth
                  multiline
                  rows={3}
                  error={touched.address && !!errors.address}
                  helperText={touched.address && errors.address}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Center Name"
                  name="centerName"
                  fullWidth
                  error={touched.centerName && !!errors.centerName}
                  helperText={touched.centerName && errors.centerName}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Center Address"
                  name="centerAddress"
                  fullWidth
                  multiline
                  rows={3}
                  error={touched.centerAddress && !!errors.centerAddress}
                  helperText={touched.centerAddress && errors.centerAddress}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Username"
                  name="username"
                  fullWidth
                  error={touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  error={touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default RegistrationForm;
