import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { Provider } from './provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
