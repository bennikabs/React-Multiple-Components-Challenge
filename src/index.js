import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Cities from "./Cities";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h3>Challenge 1</h3>
      <p>
        Create a new component called Header included in Cities, rendering "The
        list of cities is:" and include it at the top of all cities.
        <Cities />
      </p>
      <br />
      <h3>Challenge 2</h3>
      <p>
        Create a new component called Footer included in Cities, rendering
        "Contact us to add more cities" and include it at the Bottom of all
        cities.
      </p>
      <Cities />
    </div>
  </StrictMode>
);
