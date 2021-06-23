import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAlbumsAction } from "../redux/album/album.actions";
import api from "../api/albums";

const useFetchData = (url) => {
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
  }, []);
};

export default useFetchData;
