import Chat from '../pages/Chat';
import Login from '../pages/Login';

export const publicRoutes = [
  {
    path: '/login',
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: '/chat',
    Component: Chat,
  },
];
