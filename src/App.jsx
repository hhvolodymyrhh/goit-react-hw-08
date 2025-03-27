import './App.css';

import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from '../redux/auth/operations';
// import { selectIsRefreshing } from '../redux/auth/selectors';

import Loader from './components/Loader/Loader';
import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {



  return(
 <Layout>
   {/* <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
         
          <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
  </Suspense> */}
  </Layout>
)}

export default App;