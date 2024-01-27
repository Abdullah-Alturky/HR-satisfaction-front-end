import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import {
  DrawerHeader,
  StyledList,
  UserBox,
  Title,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText
} from './Drawer.styled';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const manage = [
  { icon: <PieChartOutlineIcon />, text: 'Overview', link: '' },
  { icon: <AddCircleOutlineIcon />, text: 'Add user', link: 'add-user' },
  {
    icon: <PeopleAltIcon />,
    text: 'Existing Users',
    link: 'existing-users'
  }
];
const MyDrawer = ({ drawerWidth, open }) => {
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <UserBox>
          <Diversity3Icon />
          <Typography
            variant="h6"
            component="div"
          >
            HR System
          </Typography>
        </UserBox>
      </DrawerHeader>
      <StyledList>
        <Title
          component="div"
          color="common.black"
        >
          Manage
        </Title>
        {manage.map(({ icon, text, link }) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => navigate(link)}
          >
            <StyledListItemButton>
              <StyledListItemIcon>{icon}</StyledListItemIcon>
              <StyledListItemText primary={text} />
            </StyledListItemButton>
          </ListItem>
        ))}
      </StyledList>
    </Drawer>
  );
};

export default MyDrawer;
