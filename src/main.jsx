import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoute from './routes/AppRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  
      <AuthProvider>
    <AppRoute />
    <ToastContainer position="bottom-right" autoClose={5000} />
  </AuthProvider>
  
)
