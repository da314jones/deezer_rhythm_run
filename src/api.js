
const DEEZER_API_BASE_URL = 'https://api.deezer.com';

export const fetchDeezerTracks = async () => {
  try {
    const response = await fetch(`${DEEZER_API_BASE_URL}/album/302127/tracks`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch Deezer tracks: ' + error.message);
  }
};
