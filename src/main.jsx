// Importing React StrictMode for highlighting potential issues
import { StrictMode } from 'react'
// React DOM API to render app into the DOM
import { createRoot } from 'react-dom/client'
// Global styles
import './index.css'
// Main App component
import App from './App.jsx'

// Rendering the React app inside the root div in index.html

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
