
import React, { useEffect, useState } from 'react';
import { fetchDeezerTracks } from './api';

const MusicSelector = () => {
  const [tracks, setTracks] = useState([]);

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

  return (
    <div>
      <h2>Select a Music Track</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>{track.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MusicSelector;
