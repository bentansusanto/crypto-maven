import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/Homepage'
import AboutPage from './components/About'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
