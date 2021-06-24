import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbumsAction } from "../redux/album/album.actions";
import api from "../api/albums";

const useFetchData = (url) => {
  const { albums } = useSelector((state) => state.album);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await api.get(url);
      dispatch(fetchAlbumsAction(response.data));
    } catch (error) {
      console.log("Fetching data from API has been failed 💣");
    }
  };

  useEffect(() => {
    fetchData();
    console.log("Runned on---");
  }, [dispatch]);
};

export default useFetchData;
