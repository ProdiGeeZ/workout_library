import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter basename="/app">
        <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
