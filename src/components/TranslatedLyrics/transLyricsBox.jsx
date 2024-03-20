// created a box to display the foreign lyrics

export default function TransLyricsBox({ lyrics }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Lyrics</h5>
        <p className="card-text">{lyrics}</p>
      </div>
    </div>
  )
}