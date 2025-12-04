import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Laws from './pages/Laws'
import LawDetail from './pages/LawDetail'

import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/laws" element={<Laws />} />
        <Route path="/laws/:id" element={<LawDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
