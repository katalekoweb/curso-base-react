import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mocks/server.ts'
import { App } from './App.tsx' // named import

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
