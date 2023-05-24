import React from 'react'
import ReactDOM from 'react-dom/client'
import AppShell from './AppShell'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <AppShell >
            <App />
        </AppShell>
      </BrowserRouter>
  </React.StrictMode>,
)
