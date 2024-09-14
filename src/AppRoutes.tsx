import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = React.lazy(()=>import('./pages/Home/Home'))
const About =React.lazy(()=>import('./pages/About/About'));
const Properties =React.lazy(()=>import('./pages/Properties/Properties'));
const Navbar =React.lazy(()=>import( './components/Navbar'));


const AppRoutes: React.FC = () => {
  return (
    <Router>
       <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;