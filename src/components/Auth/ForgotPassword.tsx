import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Box, Container } from '@mui/material';
import FormContainer from './FormContainer';  
import { ForgotPasswordSchema } from '../../utils/validationSchema';

interface IFormInput {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    alert(`A password reset link has been sent to ${data.email}`);
    reset();
  };

  return (
    <Container maxWidth="sm">
      <FormContainer title="Forgot Password">
        <Box component="form" onSubmit={handleSubmit(onSubmit)} display="flex" flexDirection="column" gap={2}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ '&:focus': { outline: 'none' } }}>
            Send Reset Link
          </Button>
        </Box>
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;
