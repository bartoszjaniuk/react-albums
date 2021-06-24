import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../pagination/pagination";
import "./albums-list-edit.styles.scss";
import AlbumItemEdit from "../album-item-edit/album-item-edit";
import CreateAlbum from "../../create-album/create-album";
const AlbumsListEdit = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [poststPerPage] = useState(8);

  const { albums } = useSelector((state) => state.album);
  const { isOpen } = useSelector((state) => state.sidebar);

  const indexOfLastAlbum = currentPage * poststPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - poststPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={`${isOpen ? "albums-edit active" : "albums-edit"}`}>
        <div className="albums-edit__container">
          <CreateAlbum />
          <div className="albums-edit__headings">
            <h2 className="id">ID</h2>
            <h2 className="title">TITLE</h2>
            <h2 className="userId">USERID</h2>
          </div>
          {currentAlbums.map((album, index) => {
            return <AlbumItemEdit {...album} key={index} />;
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

export default AlbumsListEdit;
