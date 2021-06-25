import React from 'react';
import AlbumsList from './components/albums/albums-list/albums-list';
import Menu from './components/menu/menu';
import useFetchData from './custom-hooks/useFetchData';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AlbumsListEdit from './components/albums/albums-list-edit/albums-list-edit';

const App = () => {
  useFetchData('/');
  return (
    <>
      <Menu />
      <Router>
        <Route exact path="/" component={AlbumsList} />
        <Route exact path="/dashboard" component={AlbumsListEdit} />
      </Router>
    </>
  );
};

export default App;
