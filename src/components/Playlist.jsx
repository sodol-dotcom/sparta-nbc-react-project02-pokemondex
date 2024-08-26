// Playlist.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchYouTubeVideo } from './MusicPlayer';

const PlaylistContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 16px;
`;

const VideoCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  background-color: #f9f9f9;
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 90px;
  border-radius: 4px;
  margin-right: 16px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const Playlist = ({ videoIds }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await Promise.all(videoIds.map(fetchYouTubeVideo));
      setVideos(fetchedVideos.filter(video => video !== null));
    };

    fetchVideos();
  }, [videoIds]);

  return (
    <PlaylistContainer>
      {videos.map(video => (
        <VideoCard key={video.title}>
          <Thumbnail src={video.thumbnails.default.url} alt={video.title} />
          <Title>{video.title}</Title>
        </VideoCard>
      ))}
    </PlaylistContainer>
  );
};

export default Playlist;
