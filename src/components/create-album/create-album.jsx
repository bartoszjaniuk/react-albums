import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAlbumAction,
  editAlbumAction,
} from "../../redux/album/album.actions";
import api from "../../api/albums";

const CreateAlbum = () => {
  const {
    edit: { isEditing, albumToEdit },
    albums,
  } = useSelector((state) => state.album);

  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    title: "",
    userId: "",
  });
  const { title, userId } = inputValues;

  useEffect(() => {
    // if (!isEditing) return;
    if (isEditing) {
      setInputValues({
        title: albumToEdit.title,
        userId: albumToEdit.userId,
      });
    }
  }, [albumToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (albumToEdit.id === null) {
      const newAlbum = {
        id: new Date().getTime().toString(),
        title: title,
        userId: userId,
      };
      const createdAlbum = await api.post("/", newAlbum);
      dispatch(createAlbumAction(createdAlbum.data));
    } else {
      const editingAlbum = albums.find((album) => album.id === albumToEdit.id);
      const updatedAlbum = { ...editingAlbum, title, userId };
      dispatch(editAlbumAction(updatedAlbum));
    }

    setInputValues({
      title: "",
      userId: "",
    });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div>
      <h2>Create new Album</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          value={userId}
          placeholder="userId"
          onChange={handleChange}
          name="userId"
        />
        <button type="submit">{isEditing ? "EDIT" : "ADD"}</button>
      </form>
    </div>
  );
};

export default CreateAlbum;
