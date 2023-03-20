import React from 'react';
import './App.css';
import {songs} from './data.js';
import SongsList from './SongsList';
import SongDetails from './SongDetails';
import CurrentPlaying from './CurrentPlaying';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AppContext} from './AppContext';

function App() {

  const [currentPlayingSong, setCurrentPlayingSong] = React.useState(songs[0]);
  const [playing, setPlaying] = React.useState(false);

  const context = {
    currentPlayingSong,
    setCurrentPlayingSong,
    playing,
    setPlaying
  }

  return (
    <div className="App">
      <AppContext.Provider value={context}>
      <BrowserRouter>
        <h1>My Songs</h1>
        <Routes>
          <Route path="/" element={<SongsList songs={songs} />} />
          <Route path="/:songId" element={<SongDetails/>} />
        </Routes>
        <CurrentPlaying />
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
