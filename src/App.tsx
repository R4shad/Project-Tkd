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
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" />
      <ScrollProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/club/:name" element={<Club />} />
              <Route path="/createPublication" element={<NewsForm />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/publication/:slugTitle" element={<NewsView />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ScrollProvider>
    </div>
  )
}

export default App
