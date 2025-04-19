
import './App.css'
import Header from './Components/Header';
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer';

// Main Application Layout
function App() {
 
  return (
    
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-[#E0F7FA] to-[#FFFFFF]'>
    <Header />
    {/* Outlet renders matched child route components */}
    <div className="flex-grow">
    <Outlet />
  </div>
  
  <Footer />
    </div>
  )
}

export default App
