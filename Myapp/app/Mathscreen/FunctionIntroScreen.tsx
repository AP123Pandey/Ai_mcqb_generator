// import React from "react";
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const FunctionIntroScreen = () => {
//   const navigation = useNavigation();
//   const [selectedTopic, setSelectedTopic] = useState("");
//       const [difficulty, setDifficulty] = useState("easy");
//       const [mcqs, setMcqs] = useState([]);
//       const [loading, setLoading] = useState(false);

//       const generateMCQs = async () => {
//         if (!selectedTopic) {
//             alert("⚠️ Please select a topic.");
//             return;
//         }
    
//         setLoading(true);
//         console.log(`🔄 Generating MCQs for Topic: ${selectedTopic}, Difficulty: ${difficulty}`);
    
//         try {
            
    
//             // ✅ Generate new MCQs via API call
//             console.log(`🚀 Calling API: /generate-mcq/${selectedTopic}/${difficulty}`);
//             const generateResponse = await axios.get(`http://192.168.86.29:6000/generate-mcq/${selectedTopic}/${difficulty}`);
//             console.log("✅ MCQ Generation Response:", generateResponse.data);
    
    
//         } catch (error) {
//             console.error("❌ Error fetching MCQs:", error.message);
//         }
    
//         setLoading(false);
//     };
    
    
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Functions Intro 20</Text>
//       </View>

//       {/* Scroll View */}
//       <ScrollView>
//         <View style={styles.card}>
//           <Text style={styles.question}>What is the domain of the function shown in the mapping?</Text>
//         </View>
        
//         {/* Upgrade Section */}
//         <View style={styles.upgradeContainer}>
//           <Text style={styles.upgradeText}>Level up with Q+</Text>
//           <TouchableOpacity style={styles.upgradeButton}>
//             <Text style={styles.upgradeButtonText}>Upgrade now</Text>
//           </TouchableOpacity>
//         </View>
        
//         {/* Course Details */}
//         <View style={styles.detailsContainer}>
//           <Text style={styles.courseTitle}>Functions Intro 20</Text>
//           <Text style={styles.courseSubtitle}>dconsbruck | 20 terms</Text>
//         </View>
        
//         {/* Options */}
//         <TouchableOpacity 
//   style={styles.optionButton} 
//   onPress={() => navigation.navigate("Mathscreen/Flashcards")}
// >
//   <Text style={styles.optionText}>Flashcards</Text>
// </TouchableOpacity>
// <TouchableOpacity 
//   style={styles.optionButton} 
//   onPress={() => navigation.navigate("Mathscreen/Learning")}
// >
//   <Text style={styles.optionText}>Learn</Text>
// </TouchableOpacity>

// <TouchableOpacity 
//   style={styles.optionButton} 
//   onPress={() => navigation.navigate("Mathscreen/MatchingGame")}
// >
//   <Text style={styles.optionText}>Match</Text>
// </TouchableOpacity>

       


//         <TouchableOpacity style={styles.optionButton}
        
//          onPress={() => navigation.navigate("Mathscreen/TestScreen" , { topic: "Maths", difficulty: "easy" })}
//         ><Text style={styles.optionText}>Test-1</Text></TouchableOpacity>

// <TouchableOpacity
//   style={styles.optionButton}
//   onPress={() => {
//     console.log("🟢 Button Pressed! Setting Topic & Difficulty...");
//     setSelectedTopic("Percentage");
//     setDifficulty("easy");

//     setTimeout(() => {
//       console.log("📢 Triggering API Call...");
//       generateMCQs(); 
//       navigation.navigate("Mathscreen/TestScreen", { topic: "Percentage", difficulty: "easy" });
//     }, 300); // Small delay to let state update
//   }}
// >
//   <Text style={styles.optionText}>Test-2</Text>
// </TouchableOpacity>



//         <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}></Text></TouchableOpacity>
        
        
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#F8FAFC", paddingTop: 40 },
//   header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 20, marginBottom: 10 },
//   headerTitle: { fontSize: 24, fontWeight: "bold", marginLeft: 15 },
//   card: { backgroundColor: "#fff", padding: 20, margin: 20, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5 },
//   question: { fontSize: 18, fontWeight: "bold" },
//   upgradeContainer: { backgroundColor: "#2E2E5D", padding: 15, borderRadius: 10, marginHorizontal: 20, alignItems: "center" },
//   upgradeText: { color: "#fff", fontSize: 16 },
//   upgradeButton: { backgroundColor: "#FDD835", paddingVertical: 5, paddingHorizontal: 15, borderRadius: 5, marginTop: 5 },
//   upgradeButtonText: { fontSize: 14, fontWeight: "bold" },
//   detailsContainer: { padding: 20 },
//   courseTitle: { fontSize: 20, fontWeight: "bold" },
//   courseSubtitle: { color: "gray", fontSize: 14 },
//   optionButton: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginHorizontal: 20, marginBottom: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5 },
//   optionText: { fontSize: 16, fontWeight: "bold" },
//   newTag: { color: "blue", fontWeight: "bold" },
// });

// export default FunctionIntroScreen;






















































import React, { useState, useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Animated, 
  Dimensions, 
  ActivityIndicator,
  StatusBar 
} from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const COLORS = { 
  primary: '#6C63FF', 
  secondary: '#FF63A5', 
  gradient: { 
    start: '#8E2DE2', 
    end: '#4A00E0', 
  }, 
  background: '#F8F9FF', 
  white: '#FFFFFF', 
  text: { 
    primary: '#2D3436', 
    secondary: '#636E72', 
  }, 
  inactive: '#B2BEC3',
};

const FunctionIntroScreen = () => {
  const navigation = useNavigation();
  const [selectedTopic, setSelectedTopic] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [mcqs, setMcqs] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;
  
  // Animation for progress bar
  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"]
  });
  
  // Animation for spinner
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });
  
  useEffect(() => {
    // Animations when component mounts
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(progressAnim, {
        toValue: 65, // Example progress value
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    // Continuous spin animation for loading indicator
    if (loading) {
      Animated.loop(
        Animated.timing(spinAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        })
      ).start();
    } else {
      spinAnim.setValue(0);
    }
  }, [loading]);

  const generateMCQs = async () => {
    if (!selectedTopic) {
      // Use prettier alert UI instead of default alert
      setShowAlert({
        visible: true,
        message: "Please select a topic.",
        type: "warning"
      });
      return;
    }

    setLoading(true);
    console.log(`🔄 Generating MCQs for Topic: ${selectedTopic}, Difficulty: ${difficulty}`);

    try {
      // ✅ Generate new MCQs via API call
      console.log(`🚀 Calling API: /generate-mcq/${selectedTopic}/${difficulty}`);
      const generateResponse = await axios.get(`http://192.168.86.29:6000/generate-mcq/${selectedTopic}/${difficulty}`);
      console.log("✅ MCQ Generation Response:", generateResponse.data);
    } catch (error) {
      console.error("❌ Error fetching MCQs:", error.message);
      setShowAlert({
        visible: true,
        message: "Failed to generate questions. Please try again.",
        type: "error"
      });
    }

    setLoading(false);
  };

  // Custom alert state
  const [showAlert, setShowAlert] = useState({
    visible: false,
    message: "",
    type: "info"
  });

  const renderOptionButton = (text, iconName, destination, params = {}, animation = true) => {
    const buttonFadeAnim = useRef(new Animated.Value(0)).current;
    const buttonSlideAnim = useRef(new Animated.Value(20)).current;
    
    useEffect(() => {
      if (animation) {
        Animated.parallel([
          Animated.timing(buttonFadeAnim, {
            toValue: 1,
            duration: 600,
            delay: text.length * 50, // Staggered delay based on button index
            useNativeDriver: true,
          }),
          Animated.timing(buttonSlideAnim, {
            toValue: 0,
            duration: 600,
            delay: text.length * 50,
            useNativeDriver: true,
          }),
        ]).start();
      } else {
        buttonFadeAnim.setValue(1);
        buttonSlideAnim.setValue(0);
      }
    }, []);
    
    return (
      <Animated.View style={{
        opacity: buttonFadeAnim,
        transform: [{ translateY: buttonSlideAnim }],
      }}>
        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => {
            // Button press animation
            Animated.sequence([
              Animated.timing(scaleAnim, {
                toValue: 0.95,
                duration: 100,
                useNativeDriver: true,
              }),
              Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
              })
            ]).start();
            
            if (text === "Test-2") {
              setSelectedTopic("Percentage");
              setDifficulty("easy");
              setTimeout(() => {
                generateMCQs();
                navigation.navigate("Mathscreen/TestScreen", { topic: "Percentage", difficulty: "easy" });
              }, 300);
            } else if (destination) {
              navigation.navigate(destination, params);
            }
          }}
        >
          <LinearGradient
            colors={[COLORS.white, '#f0f2ff']}
            style={styles.optionGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.optionContent}>
              <FontAwesome5 name={iconName || "book"} size={20} color={COLORS.primary} style={styles.optionIcon} />
              <Text style={styles.optionText}>{text}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Ionicons name="chevron-forward" size={20} color={COLORS.primary} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Custom gradient header */}
      <LinearGradient
        colors={[COLORS.gradient.start, COLORS.gradient.end]}
        style={styles.headerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Functions Intro 20</Text>
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        
        {/* Progress stats */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>65% Complete</Text>
          <View style={styles.progressBarContainer}>
            <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
          </View>
        </View>
      </LinearGradient>

      {/* Scroll View with animated content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View 
          style={[
            styles.contentContainer,
            {
              opacity: fadeAnim,
              transform: [
                { translateY: slideAnim },
                { scale: scaleAnim }
              ]
            }
          ]}
        >
          {/* Featured question card */}
          <View style={styles.featuredCard}>
            <View style={styles.featuredHeader}>
              <MaterialCommunityIcons name="lightbulb-outline" size={24} color={COLORS.primary} />
              <Text style={styles.featuredHeaderText}>Featured Question</Text>
            </View>
            <Text style={styles.question}>What is the domain of the function shown in the mapping?</Text>
            <TouchableOpacity style={styles.startButton}>
              <LinearGradient
                colors={[COLORS.primary, COLORS.gradient.end]}
                style={styles.startButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.startButtonText}>Practice Now</Text>
                <Ionicons name="arrow-forward" size={18} color={COLORS.white} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          
          {/* Upgrade Section with gradient */}
          <LinearGradient
            colors={[COLORS.gradient.start, COLORS.gradient.end]}
            style={styles.upgradeContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            borderRadius={16}
          >
            {/* Premium badge */}
            <View style={styles.premiumBadge}>
              <MaterialCommunityIcons name="crown" size={16} color={COLORS.gradient.start} />
              <Text style={styles.premiumText}>PREMIUM</Text>
            </View>
            
            <Text style={styles.upgradeText}>Level up with +</Text>
            <Text style={styles.upgradeSubtext}>Unlock unlimited practice tests and personalized feedback</Text>
            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeButtonText}>Upgrade now</Text>
            </TouchableOpacity>
          </LinearGradient>
          
          {/* Course Details with cool icons */}
          <View style={styles.detailsContainer}>
            <Text style={styles.courseTitle}>Functions Intro 20</Text>
            <View style={styles.courseMetadata}>
              <View style={styles.metadataItem}>
                <Ionicons name="person" size={16} color={COLORS.text.secondary} />
                <Text style={styles.courseSubtitle}>dconsbruck</Text>
              </View>
              <View style={styles.metadataItem}>
                <Ionicons name="document-text" size={16} color={COLORS.text.secondary} />
                <Text style={styles.courseSubtitle}>20 terms</Text>
              </View>
              <View style={styles.metadataItem}>
                <Ionicons name="time" size={16} color={COLORS.text.secondary} />
                <Text style={styles.courseSubtitle}>15 min</Text>
              </View>
            </View>
          </View>
          
          {/* Study mode section */}
          <Text style={styles.sectionTitle}>Study Modes</Text>
          
          {/* Option Buttons with icons and animations */}
          {renderOptionButton("Flashcards", "clone", "Mathscreen/Flashcards")}
          {renderOptionButton("Learn", "graduation-cap", "Mathscreen/Learning")}
          {renderOptionButton("Match", "puzzle-piece", "Mathscreen/MatchingGame")}
          {renderOptionButton("Test-1", "edit", "Mathscreen/TestScreen", { topic: "Maths", difficulty: "easy" })}
          {renderOptionButton("Test-2", "brain", null)} {/* Special handling in the function */}
          
          {/* Recent activity section */}
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <View style={styles.activityHeader}>
              <Text style={styles.activityTitle}>Last Session</Text>
              <Text style={styles.activityDate}>Yesterday</Text>
            </View>
            <View style={styles.activityStats}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>85%</Text>
                <Text style={styles.statLabel}>Accuracy</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>12</Text>
                <Text style={styles.statLabel}>Questions</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>8 min</Text>
                <Text style={styles.statLabel}>Time</Text>
              </View>
            </View>
          </View>
          
          {/* Bottom spacing */}
          <View style={{ height: 20 }} />
        </Animated.View>
      </ScrollView>
      
      {/* Floating action button */}
      <TouchableOpacity style={styles.fab}>
        <LinearGradient
          colors={[COLORS.secondary, COLORS.primary]}
          style={styles.fabGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Ionicons name="play" size={24} color={COLORS.white} />
        </LinearGradient>
      </TouchableOpacity>
      
      {/* Custom alert dialog */}
      {showAlert.visible && (
        <View style={styles.alertOverlay}>
          <Animated.View 
            style={[styles.alertContainer, {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }]
            }]}
          >
            <View style={[styles.alertIcon, { backgroundColor: showAlert.type === "warning" ? "#FFC107" : "#FF5252" }]}>
              <Ionicons name={showAlert.type === "warning" ? "warning" : "close-circle"} size={28} color={COLORS.white} />
            </View>
            <Text style={styles.alertTitle}>{showAlert.type === "warning" ? "Warning" : "Error"}</Text>
            <Text style={styles.alertMessage}>{showAlert.message}</Text>
            <TouchableOpacity 
              style={styles.alertButton}
              onPress={() => setShowAlert({ ...showAlert, visible: false })}
            >
              <Text style={styles.alertButtonText}>OK</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
      
      {/* Loading overlay with built-in components instead of Lottie */}
      {loading && (
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingContainer}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <MaterialCommunityIcons name="loading" size={36} color={COLORS.primary} />
            </Animated.View>
            <Text style={styles.loadingText}>Generating questions...</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background, 
  },
  headerGradient: {
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 8,
    shadowColor: COLORS.gradient.start,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  header: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between",
    paddingHorizontal: 20, 
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: COLORS.white, 
  },
  progressContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  progressText: {
    color: COLORS.white,
    fontSize: 14,
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 3,
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 3,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  featuredCard: { 
    backgroundColor: COLORS.white, 
    padding: 20, 
    borderRadius: 16, 
    marginBottom: 20, 
    elevation: 4,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 8 
  },
  featuredHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featuredHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
    marginLeft: 8,
  },
  question: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: COLORS.text.primary,
    lineHeight: 26,
  },
  startButton: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  startButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  startButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginRight: 8,
  },
  upgradeContainer: { 
    padding: 24, 
    borderRadius: 16, 
    marginBottom: 20, 
    alignItems: "center",
    position: 'relative',
    overflow: 'hidden',
  },
  premiumBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  premiumText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.gradient.start,
    marginLeft: 4,
  },
  upgradeText: { 
    color: COLORS.white, 
    fontSize: 22,
    fontWeight: 'bold',
  },
  upgradeSubtext: {
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  upgradeButton: { 
    backgroundColor: COLORS.white, 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 30, 
    elevation: 4,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 8 
  },
  upgradeButtonText: { 
    fontSize: 16, 
    fontWeight: "bold",
    color: COLORS.gradient.start,
  },
  detailsContainer: { 
    padding: 0,
    marginBottom: 20,
  },
  courseTitle: { 
    fontSize: 24, 
    fontWeight: "bold",
    color: COLORS.text.primary,
    marginBottom: 8,
  },
  courseMetadata: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
  },
  courseSubtitle: { 
    color: COLORS.text.secondary, 
    fontSize: 14,
    marginLeft: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: COLORS.text.primary,
  },
  optionButton: { 
    marginBottom: 12, 
    borderRadius: 16, 
    overflow: 'hidden',
    elevation: 2,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
  },
  optionGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 16,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    marginRight: 12,
  },
  optionText: { 
    fontSize: 16, 
    fontWeight: "600",
    color: COLORS.text.primary,
  },
  arrowContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(108, 99, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  activityDate: {
    fontSize: 12,
    color: COLORS.text.secondary,
  },
  activityStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.text.secondary,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 30,
    elevation: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  fabGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  alertContainer: {
    width: width * 0.8,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  alertIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: COLORS.text.primary,
  },
  alertMessage: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.text.secondary,
    marginBottom: 24,
  },
  alertButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  alertButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loadingContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: COLORS.text.primary,
    fontWeight: '500',
  },
  newTag: { 
    color: COLORS.primary, 
    fontWeight: "bold", 
    marginLeft: 8,
    fontSize: 12,
    backgroundColor: 'rgba(108, 99, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});

export default FunctionIntroScreen;