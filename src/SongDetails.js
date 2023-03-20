import React from 'react'
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography
} from "@mui/material";
import { useParams } from 'react-router-dom';
import { songs } from './data';

export default function SongDetails() {

    // Get the songId from params
    const { songId } = useParams();
    const song = songs[songId];
    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardHeader
                title={song.title}
                subheader={`${song.artist} - ${song.album} (${song.year})`}
            />
            <CardMedia
                component="img"
                height="300"
                image={`https://source.unsplash.com/400x400/?${song.title}`}
                alt={song.title}
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    {song.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Genre: {song.genre} - Duration: {song.duration}s
                </Typography>
            </CardContent>
        </Card>
    );
}
