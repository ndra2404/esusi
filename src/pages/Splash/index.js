import React, { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { BgsplashScreen } from "../../assets";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainApp");
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BgsplashScreen}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Please Wait</Text>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
});
