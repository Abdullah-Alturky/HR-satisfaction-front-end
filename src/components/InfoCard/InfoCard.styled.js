import { styled } from '@mui/material';

export const StyledCard = styled('div')({
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '0.5rem',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem'
});
