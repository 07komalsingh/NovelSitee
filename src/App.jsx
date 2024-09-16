import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GenreBooksPage from './pages/GenreBooksPage'; // Import the new page component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genre/:genreName" element={<GenreBooksPage />} /> {/* Add the route for GenreBooksPage */}
        {/* Add more routes here if you have additional pages */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
