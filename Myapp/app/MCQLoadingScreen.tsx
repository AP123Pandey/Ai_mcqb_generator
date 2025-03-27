import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MCQLoadingScreen = () => {
  const navigation = useNavigation();
  const [mcqData, setMcqData] = useState(null);

  useEffect(() => {
    const fetchMCQs = async () => {
      try {
        const response = await fetch("http://192.168.86.29:6000/get-mcqs");

        // ✅ Check Content-Type before parsing JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.error("❌ Invalid response type:", contentType);
          const text = await response.text(); 
          console.error("❌ API Response (Not JSON):", text);
          return;
        }

        const data = await response.json();
        console.log("✅ MCQ Response:", data);

        if (data.success && data.mcqs.length > 0) {
          setMcqData(data.mcqs);
          navigation.replace("MCQTestScreen", { mcqData: data.mcqs });
        } else {
          setTimeout(fetchMCQs, 5000); // Retry after 5s
        }
      } catch (error) {
        console.error("❌ Error fetching MCQs:", error);
      }
    };

    fetchMCQs();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Generating MCQs...</Text>
      <ActivityIndicator size="large" color="#8a56ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  text: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
});

export default MCQLoadingScreen;
