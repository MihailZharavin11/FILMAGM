import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieCard } from "../components";
import { moviesData } from "./stub";

export default {
  title: "Card/Movie Card",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const Card = Template.bind({});

Card.args = {
  movie: moviesData[0],
};
