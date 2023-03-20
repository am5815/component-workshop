import React, { useContext } from 'react'
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    ListItemButton,
    IconButton,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import { PlayArrow } from "@mui/icons-material";
export default function SongsList(data) {

    const songs = data.songs;
    const navigate = useNavigate();
    const { setCurrentPlayingSong, setPlaying } = useContext(AppContext);

    function handleSongChange(event, song) {
        event.preventDefault();
        setCurrentPlayingSong(song);
        setPlaying(true);
    }

    console.log("SongList Rendered");

    return (
        <List sx={{ width: "100%", maxWidth: 360 }}>
            {songs.map((song, index) => (
                <ListItemButton key={index} alignItems="flex-start" onClick={() => navigate(`/${index}`)}>
                    <ListItemAvatar>
                        <Avatar variant="rounded">{index + 1}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={song.title}
                        secondary={
                            <>
                                <Typography component="span" variant="subtitle2" sx={{ display: "block" }}>
                                    {song.artist}
                                </Typography>
                                <Typography component="span" variant="body2" sx={{ display: "block" }}>
                                    {song.album} - {song.year}
                                </Typography>
                                <Typography component="span" variant="body2" sx={{ display: "block" }}>
                                    {song.genre} - {song.duration}s
                                </Typography>
                            </>
                        }
                    />
                    <IconButton onClick={(e) => handleSongChange(e, song)}>
                        <PlayArrow/>
                    </IconButton>
                </ListItemButton>
            ))}
        </List>
    )
}
