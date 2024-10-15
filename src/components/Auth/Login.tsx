import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Box, Container } from '@mui/material';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebaseConfig'; 
import { useNavigate } from 'react-router-dom'; 
import FormContainer from './FormContainer';
import { LoginSchema } from '../../utils/validationSchema';

interface IFormInput {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate(); 

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/todo');
    } catch (error) {
      alert('Invalid email or password. Please try again.');
    }
    reset();
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/todo');
    } catch (error) {
      alert('Google Sign-In failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <FormContainer title="Login">
        <Box component="form" onSubmit={handleSubmit(onSubmit)} display="flex" flexDirection="column" gap={2}>
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
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            fullWidth 
            onClick={handleGoogleSignIn}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              border: '1px solid #4285F4',
              color: '#4285F4',
              '&:hover': {
                backgroundColor: '#E8F0FE',
                borderColor: '#4285F4',
                color: '#4285F4',
              },
            }}
          >
            <img 
              src="https://img.icons8.com/color/24/000000/google-logo.png" 
              alt="Google Icon" 
              style={{ marginRight: '8px' }} 
            />
            Sign In with Google
          </Button>
        </Box>
      </FormContainer>
    </Container>
  );
};

export default Login;
