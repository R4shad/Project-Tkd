import './App.css'
import { Home } from './components/Home'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


function App() {
  return (
    <>

      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
              path="/"
              element={<Home tasks={tasks} deleteTask={deleteTask} />}
            />
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
