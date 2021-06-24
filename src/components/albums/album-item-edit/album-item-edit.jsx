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
    // <div className={styles.box}>
    //   <div className={styles.id}>
    //     <strong>ID: </strong>
    //     {id}
    //   </div>
    //   <div className={styles.title}>
    //     <strong>TITLE: </strong> {title}
    //   </div>
    //   <div className={styles.userId}>
    //     {" "}
    //     <strong>USERID: </strong> {userId}
    //   </div>
    // <div className={styles.buttonGroup}>
    //   <button className="btn btn-edit" onClick={() => handleEdit(album)}>
    //     <AiFillEdit />
    //   </button>
    //   <button className="btn btn-delete" onClick={() => handleDelete(id)}>
    //     <AiFillDelete />
    //   </button>
    // </div>
    // </div>

    <>
      <tbody>
        <tr>
          <td data-label="Account">{id}</td>
          <td data-label="Due Date">{title}</td>
          <td data-label="Amount">{userId}</td>
          <td data-label="Action">
            <div className={styles.buttonGroup}>
              <button
                className="btn btn-edit"
                onClick={() => handleEdit(album)}
              >
                <AiFillEdit />
              </button>
              <button
                className="btn btn-delete"
                onClick={() => handleDelete(id)}
              >
                <AiFillDelete />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default AlbumItemEdit;
