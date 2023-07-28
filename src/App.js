import React from "react";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "50px",
          width: "650px",
          height: "300px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          textAlign: "center",
        }}
      >
        <h1>
          Weather App using <span style={{ color: "red" }}>Proxy</span> Design
          Pattern
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <WeatherApp />
        </div>
      </div>
    </div>
  );
}

export default App;
