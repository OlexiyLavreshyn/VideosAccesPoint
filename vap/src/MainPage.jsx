import React, { useState, useEffect } from 'react';
import './css/MainPage.css'; // Import your CSS file for styling
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const [videos, setVideos] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedTimeRange, setSelectedTimeRange] = useState('');
    const [genres, setGenres] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch genres from the database
        Axios.get('http://localhost:3001/getGenres')
            .then(response => {
                setGenres(response.data);
            })
            .catch(error => {
                console.error('Error fetching genres:', error);
            });
    }, []);

    const fetchVideosByGenre = () => {
        Axios.get(`http://localhost:3001/getVideosByGenre?genre=${selectedGenre}`)
            .then(response => {
                setVideos(response.data);
            })
            .catch(error => {
                console.error('Error fetching videos by genre:', error);
            });
    };


    const fetchVideosByTimeRange = (timeRange) => {
      Axios.get(`http://localhost:3001/getVideosByTimeRange?timeRange=${timeRange}`)
          .then(response => {
              setVideos(response.data);
          })
          .catch(error => {
              console.error('Error fetching videos by time range:', error);
          });


  };
    const fetchLatestVideos = () => {
      Axios.get('http://localhost:3001/getLatestVideos')
          .then(response => {
              setVideos(response.data);
          })
          .catch(error => {
              console.error('Error fetching latest videos:', error);
          });
  };

    const renderGenres = () => {
        return genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
        ));
    };

    const handleSelectTimeRange = (timeRange) => {
        setSelectedTimeRange(timeRange);
        // Fetch videos based on the selected time range
        fetchVideosByTimeRange(timeRange);
    };

    const navigate = useNavigate();

    const NewVideo = () => {
        navigate('/NewVideo');
    };

    const renderVideos = () => {
      return videos.map((video, index) => (
          <div key={index} className="video-row">
              <div className="video-info">
                  <h3>{video.name}</h3>
                  <p><strong>Genre:</strong> {video.genre}</p>
                  <p><strong>Description:</strong> {video.description}</p>
                  <p><strong>URL:</strong> {video.url}</p>
              </div>
          </div>
      ));
  };

  const fetchVideosByName = () => {
    Axios.get(`http://localhost:3001/getVideosByName?name=${searchTerm}`)
        .then(response => {
            setVideos(response.data);
        })
        .catch(error => {
            console.error('Error fetching videos by name:', error);
        });
};
    return (
        <div className="form-container2">
            <div className="buttons-container">
                <button onClick={NewVideo} className="main-button">Add new video</button>

                <button onClick={fetchLatestVideos} className="main-button">Get Latest Videos</button>

                <button onClick={() => fetchVideosByTimeRange('last24hours')} className="main-button2">Last 24 Hours</button>
                <button onClick={() => fetchVideosByTimeRange('lastweek')} className="main-button">Last Week</button>
                <button onClick={() => fetchVideosByTimeRange('lastmonth')} className="main-button">Last Month</button>
                <button onClick={() => fetchVideosByTimeRange('lastyear')} className="main-button">Last Year</button>

                <button onClick={fetchVideosByGenre} className="main-button2">Filter by Genre</button>
                <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="main-select">
                    <option value="">Select Genre</option>
                    {renderGenres()}
                </select>

                <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by video name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button onClick={fetchVideosByName} className="main-button">Search</button>
            </div>

            </div>
            <div className="content">
                <div className="video-container">
                    {renderVideos()}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
