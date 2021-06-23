import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../pagination/pagination";
import AlbumItem from "../album-item/album-item";
import "./albums-list.styles.scss";

const AlbumsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [poststPerPage, setPoststPerPage] = useState(12);

  const { albums } = useSelector((state) => state.album);
  const { isOpen } = useSelector((state) => state.sidebar);

  const indexOfLastAlbum = currentPage * poststPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - poststPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
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
  );
};

export default AlbumsList;
