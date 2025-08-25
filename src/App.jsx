import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './pages/Hero'
import FeaturedCategories from './pages/Featured'
import Latest from './pages/Latest'
import Art from './pages/Art'
import MaintenancePage from './pages/Maintenance'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/categories" element={<MaintenancePage />} />
        <Route path="/masterpieces" element={<MaintenancePage />} />
        <Route path="/discover" element={<MaintenancePage />} />
        <Route path="/explore" element={<MaintenancePage />} />
        <Route path="/solutions" element={<MaintenancePage />} />
        <Route path="/articles" element={<MaintenancePage />} />
        <Route path="/signin" element={<MaintenancePage />} />
        <Route path="/getstarted" element={<MaintenancePage />} />
        <Route path="/expending" element={<MaintenancePage />} />
        <Route path="/explorexinder" element={<MaintenancePage />} />
        <Route path="/gallery" element={<MaintenancePage />} />
        <Route path="/join" element={<MaintenancePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
