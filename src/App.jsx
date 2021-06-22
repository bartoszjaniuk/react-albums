import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "./api/albums";
import { fetchAlbumsAction } from "./redux/album/album.actions";
import SidebarPage from "./components/sidebar/sidebar-page";

const App = () => {
  const { albums } = useSelector((state) => state.album);
  const dispatch = useDispatch();
  const fetchAlbums = async () => {
    try {
      const response = await api.get("/");
      dispatch(fetchAlbumsAction(response.data));
    } catch (error) {
      console.log("Fetching data from API has been failed 💣");
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);
  return (
    <div>
      <SidebarPage />
    </div>
  );
};

export default App;
