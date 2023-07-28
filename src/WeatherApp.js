import React, { useState } from "react";
import { useForm } from "react-hook-form";
import WeatherProxy from "./WeatherProxy";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [wrongLoc, setWrongLoc] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSearch = async (value) => {
    if (value.city.trim() === "") return;
    const proxy = new WeatherProxy();
    const data = await proxy.getWeatherData(value.city);
    console.log(data);

    if (data) {
      setWeatherData(data);
      setWrongLoc(false);
    } else {
      setWrongLoc(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSearch)}>
        <div style={{ display: "flex", gap: 20, alignItems: "start" }}>
          <div>
            <input
              {...register("city", { required: true })}
              placeholder="Enter city name"
              style={{
                height: "30px",
                borderRadius: "8px",
                padding: "0px 10px",
              }}
            />
            {errors.city && (
              <div style={{ color: "red" }}>This field is required</div>
            )}
          </div>
          <input
            type="submit"
            value="Search"
            style={{
              height: "30px",
              borderRadius: "8px",
              padding: "0px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
              background: "#009933",
              cursor: "pointer",
            }}
          />
        </div>
      </form>

      {!wrongLoc ? (
        weatherData && (
          <div>
            <h2>{weatherData?.name}</h2>
            <p>Temperature: {weatherData?.main?.temp} °C</p>
            <p>Weather: {weatherData?.weather[0]?.main}</p>
          </div>
        )
      ) : (
        <h2 style={{ color: "red" }}>Please Enter Valid City</h2>
      )}
    </div>
  );
};

export default WeatherApp;
