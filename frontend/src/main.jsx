import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Laws from './pages/Laws'
import LawDetail from './pages/LawDetail'
import Checklist from './pages/checklist';
import Header from './components/Header';
import './styles.css'
import CompanyProfile from './pages/CompanyProfile';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/laws" element={<Laws />} />
        <Route path="/laws/:id" element={<LawDetail />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/company" element={<CompanyProfile />} />


      </Routes>
      <Header />
    </BrowserRouter>
  </React.StrictMode>
)
