import axios from "axios";

const API_KEY = "611558fc95d2311bdfdec6813bb98028";
const BASE_URL_WEATHER = "https://api.openweathermap.org/data/2.5/weather";
const BASE_URL1_GEO = "http://api.openweathermap.org/geo/1.0/direct";

class WeatherProxy {
  constructor() {
    this.cache = new Map();
  }

  async getWeatherData(city) {
    if (this.cache.has(city)) {
      return this.cache.get(city);
    }

    try {
      const res = await axios.get(
        `${BASE_URL1_GEO}?q=${city}&appid=${API_KEY}`
      );
      if (res?.data?.length == 0) {
        return false;
      } else {
        const geoData = res?.data[0];
        const response = await axios.get(
          `${BASE_URL_WEATHER}?lat=${geoData?.lat}&lon=${geoData?.lon}&appid=${API_KEY}&&units=metric`
        );
        const data = response.data;
        this.cache.set(city, data);
        return data;
      }
    } catch (error) {
      return error;
    }
  }
}

export default WeatherProxy;
