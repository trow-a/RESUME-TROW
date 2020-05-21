const themes = [
  
  {
    name: "Theme1",
    bgPrimary: "white",
    textPrimary: "black",
  },
  {
    name: "theme2",
    bgPrimary: "black",
    textPrimary: "white",
  },
  {
    name: "theme3",
    bgPrimary: "purple",
    textPrimary: "black",
  },
  {
    name: "theme4",
    bgPrimary: "brown",
    textPrimary: "white",
  },

  {
    name: "theme5",
    bgPrimary: "silver",
    textPrimary: "maroon",
  },
  
];

export const getThemes = () => {
  return themes.map((theme) => {
    console.log(themes);
    return {
      name: theme.name,
      bgPrimary: theme.bgPrimary,
      textPrimary: theme.textPrimary,
    };
  });
};
