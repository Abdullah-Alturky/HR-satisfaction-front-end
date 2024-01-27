import { Heading } from '../ui/Heading';

import { Container } from '../ui/Container';
import { Typography } from '@mui/material';
const BasePage = ({ children, title, subtitle = '' }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      {/* {subtitle && <Typography variant="body2">{subtitle}</Typography>} */}
      {children}
    </Container>
  );
};

export default BasePage;
