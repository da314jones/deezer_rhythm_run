import React, { useState, useEffect } from "react";
import { getPlayListUrl } from "../../API/fetch";

export default function MusicSelector() {
  const [tracks, SetTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    const playListUrl = getPlayListUrl();

    fetch(playListUrl)
      .then((responde) => responde.json())
      .then((data) => {
        const filteredTracks = data.filter((track) => track.duration === 30);

        SetTracks(filteredTracks);
      })
      .catch((error) => {
        console.error("Error fetching tracks:", error);
      });
  }, []);

  const handleTrackSelection = (track) => {
    selectedTrack(track);
  };

  return (
    <div className="music-selector">
      <h2>Select a Music Track</h2>
      <div className="track-list">
        {tracks.map((track) => (
          <div key={track.id} className="track-item">
            <button
              onClick={() => handleTrackSelection(track)}
              className="preview-btn"
              disabled={!track.preview}
            >
              Preview
            </button>
            <div className="track-info">
              <p>{track.title}</p>
              <p>Duration: {track.duration} seconds</p>
              <p>Artist: {track.artist.name}</p>
              <a href={track.link} target="_blank" rel="noopener noreferrer">
                Listen on Deezer
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
