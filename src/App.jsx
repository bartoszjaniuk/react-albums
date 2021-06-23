import React from "react";
import AlbumsList from "./components/albums/albums-list/albums-list";
import Menu from "./components/menu/menu";
import useFetchData from "./custom-hooks/useFetchData";

const App = () => {
  useFetchData("/");
  return (
    <>
      <Menu />
      <AlbumsList />
    </>
  );
};

export default App;
