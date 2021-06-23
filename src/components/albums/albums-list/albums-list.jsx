import React from "react";
import { useSelector } from "react-redux";
import AlbumItem from "../album-item/album-item";
import "./albums-list.styles.scss";

const AlbumsList = () => {
  const { albums } = useSelector((state) => state.album);
  const { isOpen } = useSelector((state) => state.sidebar);
  return (
    <div className={`${isOpen ? "albums active" : "albums"}`}>
      <div className="albums__container">
        <AlbumItem {...albums} />
        <AlbumItem {...albums} />
        <AlbumItem {...albums} />
        <AlbumItem {...albums} />
        <AlbumItem {...albums} />
        <AlbumItem {...albums} />
        <AlbumItem {...albums} />
        <AlbumItem {...albums} />
        <AlbumItem {...albums} />
        <AlbumItem {...albums} />
        <AlbumItem {...albums} />
        <AlbumItem {...albums} />
      </div>
    </div>
  );
};

export default AlbumsList;

{
  /* <div className={`${isOpen ? "albums active" : ""}`}>
<div className="albums__container">
  {albums.map((album) => {
    return <AlbumItem {...album} key={album.id} />;
  })}
</div>
</div> */
}
