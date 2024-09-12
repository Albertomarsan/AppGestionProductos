import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppGestionProductos from './AppGestionProductos.jsx'

createRoot(document.getElementById('root')).render(
    <AppGestionProductos />
)
