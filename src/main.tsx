import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/index.tsx'
import './app.css'
import '@fontsource-variable/montserrat';
import UserProvider from './context/user.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </React.StrictMode>,
)
