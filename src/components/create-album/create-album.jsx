import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAlbumAction } from "../../redux/album/album.actions";
import api from "../../api/albums";

const CreateAlbum = () => {
  const dispatch = useDispatch();
  const [albums, setAlbums] = useState([]);
  const [inputValues, setInputValues] = useState({
    title: "",
    userId: "",
  });
  const { title, userId } = inputValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAlbum = {
      id: new Date().getTime().toString(),
      title: title,
      userId: userId,
    };
    const createdAlbum = await api.post("/", newAlbum);
    dispatch(createAlbumAction(createdAlbum.data));

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
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default CreateAlbum;
