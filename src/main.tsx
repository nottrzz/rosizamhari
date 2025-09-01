import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from './Navbar'

createRoot(document.getElementById('root')!).render(
  <div className="main px-20">
  <StrictMode>
    <Navbar/>
    <App />
  </StrictMode>,
  </div>
)
