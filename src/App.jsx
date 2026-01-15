import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ContactWithFrame from './components/ContactWithFrame';
import UnderConstruction from './components/UnderConstruction';
import RoadSafetyGuide from './components/RoadSafetyGuide';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="inquiry" element={<ContactWithFrame />} />
          <Route path="under-construction" element={<UnderConstruction />} />
          <Route path="road-safety-guide" element={<RoadSafetyGuide />} />
          {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
