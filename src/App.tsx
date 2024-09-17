import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { privateRoutes, publicRoutes } from './utils/routes';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import useFirebase from './hooks/useFirebase';

function App() {
  const { auth } = useFirebase();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {user
          ? privateRoutes.map(({ path, Component }) => <Route path={path} element={<Component />} key={path} />)
          : publicRoutes.map(({ path, Component }) => <Route path={path} element={<Component />} key={path} />)}

        <Route path="*" element={<Navigate to={user ? "/chat" : "/login"} replace />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
