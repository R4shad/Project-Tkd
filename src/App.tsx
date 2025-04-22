import './App.css'
import { Home } from './pages/Home'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Club } from './pages/Club'
import Footer from './components/Footer'
import { NewsForm } from './pages/NewsForm'
import { Login } from './components/Login'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club/:id" element={<Club />} />
          <Route path="/news" element={<NewsForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
    </>
  )
}

export default App
