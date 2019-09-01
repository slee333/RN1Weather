import React from 'react';

//import { StyleSheet, Text, View } from 'react-native';
import { Alert } from "react-native"
import Loading from "./loading";
import * as Location from "expo-location";
import axios from "axios";

//import Weather from "./weather";
const API_Key = "8ff35cefdde06eb3007a2148d773df31";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  // Create new function to get weather
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_Key}`
    ); 
    console.log(data);
  };

  getLocation = async () => {

    try {
      Location.requestPermissionsAsync();
      //const location = await Location.getCurrentPositionAsync();
      const { 
        coords: { latitude, longitude } 
      } = await Location.getCurrentPositionAsync();

      this.getWeather( latitude, longitude )
      this.setState({isLoading:false});
      
      // send to API and get weather!
    
    } catch (error) {
      Alert.alert("흑흑 어디에 있나요 그대", "너무너무슬퍼요!")
    };

  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }

};
