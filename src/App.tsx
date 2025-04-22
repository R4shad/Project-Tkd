import './App.css'
import { Home } from './pages/Home'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Club } from './pages/Club'
import Footer from './components/Footer'
import { NewsForm } from './pages/NewsForm'
import { Login } from './components/Login'
import { Dashboard } from './pages/Dashboard'
import { NewsView } from './pages/NewsView'
import { ScrollProvider } from './context/ScrollProvider'

function App() {
  return (
    <ScrollProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club/:id" element={<Club />} />
          <Route path="/news" element={<NewsForm />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/publication/:id" element={<NewsView />} />
          {/* 
            <Route
              path="/create"
              element={<TaskForm createTask={createTask} editTask={editTask} />}
            />
            <Route
              path="/edit/:id"
              element={<TaskForm createTask={createTask} editTask={editTask} />}
            /> */}
        </Routes>
        <Footer />
      </Router>
    </ScrollProvider>
  )
}

export default App
