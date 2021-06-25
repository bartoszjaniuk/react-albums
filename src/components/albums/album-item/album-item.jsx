import React from 'react';
import './albums.item.styles.scss';

const AlbumItem = ({ id, title, userId }) => {
  return (
    <div className="album-box">
      <div className="album-box__title">{title}</div>
      <div className="id-container">
        <div className="id-container__id">Id: {id}</div>
        <div className="id-container__userid">UserId: {userId}</div>
      </div>
    </div>
  );
};

export default AlbumItem;
