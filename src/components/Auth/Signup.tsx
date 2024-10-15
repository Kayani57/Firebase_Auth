import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Box, Container } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import FormContainer from './FormContainer';  
import { SignupSchema } from '../../utils/validationSchema';

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      alert('Signup successful! You can now login.');
      navigate('/todo');
    } catch (error) {
      alert('Signup failed. Please check your credentials and try again.');
    }
    reset();
  };

  return (
    <Container maxWidth="sm">
      <FormContainer title="Sign Up">
        <Box component="form" onSubmit={handleSubmit(onSubmit)} display="flex" flexDirection="column" gap={2}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            variant="outlined"
            type="password"
            {...register('confirmPassword')}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ '&:focus': { outline: 'none' } }}>
            Sign Up
          </Button>
        </Box>
      </FormContainer>
    </Container>
  );
};

export default Signup;
