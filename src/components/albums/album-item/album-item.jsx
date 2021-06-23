import React from "react";
import "./albums.item.styles.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const AlbumItem = ({ id, title, userId }) => {
  return (
    <div className="album-box">
      <div className="album-box__title">{title}</div>
      <div className="id-container">
        <div className="id-container__id">Id: {id}</div>
        <div className="id-container__userid">UserId: {userId}</div>
      </div>
      <div className="button-group">
        <button className="btn btn-edit">
          <AiFillEdit />
        </button>
        <button className="btn btn-delete">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default AlbumItem;

// https://www.youtube.com/watch?v=59z1_3-vTOk&ab_channel=DipeshMalvia
