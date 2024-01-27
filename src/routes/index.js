import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import AddUser from '../pages/AddUser';
import Overview from '../pages/Overview';
import UserInfo from '../pages/UserInfo';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Dashboard,
    children: [
      {
        path: '/',
        Component: Overview
      },
      {
        path: '/add-user',
        Component: AddUser
      },
      {
        path: '/existing-users',
        Component: Users
      },
      {
        path: '/user-info/:id',
        Component: UserInfo
      }
    ]
  }
]);

export default router;
