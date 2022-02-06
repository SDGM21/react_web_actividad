import React, { useState, useEffect } from "react";
import Getgifs from "./services/Getgifs";
import "./App.css";

const App = () => {
  const [value, SetValue] = useState([]);

  useEffect(() => {
    Getgifs({keyword: prompt("¿Que desea buscar?")}).then((gifs) => SetValue(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <div>
          {value.map((singlegifs) => {
            return <img src={singlegifs} alt="gifs" />;
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
