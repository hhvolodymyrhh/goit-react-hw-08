import './App.css';

import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage ';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
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
          
          {/* на удаление проверочние 2 */}
          <Route path="/register" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
            {/*  */}

{/* 
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
            } /> */}
            
          
        </Routes>
  </Suspense>
  </Layout>
)}

export default App;