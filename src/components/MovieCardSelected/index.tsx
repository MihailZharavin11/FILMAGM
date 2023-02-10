import {
  Box,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { CardMenu } from "../CardMenu";
import { Movie } from "../types";

type MovieCardSelectedProps = {
  movie: Movie;
  onCardDelete: () => void;
};

export const MovieCardSelected: React.FC<MovieCardSelectedProps> = ({
  movie,
  onCardDelete,
}) => {
  return (
    <Card sx={{ display: "flex", position: "relative", width: "100%" }}>
      <CardMenu>
        <MenuItem onClick={() => {}}>Delete</MenuItem>
      </CardMenu>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.image}
        alt={movie.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movie.releaseDate}
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, pt: 0 }}>
          {movie.genre.length && (
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {movie.genre[0].name}
            </Typography>
          )}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Length:{movie.runtime}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
