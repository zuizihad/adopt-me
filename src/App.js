import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),

    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Harvanese",
    }),
    React.createElement(Pet, {
      name: "Papper",
      animal: "Bird",
      breed: "Cocktail",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
