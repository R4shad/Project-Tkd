import './App.css'
import { Home } from './components/Home'
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import heroImg from './assets/hero-img.png'
import Teams from './components/Teams'

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Hero 
           image={heroImg} 
           title={'Asociación Municipal de TaeKwonDo Quillacollo'} 
           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'} 
        />
        {/* <Teams /> */}
        <Teams />
       


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
