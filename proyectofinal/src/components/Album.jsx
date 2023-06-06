import React from 'react';
import "../Album.css";

const Album = () => {
  const albums = [
    {
      id: 1,
      title: 'Mañana será bonito',
      artist: 'Karol G',
      cover: 'https://ca-times.brightspotcdn.com/dims4/default/558fcb0/2147483647/strip/true/crop/2048x2048+0+0/resize/1200x1200!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F97%2F00%2Ff207c37344368ffa297cc02d3999%2Fkarol.jpg'
    },
    {
      id: 2,
      title: 'Por primera vez',
      artist: 'Camilo',
      cover: 'https://musica.news/wp-content/uploads/2020/04/Camilo-Por-Primera-Vez.jpg'
    },
    {
      id: 3,
      title: 'Adele 21',
      artist: 'Adele',
      cover: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png'
    },
    {
      id: 4,
      title: 'Rare',
      artist: 'Selena Gomez',
      cover: 'https://cdn.shopify.com/s/files/1/0576/8616/3620/products/Rare_1024x.jpg?v=1631814747'
    }
  ];

  return (
    <div className="album-container">
      <h2>Álbumes Recomendados</h2>
      <div className="album-grid">
        {albums.map(album => (
          <div key={album.id} className="album-card">
            <img src={album.cover} alt={album.title} className="album-cover" />
            <h2>{album.title}</h2>
            <p>{album.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;

