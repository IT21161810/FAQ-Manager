import './App.css'
import Navbar from './components/Navbar'
import FaqTable from './components/FaqTable'
import Footer from './components/Footer'
import ViewQuestion from './pages/ViewQuestion'
import UpdateQuestion from './pages/UpdateQuestion'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
    
            <FaqTable />
            <Footer />
          </>
        } />
        <Route path="/update/:id" element={<UpdateQuestion />} />
        <Route path="/view/:id" element={<ViewQuestion />} />
      </Routes>

    </>
  )
}

export default App
