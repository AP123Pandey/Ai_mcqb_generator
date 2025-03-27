import React from "react";
import { View, Text, Button } from "react-native";

const CheatingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "red" }}>
        Cheating Detected!
      </Text>
      <Text style={{ marginTop: 10 }}>Your test has been submitted automatically.</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default CheatingScreen;
