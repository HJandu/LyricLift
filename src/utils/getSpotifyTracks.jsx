
const getSpotifyTracks = async (initialSearch) => {
console.log("doing spotify search");
const token = "BQCz-6zp_N6Yn3GtwVp6kbapGxw38KAPgJZrHo7Xg1DcHv3HLEwEUBYXkXf5Xl2ESI_EuY8zIfQarcDbBpjnVmgKDSwBACjKxMPg06Gmp8ZM-FMWVnWIVPQyRJRfLqzY0j-kMNNxNPtZJj7azUq5TKzHGAdYG58HRwWjTK3ErsMd8WkbmArETYQZPVwSFUUMy4FS2SWrtVmfqKpx_X9NuVtEQInhxSA"

  const result = await fetch(`https://api.spotify.com/v1/search?q=${initialSearch}&remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
  });

  const data = await result.json();
  // console.log("Spotify data:", data);
  return data;
}

export default getSpotifyTracks;

