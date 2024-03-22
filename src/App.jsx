import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Search from './pages/search/search'
import Navbar from './components/Navbar'
import Footer from './utils/Footer/footer';
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
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
