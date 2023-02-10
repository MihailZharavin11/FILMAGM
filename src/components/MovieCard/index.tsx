import { Card, MenuItem } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMenu } from "../CardMenu";
import { Movie } from "../types";

type MovieCardProps = {
  movie: Movie;
  onCardSelect: () => void;
};

const CardInfo = styled(CardContent)(({ theme }) => ({
  "$:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onCardSelect,
}) => {
  return (
    <Card sx={{ width: 210, position: "relative" }}>
      <CardMenu>
        <MenuItem onClick={() => {}}>Add</MenuItem>
      </CardMenu>
      <CardMedia
        component="img"
        height="250"
        image={movie.image}
        alt={movie.title}
      />
      <CardInfo>
        <Typography variant="h5" gutterBottom component="div">
          {movie.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {new Date(movie.releaseDate).toString()}
        </Typography>
      </CardInfo>
    </Card>
  );
};
