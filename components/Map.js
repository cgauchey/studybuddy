import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const theMap = () => (
  <MapView
    style={styles.container}
    initialRegion={{
      latitude: 40.8075,
      longitude: -73.9626,
      latitudeDelta: 0.02,
      longitudeDelta: 0.009
    }}
  >
    <Marker
      coordinate={{
        latitude: 40.8064,
        longitude: -73.9632,
        latitudeDelta: 0.02,
        longitudeDelta: 0.009
      }}
      title="Butler Library"
    />

    <Marker
      coordinate={{
        latitude: 40.8083,
        longitude: -73.961,
        latitudeDelta: 0.02,
        longitudeDelta: 0.009
      }}
      title="Avery Architectural and Fine Arts Library"
    />

    <Marker
      coordinate={{
        latitude: 40.8089,
        longitude: -73.9614,
        latitudeDelta: 0.02,
        longitudeDelta: 0.009
      }}
      title="Business and Economics Library"
    />

    <Marker
      coordinate={{
        latitude: 40.8101,
        longitude: -73.962,
        latitudeDelta: 0.02,
        longitudeDelta: 0.009
      }}
      title="NOCO"
    />
  </MapView>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default theMap;
