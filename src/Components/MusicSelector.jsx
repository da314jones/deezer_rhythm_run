
import React, { useEffect } from 'react';
import { fetchDeezerTracks } from './api';

const MusicSelector = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDeezerTracks();
        setTracks(data.data);
      } catch (error) {
        console.error('Error fetching Deezer tracks:', error.message);
      }
    };

    fetchData();
  }, []);

  const playPreview = (previewUrl) => {
    const audio = new Audio(previewUrl);
    audio.play();
  };

  return (
    <div>
      <h2>Select a Music Track</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>{track.title}
        <button onClick={() => playPreview(track.preview)}>Play Preview</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicSelector;
