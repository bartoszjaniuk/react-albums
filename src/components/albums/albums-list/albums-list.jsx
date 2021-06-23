import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../pagination/pagination";
import AlbumItem from "../album-item/album-item";
import SearchBar from "../../search-bar/search-bar";
import "./albums-list.styles.scss";
import { fetchAlbumsAction } from "../../../redux/album/album.actions";
const AlbumsList = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [poststPerPage] = useState(12);

  const { albums } = useSelector((state) => state.album);
  const { isOpen } = useSelector((state) => state.sidebar);

  const indexOfLastAlbum = currentPage * poststPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - poststPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const searchItems = (text) => {
    const searchItem = albums.filter((menuItem) =>
      menuItem.title.includes(text)
    );
    dispatch(fetchAlbumsAction(searchItem));
  };
  return (
    <>
      <SearchBar searchItems={searchItems} />
      <div className={`${isOpen ? "albums active" : "albums"}`}>
        <div className="albums__container">
          {currentAlbums.map((album) => {
            return <AlbumItem key={album.id} {...album} />;
          })}
        </div>
        <Pagination
          itemsPerPage={poststPerPage}
          totalItems={albums.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default AlbumsList;
