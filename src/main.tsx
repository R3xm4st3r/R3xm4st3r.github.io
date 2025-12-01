import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Preloader } from './ui/preloader'; // <--- Importas el preloader

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Preloader>
      <App />
    </Preloader>
  </React.StrictMode>,
)