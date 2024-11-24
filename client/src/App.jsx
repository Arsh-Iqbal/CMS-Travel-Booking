// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import PackageList from './components/PackageList';
import AdminPackageManager from './components/AdminPackageManager';
import BookingForm from './components/BookingForm';
import AdminBookingList from './components/AdminBookingList';

const App = () => {

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/package" element={<PackageList />} />
        <Route path="/admin" element={<AdminPackageManager />} />
        <Route path="/createbooking" element={<BookingForm />} />
        <Route path="/admin/bookings" element={<AdminBookingList />} />
      </Routes>
    </Router>
  );
};

export default App;