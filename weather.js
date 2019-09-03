import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    weatherText: "주식시장에서 상투는\n맑은 하늘에 천둥번개 치듯 온다.\n",
    bgColor: ["#0f0c29", "#302b63", "#24243e"], //
  },
  Clouds: {
    iconName: "weather-cloudy",
    weatherText: "인생은 바람이고\n구름인 것을.\n",
    bgColor: ["#536976", "#292E49"], //
  },
  Haze: {
    iconName: "weather-hail",
    weatherText: "집먼지 스모그.\n호흡기 질환의 원인입니다.\n",
    bgColor: ["#16222A", "#3a6073"], //
  },
  Clear: {
    iconName: "weather-sunny",
    weatherText: "아침아침햇살\n아침 - 햇살.\n",
    bgColor: ["#1FA2FF", "#12D8FA", "#A6FFCB"], //
  },
  Rain: {
    iconName: "weather-pouring",
    weatherText: "비가 오는 날엔\n난 항상 널 그리워해.\n",
    bgColor: ["#4c669f", "#3b5998", "#192f6a"],//
  },
  Snow: {
    iconName: "weather-snowy",
    weatherText: "눈이 올까요\n우리 자는 동안에.\n",
    bgColor: ["#757F9A", "#d7dde8"],//
  },
  Fog: {
    iconName: "weather-fog",
    weatherText: "오늘 피었다 지는 이름 없는 꽃과 같네\n바다에 이는 파도 안개와 같지만.\n",
    bgColor: ["#403B4A", "#E7E9BB"], //
  },
  Drizzle: {
    iconName: "weather-rainy",
    weatherText: "추적추적\n비는 내리고.\n",
    bgColor: ["#1488CC", "#2B32B2"], //
  },
  Dust: {
    iconName: "blackberry",
    weatherText: "미 세 먼 지\n지 먼 세 미\n",
    bgColor: ["#6D6027", "#D3CBB8"], //
  }
};

export default function Weather({ temp, condition }) {
  //console.log(temp, condition);
  return (
    <LinearGradient
      colors={weatherOptions[condition].bgColor}
      style={styles.container}
    >
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={144}
          color="white"
        />
        <Text style={styles.temp}>{temp} °C</Text>
      </View>
      <View style={styles.halfcontainer}>
        <Text style={styles.caption}>
          {weatherOptions[condition].weatherText}
        </Text>
      </View>
    </LinearGradient>
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
    "Dust",
    "Fog"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 38,
    color: "white"
  },
  caption: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    paddingTop: 24,
  }
});
