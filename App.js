import React from "react";

//import { StyleSheet, Text, View } from 'react-native';

// Importing all necessary components
import {
  Alert
} from "react-native";
import Loading from "./loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

// API key for weather API
const API_Key = "8ff35cefdde06eb3007a2148d773df31";

export default class extends React.Component {
  // Initialize state. set isLoading as true. Cuz at this point we are loading data indeed :)
  state = {
    isLoading: true
  };

  // Create new function to get weather. Use axios to get data from an API
  getWeather = async (latitude, longitude) => {
    const {
      data: { main: { temp }, weather } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_Key}&units=metric`
    );

    // After getting weather, store all the data in state. Set isloading: false
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };

  // Function to get your location.
  getLocation = async () => {
    try {
      // Get permission to get user location
      Location.requestPermissionsAsync();
      // After permission, get lat and lon
      const {
        coords: {
          latitude,
          longitude
        }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      // When you cannot get the location O<-<
      Alert.alert("흑흑 어디에 있나요 그대", "날씨를 구할 수 없어요!!");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {
      isLoading,
      temp,
      condition
    } = this.state;
    
    // How to put temperature @ weather? We use state! Data.main.temp we need.
    return isLoading ? ( <Loading />) :  (<Weather temp = { Math.round(temp) } condition={condition}/> );
  }
}