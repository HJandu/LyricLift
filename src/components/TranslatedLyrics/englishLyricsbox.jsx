// created a new component that will display the translated lyrics in English using tailwindcss

export default function EnglishLyricsBox({ translatedLyrics }) {
    return (
      <div className="card">
      <div className="card-body">
        <h5 className="card-title">Translated Lyrics</h5>
        <p className="card-text">{translatedLyrics}</p>
      </div>
    </div>
    )
}