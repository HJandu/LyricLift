
const getSpotifyTracks = async (initialSearch) => {
console.log("doing spotify search");
const token = "BQBJsfb4gerVh2phTDTmhGT8UXvyX-w7Fls8rJ3mx0hzZRuejoyHbA1QZVVrsup6pLZgEabvj0fexRXOWavHh2pN0NV9oHVKXINHr53MLyTk0DrHrwIvih6JJ1cL1Wfpb5F1nDKGBd_3SPIrLCPZqL7_V9ZemJ-YmzhrXvwMEuM9d4V1WtAIXGE89cj0lqRfJve19mtzpjX82l8RtJKK3tEIEKEk50M"

  const result = await fetch(`https://api.spotify.com/v1/search?q=${initialSearch}&remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
  });

  const data = await result.json();
  // console.log("Spotify data:", data);
  return data;
}

export default getSpotifyTracks;

