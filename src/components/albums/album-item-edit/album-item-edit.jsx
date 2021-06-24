import React from "react";
import styles from "./album-item-edit.module.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const AlbumItemEdit = ({ id, title, userId }) => {
  return (
    <div className={styles.box}>
      <div className={styles.id}>{id}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.userId}>{userId}</div>
      <div className={styles.buttonGroup}>
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

export default AlbumItemEdit;
