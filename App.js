import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up app.js to start working on your app!</Text>
      <ImageViewer placeholderImageSource={PlaceholderImage} />
      <View styles={styles.footerContainer}>
        <Button label="Choose a photo" theme={"primary"} />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
