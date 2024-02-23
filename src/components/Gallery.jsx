import React, { useState } from 'react';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const images = ['gal1.jpg', 'gal2.jpg', 'gal3.jpg', 'gal4.jpg'];

    return (
        <div className="gallery">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={`img/${img}`}
                    alt="Photo coiffure"
                    height='250px'
                    onClick={() => setSelectedImg(`img/${img}`)}
                    style={{ cursor: 'pointer' }}
                /> 
            ))}
            {selectedImg && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                    onClick={() => setSelectedImg(null)}
                >
                    <img src={selectedImg} alt="Zoomed" style={{ maxHeight: '80%', maxWidth: '80%' }} />
                </div>
            )}
        </div>
    );
};

export default Gallery;
