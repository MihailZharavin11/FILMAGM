import { Card } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMenu } from "../CardMenu";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "$:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

export const MovieCard = () => {
  return (
    <Card sx={{ width: 210, position: "relative" }}>
      <CardMenu />
      <CardMedia
        component="img"
        height="250"
        image="https://www.themoviedb.org/t/p/w220_and_h330_face/69loIrm9JPpPRE3Akw4yRoitSYn.jpg"
        alt="Paella dish"
      />
      <CardInfo>
        <Typography variant="h5" gutterBottom component="div">
          The last of us
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Apr 2011
        </Typography>
      </CardInfo>
    </Card>
  );
};
