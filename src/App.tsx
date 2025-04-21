import './App.css'
import { Home } from './pages/Home'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Club } from './pages/Club'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club/:id" element={<Club />} />
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
