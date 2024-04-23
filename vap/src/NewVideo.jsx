import React, { useState } from 'react';
import './css/register.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewVideo() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [genre, setGenre] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate if any input field is empty
        if (!name || !description || !url || !genre) {
            setIsEmpty(true);
            return;
        }
        // If all fields are filled, proceed with adding the video
        AddNewVideo();
    };

    const AddNewVideo = () => {
        const token = localStorage.getItem('token');

        Axios.post('http://localhost:3001/AddNewVideo', {
            name: name,
            description: description,
            url: url,
            genre: genre,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            // Handle response
            navigate('/MainPage'); // Redirect to MainPage after adding video
        }).catch((error) => {
            // Handle error
        });
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Add new video</h2>
                <div>
                    <label>Video name</label>
                    <input
                        type="text"
                        name="name"
                        className={`underline-input ${isEmpty && !name && 'empty'}`}
                        value={name}
                        onChange={(e) => { setName(e.target.value); setIsEmpty(false); }}
                        required
                    />
                    {isEmpty && !name && <p className="error-message">Назва відео не може бути пустою</p>}
                </div>

                <div>
                    <label>Video description</label>
                    <input
                        type="text"
                        name="description"
                        className={`underline-input ${isEmpty && !description && 'empty'}`}
                        value={description}
                        onChange={(e) => { setDescription(e.target.value); setIsEmpty(false); }}
                        required
                    />
                    {isEmpty && !description && <p className="error-message">Опис відео не може бути пустим</p>}
                </div>

                <div>
                    <label>Video genre</label>
                    <input
                        type="text"
                        name="genre"
                        className={`underline-input ${isEmpty && !genre && 'empty'}`}
                        value={genre}
                        onChange={(e) => { setGenre(e.target.value); setIsEmpty(false); }}
                        required
                    />
                    {isEmpty && !genre && <p className="error-message">Жанр відео не може бути пустим</p>}
                </div>

                <div>
                    <label>Video url</label>
                    <input
                        type="url"
                        name="url"
                        className={`underline-input ${isEmpty && !url && 'empty'}`}
                        value={url}
                        onChange={(e) => { setUrl(e.target.value); setIsEmpty(false); }}
                        required
                    />
                    {isEmpty && !url && <p className="error-message">Посилання на відео не може бути пустим</p>}
                </div>

                <div>
                    <button type="submit" className="submit-button">Add</button>
                </div>
            </form>
        </div>
    );
}

export default NewVideo;
