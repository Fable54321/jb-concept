import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App.tsx'
import './Styles/index.css'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
