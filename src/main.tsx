import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/index.tsx'
import './app.css'
import '@fontsource-variable/montserrat';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
