import React from "react";
import AlbumsList from "./components/albums/albums-list/albums-list";
import Menu from "./components/menu/menu";
import SearchBar from "./components/search-bar/search-bar";
import useFetchData from "./custom-hooks/useFetchData";

const App = () => {
  useFetchData("/");
  return (
    <>
      <Menu />
      <SearchBar />
      <AlbumsList />
    </>
  );
};

export default App;
