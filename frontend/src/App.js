import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
          <Header />
          <div className='container2'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
          </div>
        <div className='container'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
          <Footer />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
