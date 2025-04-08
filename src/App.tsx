import './App.css'
import { Home } from './pages/Home'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Club } from './pages/Club'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:clubName" element={<Club />} />
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
      </Router>
    </>
  )
}

export default App
