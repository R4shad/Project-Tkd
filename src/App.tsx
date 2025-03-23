import './App.css'
import { Home } from './components/Home'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' 

function App() {
  return (
    <>
      
      <Router>
      <Navbar/>
        {/* <nav className="navbar">
          <p className="nav-title">Prueba Técnica</p>
          <div className="nav-links">
            <Link className="nav-link" to="/">
              Lista de Tareas
            </Link>
            <Link className="nav-link" to="/create">
              Crear Tarea
            </Link>
          </div>
        </nav> */}

        <div className="container">
          <Routes>
          <Route
              path="/"
              element={<Home/>}
            />
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
        </div>
      </Router>
    </>
  )
}

export default App
