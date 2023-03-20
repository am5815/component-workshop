import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { PlayArrow, PauseCircle } from '@mui/icons-material';

import { songs } from './data';
import { AppContext } from './AppContext';

export default function () {

    const { currentPlayingSong, playing, setPlaying } = React.useContext(AppContext);

    return (
        <div>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    {currentPlayingSong.title + ' - ' + currentPlayingSong.artist}
                    <Box sx={{ flexGrow: 1 }} />
                    {
                        playing ? (
                            <IconButton color="inherit" onClick={()=>setPlaying(!playing)}>
                                <PauseCircle />
                            </IconButton>
                        ) : (
                            <IconButton color="inherit" onClick={()=> setPlaying(!playing)}>
                                <PlayArrow />
                            </IconButton>
                        )}
                </Toolbar>
            </AppBar>
        </div>
    )
}
