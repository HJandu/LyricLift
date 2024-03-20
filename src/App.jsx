import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Search from './pages/search/search'
// import Profile from './pages/profile/profile'
import Main_song from './pages/main_song/main_song'
import Navbar from './components/Navbar'
// import Dashboard from './components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  // return code ? <Dashboard code={code} /> : <Login />

  return (
    <Router>
      <Navbar />
      {/* Wrap Route elements in a Routes component */}
      <main className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/main-song" element={<Main_song />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
