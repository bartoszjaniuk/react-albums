import React from "react";
import styles from "./album-item-edit.module.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  deleteAlbumAction,
  setEditingAlbumIdAction,
} from "../../../redux/album/album.actions";
import { useDispatch } from "react-redux";
import api from "../../../api/albums";
const AlbumItemEdit = ({ album }) => {
  const { id, title, userId } = album;
  const dispatch = useDispatch();
  const handleDelete = async (albumId) => {
    await api.delete(`/${albumId}`);
    dispatch(deleteAlbumAction(albumId));
  };

  const handleEdit = async (albumToEdit) => {
    dispatch(setEditingAlbumIdAction(albumToEdit));
  };
  return (
    <div className={styles.box}>
      <div className={styles.id}>{id}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.userId}>{userId}</div>
      <div className={styles.buttonGroup}>
        <button className="btn btn-edit" onClick={() => handleEdit(album)}>
          <AiFillEdit />
        </button>
        <button className="btn btn-delete" onClick={() => handleDelete(id)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default AlbumItemEdit;
