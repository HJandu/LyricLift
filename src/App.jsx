import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Search from './pages/search/search'
import Profile from './pages/profile/profile'
import Main_song from './pages/main_song/main_song'
import Login from './pages/login/login'
import Navbar from './components/Navbar'
import './App.css'

function App() {


  return (
    <Router>
      <Navbar />
      {/* Wrap Route elements in a Routes component */}
      <main className='container'>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
        
      </Routes>
      </main>
    </Router>
  );
}

export default App
