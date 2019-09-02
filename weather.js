import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
//import { LinearGradient } from 'expo';

export default function Weather({ temp, condition }) {
  console.log(temp, condition)
  return (
    <View style={styles.container}>
      <Text> {temp} </Text>
    </View>

  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
    "Sand",
    "Dust",
    "Fog"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#55B3FF",
    justifyContent: "center",
    alignItems: "center"
  }
});
