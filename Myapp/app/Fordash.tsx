

// // import React from "react";
// // import { View, Text, ScrollView, TouchableOpacity } from "react-native";
// // import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
// // import { useNavigation } from "@react-navigation/native"; // Import navigation

// // const App = () => {
// //   const navigation = useNavigation(); // Get navigation instance

// //   return (
// //     <View style={{ flex: 1, backgroundColor: "#fff" }}>
// //       <ScrollView style={{ padding: 20 }}>
// //         {/* Study Sections */}
// //         {["Study for the JEE Main", "Study for the NEET"].map((title, index) => (
// //           <View
// //             key={index}
// //             style={{
// //               backgroundColor: "#F0F0F0",
// //               padding: 15,
// //               borderRadius: 10,
// //               marginBottom: 10,
// //               flexDirection: "row",
// //               alignItems: "center",
// //             }}
// //           >
// //             <MaterialIcons
// //               name="school"
// //               size={24}
// //               color="#2A4DFF"
// //               style={{ marginRight: 10 }}
// //             />
// //             <Text>{title}</Text>
// //           </View>
          
// //         ))}

// //         {/* Browse by Subject */}
// //         <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
// //           Browse by subject
// //         </Text>
// //         <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
// //           {[
// //             { name: "Languages", icon: "language" },
// //             { name: "Science", icon: "flask" },
// //             { name: "Arts and Hu...", icon: "paint-brush" },
// //             { name: "Maths", icon: "calculator", screen: "MathsScreen" }, // Add screen property
// //             { name: "Social science...", icon: "book" },
// //           ].map((item, index) => (
// //             <TouchableOpacity
// //               key={index}
// //               onPress={() => {
// //                 if (item.screen) {
// //                   navigation.navigate(item.screen);
// //                 }
// //               }}
// //               style={{
// //                 backgroundColor: "#F0F0F0",
// //                 padding: 15,
// //                 borderRadius: 10,
// //                 margin: 5,
// //                 flexBasis: "30%",
// //                 alignItems: "center",
// //               }}
// //             >
// //               <FontAwesome name={item.icon} size={24} color="#2A4DFF" />
// //               <Text style={{ marginTop: 5 }}>{item.name}</Text>
// //             </TouchableOpacity>
// //           ))}
// //         </View>
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // export default App;


// import React from "react";
// import { View, Text, ScrollView, TouchableOpacity } from "react-native";
// import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native"; // Import navigation

// const App = () => {
//   const navigation = useNavigation(); // Get navigation instance

//   return (
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       <ScrollView style={{ padding: 20 }}>
//         {/* Study Sections */}
//         {[
//           { title: "Study for the for Aptitude", screen: "Noscreen" },
//           { title: "Test for the Aptitude", screen: "TestScreenAptitude" },
//         ].map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             onPress={() => navigation.navigate(item.screen)}
//             style={{
//               backgroundColor: "#F0F0F0",
//               padding: 15,
//               borderRadius: 10,
//               marginBottom: 10,
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//           >
//             <MaterialIcons
//               name="school"
//               size={24}
//               color="#2A4DFF"
//               style={{ marginRight: 10 }}
//             />
//             <Text>{item.title}</Text>
//           </TouchableOpacity>
//         ))}

//         {/* Browse by Subject */}
//         <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
//           Browse by subject
//         </Text>
//         <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
//           {[
//             { name: "Languages", icon: "language" },
//             { name: "Reasoning", icon: "flask" },
//             { name: "DSA", icon: "paint-brush" },
//             { name: "Maths", icon: "calculator", screen: "MathsScreen" }, 
//             { name: "Java", icon: "book" },
//           ].map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => {
//                 if (item.screen) {
//                   navigation.navigate(item.screen);
//                 }
//               }}
//               style={{
//                 backgroundColor: "#F0F0F0",
//                 padding: 15,
//                 borderRadius: 10,
//                 margin: 5,
//                 flexBasis: "30%",
//                 alignItems: "center",
//               }}
//             >
//               <FontAwesome name={item.icon} size={24} color="#2A4DFF" />
//               <Text style={{ marginTop: 5, textAlign: "center" }}>{item.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default App;

import React, { useRef, useEffect } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Animated, 
  StyleSheet, 
  Dimensions, 
  StatusBar,
  ImageBackground
} from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import * as Haptics from "expo-haptics";

const { width } = Dimensions.get("window");

// Color scheme
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

const App = () => {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const studyButtonsAnimation = useRef(new Animated.Value(0)).current;
  
  // Animated values for each subject button
  const subjectAnimations = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current
  ];
  
  useEffect(() => {
    // First animate the study buttons
    Animated.timing(studyButtonsAnimation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
    
    // Then animate each subject button with delay
    subjectAnimations.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 500,
        delay: 800 + (index * 100), // Staggered delay
        useNativeDriver: true,
      }).start();
    });
  }, []);

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [0, 0.5, 1],
    extrapolate: 'clamp',
  });

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [-30, 0],
    extrapolate: 'clamp',
  });

  const renderGradientText = (text, style) => {
    return (
      <MaskedView
        maskElement={<Text style={[style, styles.gradientText]}>{text}</Text>}
      >
        <LinearGradient
          colors={[COLORS.gradient.start, COLORS.gradient.end]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={[style, styles.gradientText, { opacity: 0 }]}>{text}</Text>
        </LinearGradient>
      </MaskedView>
    );
  };

  const handleCardPress = (screen) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (screen && screen !== "Noscreen") {
      navigation.navigate(screen);
    }
  };

  const studyOptions = [
    { 
      title: "Study for Aptitude", 
      screen: "Noscreen", 
      icon: "book-open", 
      iconType: "Feather",
      description: "Comprehensive study materials and guides"
    },
    { 
      title: "Test Your Aptitude", 
      screen: "TestScreenAptitude", 
      icon: "clipboard-check", 
      iconType: "MaterialCommunityIcons",
      description: "Practice tests and evaluations"
    },
  ];

  const subjects = [
    { name: "Languages", icon: "language", color: "#FF63A5", screen: "LanguagesScreen" },
    { name: "Reasoning", icon: "flask", color: "#63C2FF", screen: "ReasoningScreen" },
    { name: "DSA", icon: "code", color: "#63FF8E", screen: "DSAScreen" },
    { name: "Maths", icon: "calculator", color: "#FFB563", screen: "MathsScreen" }, 
    { name: "Java", icon: "coffee", color: "#E363FF", screen: "JavaScreen" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      {/* Animated Header */}
      <Animated.View style={[
        styles.header,
        { 
          opacity: headerOpacity,
          transform: [{ translateY: headerTranslate }]
        }
      ]}>
        <LinearGradient
          colors={[COLORS.gradient.start, COLORS.gradient.end]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.headerGradient}
        >
          <Text style={styles.headerText}>Educational Hub</Text>
        </LinearGradient>
      </Animated.View>
      
      <Animated.ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          {renderGradientText("Welcome to Learning Hub", styles.welcomeTitle)}
          <Text style={styles.welcomeSubtitle}>Expand your knowledge with interactive study materials</Text>
        </View>
        
        {/* Study Options */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Study Options</Text>
          
          {studyOptions.map((item, index) => (
            <Animated.View
              key={index}
              style={{
                opacity: studyButtonsAnimation,
                transform: [
                  { translateY: studyButtonsAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0]
                  })}
                ]
              }}
            >
              <TouchableOpacity
                onPress={() => handleCardPress(item.screen)}
                activeOpacity={0.7}
              >
                <LinearGradient
                  colors={[COLORS.white, COLORS.background]}
                  style={styles.studyCard}
                >
                  <View style={[styles.iconContainer, { backgroundColor: COLORS.primary }]}>
                    <MaterialIcons name="school" size={24} color={COLORS.white} />
                  </View>
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardDescription}>{item.description}</Text>
                  </View>
                  <MaterialIcons name="arrow-forward-ios" size={16} color={COLORS.text.secondary} />
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
        
        {/* Browse by Subject */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Browse by Subject</Text>
          
          <View style={styles.subjectsGrid}>
            {subjects.map((item, index) => (
              <Animated.View
                key={index}
                style={{
                  opacity: subjectAnimations[index],
                  transform: [
                    { scale: subjectAnimations[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1]
                    })},
                    { translateY: subjectAnimations[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0]
                    })}
                  ]
                }}
              >
                <TouchableOpacity
                  onPress={() => handleCardPress(item.screen)}
                  style={[styles.subjectButton]}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={[`${item.color}40`, `${item.color}15`]} // Adding alpha for lighter gradient
                    style={styles.subjectGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <View style={[styles.subjectIconContainer, { backgroundColor: item.color }]}>
                      <FontAwesome name={item.icon} size={22} color={COLORS.white} />
                    </View>
                    <Text style={styles.subjectName}>{item.name}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </View>
        
        {/* Featured Content */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Featured Content</Text>
          
          <Animated.View
            style={{
              opacity: studyButtonsAnimation,
              transform: [
                { translateY: studyButtonsAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0]
                })}
              ]
            }}
          >
            <TouchableOpacity
              onPress={() => handleCardPress("FeaturedContent")}
              activeOpacity={0.9}
            >
              <ImageBackground
                source={{ uri: "https://via.placeholder.com/400x200" }}
                style={styles.featuredCard}
                imageStyle={{ borderRadius: 16 }}
              >
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.8)']}
                  style={styles.featuredGradient}
                >
                  <View style={styles.featuredContent}>
                    <Text style={styles.featuredTitle}>Advanced Problem Solving</Text>
                    <Text style={styles.featuredSubtitle}>Master techniques for complex problems</Text>
                    <View style={styles.featuredButton}>
                      <Text style={styles.featuredButtonText}>Get Started</Text>
                    </View>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          </Animated.View>
        </View>
        
        {/* Progress Tracker */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Your Progress</Text>
          
          <Animated.View
            style={{
              opacity: studyButtonsAnimation,
              transform: [
                { translateY: studyButtonsAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0]
                })}
              ]
            }}
          >
            <LinearGradient
              colors={[COLORS.white, COLORS.background]}
              style={styles.progressCard}
            >
              <View style={styles.progressHeader}>
                <Text style={styles.progressTitle}>Weekly Learning Goal</Text>
                <Text style={styles.progressSubtitle}>4 of 7 days completed</Text>
              </View>
              
              <View style={styles.progressBarContainer}>
                <View style={styles.progressBarBackground}>
                  <View style={[styles.progressBarFill, { width: '57%' }]} />
                </View>
                <Text style={styles.progressPercentage}>57%</Text>
              </View>
              
              <View style={styles.progressDaysContainer}>
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                  <View 
                    key={index} 
                    style={[
                      styles.progressDay, 
                      { backgroundColor: index < 4 ? COLORS.primary : COLORS.inactive + '40' }
                    ]}
                  >
                    <Text style={[
                      styles.progressDayText, 
                      { color: index < 4 ? COLORS.white : COLORS.text.secondary }
                    ]}>
                      {day}
                    </Text>
                  </View>
                ))}
              </View>
            </LinearGradient>
          </Animated.View>
        </View>
        
        {/* Recommended Courses */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Recommended</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recommendedScrollContent}
          >
            {[
              { title: "Advanced Java", category: "Programming", progress: 35, image: "https://via.placeholder.com/180x120" },
              { title: "Data Structures", category: "Computer Science", progress: 68, image: "https://via.placeholder.com/180x120" },
              { title: "Calculus", category: "Mathematics", progress: 12, image: "https://via.placeholder.com/180x120" }
            ].map((course, index) => (
              <Animated.View
                key={index}
                style={{
                  opacity: subjectAnimations[index % 5],
                  transform: [
                    { translateX: subjectAnimations[index % 5].interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0]
                    })}
                  ]
                }}
              >
                <TouchableOpacity
                  style={styles.recommendedCard}
                  activeOpacity={0.9}
                  onPress={() => handleCardPress("CourseDetails")}
                >
                  <ImageBackground
                    source={{ uri: course.image }}
                    style={styles.recommendedImage}
                    imageStyle={{ borderRadius: 12 }}
                  >
                    <LinearGradient
                      colors={['transparent', 'rgba(0,0,0,0.7)']}
                      style={styles.recommendedGradient}
                    >
                      <Text style={styles.courseCategory}>{course.category}</Text>
                    </LinearGradient>
                  </ImageBackground>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <View style={styles.courseProgressContainer}>
                    <View style={styles.courseProgressBar}>
                      <View style={[styles.courseProgressFill, { width: `${course.progress}%` }]} />
                    </View>
                    <Text style={styles.courseProgressText}>{course.progress}%</Text>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            ))}
            </ScrollView>
        </View>
        
        {/* Study Goals */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Study Goals</Text>
          
          <Animated.View
            style={{
              opacity: studyButtonsAnimation,
              transform: [
                { translateY: studyButtonsAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0]
                })}
              ]
            }}
          >
            <LinearGradient
              colors={[COLORS.white, COLORS.background]}
              style={styles.goalsCard}
            >
              <View style={styles.goalItem}>
                <View style={styles.goalIconContainer}>
                  <MaterialIcons name="timer" size={22} color={COLORS.primary} />
                </View>
                <View style={styles.goalContent}>
                  <Text style={styles.goalTitle}>Study Time</Text>
                  <Text style={styles.goalSubtitle}>2 hours / day</Text>
                </View>
                <View style={[styles.goalBadge, { backgroundColor: COLORS.primary + '20' }]}>
                  <Text style={[styles.goalBadgeText, { color: COLORS.primary }]}>85%</Text>
                </View>
              </View>
              
              <View style={styles.goalDivider} />
              
              <View style={styles.goalItem}>
                <View style={styles.goalIconContainer}>
                  <MaterialIcons name="assignment-turned-in" size={22} color="#FF9500" />
                </View>
                <View style={styles.goalContent}>
                  <Text style={styles.goalTitle}>Practice Tests</Text>
                  <Text style={styles.goalSubtitle}>3 tests / week</Text>
                </View>
                <View style={[styles.goalBadge, { backgroundColor: '#FF9500' + '20' }]}>
                  <Text style={[styles.goalBadgeText, { color: '#FF9500' }]}>60%</Text>
                </View>
              </View>
              
              <TouchableOpacity style={styles.addGoalButton}>
                <Text style={styles.addGoalText}>Add New Goal</Text>
                <MaterialIcons name="add-circle-outline" size={18} color={COLORS.primary} />
              </TouchableOpacity>
            </LinearGradient>
          </Animated.View>
        </View>
        
        {/* Recent Activity */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {[
            { title: "Completed Java Quiz", time: "2 hours ago", icon: "check-circle", color: "#4CD964" },
            { title: "Started DSA Course", time: "Yesterday", icon: "play-circle", color: COLORS.primary },
            { title: "Bookmarked Calculus Notes", time: "2 days ago", icon: "bookmark", color: "#FF9500" }
          ].map((activity, index) => (
            <Animated.View
              key={index}
              style={{
                opacity: studyButtonsAnimation,
                transform: [
                  { translateY: studyButtonsAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0]
                  })}
                ]
              }}
            >
              <View style={styles.activityItem}>
                <View style={[styles.activityIconContainer, { backgroundColor: activity.color + '15' }]}>
                  <FontAwesome name={activity.icon} size={18} color={activity.color} />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
              </View>
            </Animated.View>
          ))}
        </View>
        
        {/* Bottom padding for scrolling */}
        <View style={{ height: 80 }} />
      </Animated.ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: 90,
    paddingTop: StatusBar.currentHeight || 40,
  },
  headerGradient: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
  },
  scrollView: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 40,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
  },
  welcomeSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: COLORS.text.primary,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: COLORS.text.secondary,
    lineHeight: 22,
  },
  gradientText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text.primary,
    marginBottom: 16,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  studyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: COLORS.text.secondary,
  },
  subjectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  subjectButton: {
    width: (width - 52) / 2,
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: COLORS.text.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  subjectGradient: {
    padding: 20,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  subjectIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subjectName: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text.primary,
    textAlign: 'center',
  },
  featuredCard: {
    height: 180,
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 8,
  },
  featuredGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  featuredContent: {
    width: '100%',
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  featuredSubtitle: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.8,
    marginBottom: 12,
  },
  featuredButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  featuredButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
  progressCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: COLORS.text.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  progressHeader: {
    marginBottom: 12,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: 2,
  },
  progressSubtitle: {
    fontSize: 13,
    color: COLORS.text.secondary,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: COLORS.inactive + '40',
    borderRadius: 4,
    marginRight: 12,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
  progressDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressDay: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressDayText: {
    fontSize: 14,
    fontWeight: '600',
  },
  recommendedScrollContent: {
    paddingBottom: 10,
    paddingRight: 20,
  },
  recommendedCard: {
    width: 160,
    marginRight: 12,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    shadowColor: COLORS.text.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  recommendedImage: {
    height: 100,
    width: '100%',
  },
  recommendedGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 8,
  },
  courseCategory: {
    color: COLORS.white,
    fontSize: 12,
    opacity: 0.9,
    fontWeight: '500',
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text.primary,
    margin: 10,
    marginBottom: 5,
  },
  courseProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  courseProgressBar: {
    flex: 1,
    height: 4,
    backgroundColor: COLORS.inactive + '40',
    borderRadius: 2,
    marginRight: 8,
    overflow: 'hidden',
  },
  courseProgressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
  courseProgressText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.text.secondary,
  },
  goalsCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: COLORS.text.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  goalIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  goalContent: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text.primary,
  },
  goalSubtitle: {
    fontSize: 13,
    color: COLORS.text.secondary,
  },
  goalBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  goalBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  goalDivider: {
    height: 1,
    backgroundColor: COLORS.inactive + '30',
    marginVertical: 12,
  },
  addGoalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 8,
  },
  addGoalText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 14,
    marginRight: 4,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  activityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inactive + '20',
    paddingBottom: 16,
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.text.primary,
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: COLORS.text.secondary,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: COLORS.text.primary,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default App;