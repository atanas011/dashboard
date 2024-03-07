import React from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import App from './App.js'
import './index.css'
import StoreProvider from './context/StoreProvider.js'

createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <StoreProvider>
        <App />
        <Toaster />
      </StoreProvider>
    </React.StrictMode>
  )
