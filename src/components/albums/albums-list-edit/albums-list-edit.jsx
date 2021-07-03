import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../pagination/pagination';
import './albums-list-edit.styles.scss';
import AlbumItemEdit from '../album-item-edit/album-item-edit';
import CreateAlbum from '../../create-album/create-album';
const AlbumsListEdit = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [poststPerPage] = useState(8);

  const { albums } = useSelector(state => state.album);
  const { isOpen } = useSelector(state => state.sidebar);

  const indexOfLastAlbum = currentPage * poststPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - poststPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div className={`${isOpen ? 'albums-edit active' : 'albums-edit'}`}>
        <CreateAlbum />
        <div className="albums-items">
          <table>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">TITLE</th>
                <th scope="col">USERID</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            {currentAlbums.map((album, index) => {
              return <AlbumItemEdit album={album} key={index} />;
            })}
          </table>
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
