// display the translated lyrics in a box

// import { Link } from 'react-router-dom';
// import TransLyricsBox from '../TranslatedLyrics/transLyricsBox';
// import EnglishLyricsBox from '../TranslatedLyrics/englishLyricsbox';

// export default function SearchResults({lyrics, translatedLyrics}) {
//     // return (
//     //     <div className="card" style="width: 18rem;">
//     //         <div className="card-body">
//     //             <p className="card-text">${lyrics}</p>
//     //         </div>
//     //     </div>
//     // )
// }

import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'; // Import Materialize CSS
import { Link } from 'react-router-dom';
import './style.css';

export default function SearchResults({ lyrics, translatedLyrics }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Original Lyrics</span>
              <p>{lyrics}</p>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Translated Lyrics</span>
              <p>{translatedLyrics}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <Link to="/original" className="waves-effect waves-light btn">
            Go to Original Lyrics Page
          </Link>
        </div>
        <div className="col s6">
          <Link to="/translated" className="waves-effect waves-light btn">
            Go to Translated Lyrics Page
          </Link>
        </div>
      </div>
    </div>
  );
}