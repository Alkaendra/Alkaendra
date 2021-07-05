import React from "react";
import SpeciesList from "./components/species-list/species-list";
import Species from "./components/species/species";

export default [
  {
    routeProps: {
      path: "/species/:speciesId",
      component: Species,
    },
    name: "Species",
  },
  {
    routeProps: {
      path: "/species",
      component: SpeciesList,
    },
    name: "Species List",
  },
];
