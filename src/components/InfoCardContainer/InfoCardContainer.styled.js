import { styled } from '@mui/material';

export const StyledInfoCardContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1rem',
  padding: '1rem'
});
