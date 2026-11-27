import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { PedidosProvider } from './context/PedidosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PedidosProvider>
        <App />
      </PedidosProvider>
    </BrowserRouter>
  </StrictMode>,
)