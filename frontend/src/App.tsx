
import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import Layout from './components/Layout';
import RegisterPage from './pages/registerPage/RegisterPage';
import LoginPage from './pages/loginPage/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRouteLogin from './components/ProtectedRouteLogin';

function App() {


  return (
    <>
      <Routes>

        <Route element={<Layout />}>

          <Route element={<ProtectedRoute />}>
            <Route element={<HomePage />}
              path="/" />
          </Route>
          </Route>
            <Route element={<LoginPage />}
              path="/login" />



      </Routes>
    </>
  );
}

export default App;
