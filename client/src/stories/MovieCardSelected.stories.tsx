import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieCardSelected } from "../components";
import { moviesData } from "./stub";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card/Movie Card Selected",
  component: MovieCardSelected,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MovieCardSelected>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieCardSelected> = (args) => (
  <MovieCardSelected {...args} />
);

export const SelectedMovie = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SelectedMovie.args = {
  movie: moviesData[0],
};
