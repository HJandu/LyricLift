import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const history = useNavigate();

//   const handleSearch = () => {
//     // Redirect to the search page with the search term as a query parameter
//     history.push(`/search?q=${encodeURIComponent(searchTerm)}`);
//   };

// return (
//   <div>
//     <input
//       type="text"
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       placeholder="Search..."
//     />
//     <button onClick={handleSearch}>Search</button>
//   </div>
// );
// };

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useNavigate();

    const handleSearch = () => {
      // Redirect to the search page with the search term as a query parameter
      history.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid"></div>
      <Link className="navbar-brand" to="/">LyricLift</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search" 
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}/>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/login">Login/Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

