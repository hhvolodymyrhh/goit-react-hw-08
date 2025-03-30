import './App.css';

import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage '));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';

function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);



  return(
 <Layout>
   <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
       
            <Route path="/register" element={
              <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />
            } />
            <Route path="/login" element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            } />
            <Route path="/contacts" element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            } />
         
            <Route path="*" element={
              <RestrictedRoute redirectTo="*" component={<NotFoundPage />} />
            } />
            
        </Routes>
  </Suspense>
  </Layout>
)}

export default App;