import './App.css'
import { Home } from './pages/Home/Home'
import { Navbar } from './Shared/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Club } from './pages/Club/Club'
import { Footer } from './Shared/Footer'
import { NewsForm } from './pages/NewsForm/NewsForm'
import { Login } from './pages/Login/Login'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { NewsView } from './pages/NewsView/NewsView'
import { ScrollProvider } from './context/ScrollProvider'
import { ScrollToTop } from './Shared/ScrollTop'

function App() {
  return (
    <ScrollProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club/:id" element={<Club />} />
          <Route path="/news" element={<NewsForm />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/publication/:id" element={<NewsView />} />
        </Routes>
        <Footer />
      </Router>
    </ScrollProvider>
  )
}

export default App
