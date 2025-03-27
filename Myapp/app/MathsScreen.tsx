
// // import React, { useState } from "react";
// // import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";
// // import { useNavigation } from "@react-navigation/native";


// // const MathsScreen = () => {
// //   const navigation = useNavigation();

  
// //   const [selectedTab, setSelectedTab] = useState("Algebra");

// //   const tabs = ["Algebra", "Arithmetic", "Applied Maths"];

// //   const data = {
// //     Algebra: [
// //       { title: "ASVAB Math", terms: "60 terms", user: "Sharon_Mikesell" },
// //       { title: "Functions Intro 20", terms: "20 terms", user: "dconsbruck" },
// //       { title: "R. Point-Slope Form of a Line", terms: "20 terms", user: "Lisa_Williamson65" },
// //       { title: "Area and Perimeter", terms: "17 terms", user: "Lisa_Williamson65" },
// //     ],
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Ionicons name="arrow-back" size={24} color="black" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerText}>Maths</Text>
// //       </View>

// //       {/* Tabs */}
// //       <View style={styles.tabContainer}>
// //         {tabs.map((tab) => (
// //           <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)} style={styles.tab}>
// //             <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
// //             {selectedTab === tab && <View style={styles.activeTabIndicator} />}
// //           </TouchableOpacity>
// //         ))}
// //       </View>

// //       {/* List of Topics */}
// //       <ScrollView style={styles.scrollContainer}>
// //         {data[selectedTab].map((item, index) => (
// //           <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate("ASVABMathScreen")}>
// //             <Text style={styles.cardTitle}>{item.title}</Text>
// //             <Text style={styles.cardText}>{item.terms}</Text>
// //             <Text style={styles.cardUser}>👤 {item.user}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // // Styles
// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#F8FAFC", paddingTop: 40 },
// //   header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 20, marginBottom: 10 },
// //   headerText: { fontSize: 24, fontWeight: "bold", marginLeft: 15 },
// //   tabContainer: { flexDirection: "row", justifyContent: "center", marginBottom: 10 },
// //   tab: { marginHorizontal: 10 },
// //   tabText: { fontSize: 16, color: "gray" },
// //   activeTabText: { fontWeight: "bold", color: "black" },
// //   activeTabIndicator: { height: 2, backgroundColor: "blue", marginTop: 2 },
// //   scrollContainer: { paddingHorizontal: 20 },
// //   card: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 10, shadowOpacity: 0.1, shadowRadius: 5 },
// //   cardTitle: { fontSize: 16, fontWeight: "bold" },
// //   cardText: { color: "gray" },
// //   cardUser: { marginTop: 5, fontWeight: "500" },
// // });

// // export default MathsScreen;



// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, ScrollView } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// const MathsScreen = () => {
//   const navigation = useNavigation();
//   const [selectedTab, setSelectedTab] = useState("Algebra");

//   const tabs = ["Algebra", "Arithmetic", "Applied Maths"];

//   const data = {
//     Algebra: [
//       { title: "ASVAB Math", terms: "60 terms", user: "Sharon_Mikesell" },
//       { title: "Functions Intro 20", terms: "20 terms", user: "dconsbruck" },
//       { title: "R. Point-Slope Form of a Line (problems with answers)", terms: "20 terms", user: "Lisa_Williamson65" },
//       { title: "Area and perimeter, Area and Perimeter", terms: "17 terms", user: "Lisa_Williamson65" },
//     ],
//     Arithmetic: [
//       { title: "Math", terms: "60 terms", user: "Sharon_Mikesell" },
//       { title: "Functions Intro 20", terms: "20 terms", user: "dconsbruck" },
//       { title: "R. Point-Slope Form of a Line (problems with answers)", terms: "20 terms", user: "Lisa_Williamson65" },
//     ],
//     "Applied Maths": [
//       { title: "Advance Math", terms: "60 terms", user: "Sharon_Mikesell" },
//       { title: "Functions Intro 20", terms: "20 terms", user: "dconsbruck" },
//       { title: "R. Point-Slope Form of a Line (problems with answers)", terms: "20 terms", user: "Lisa_Williamson65" },
//     ],
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "#F8FAFC", paddingTop: 40 }}>
//       {/* Header with Back Button */}
//       <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, marginBottom: 10 }}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text style={{ fontSize: 24, fontWeight: "bold", marginLeft: 15 }}>Maths</Text>
//       </View>

//       {/* Tab Navigation */}
//       <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
//         {tabs.map((tab) => (
//           <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)} style={{ marginHorizontal: 10 }}>
//             <Text style={{ fontSize: 16, fontWeight: selectedTab === tab ? "bold" : "normal", color: selectedTab === tab ? "black" : "gray" }}>
//               {tab}
//             </Text>
//             {selectedTab === tab && <View style={{ height: 2, backgroundColor: "blue", marginTop: 2 }} />}
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* List of Topics */}
//       <ScrollView style={{ paddingHorizontal: 20 }}>
//         {data[selectedTab].map((item, index) => (
//          <TouchableOpacity
//          key={index}
//          style={{
//            backgroundColor: "#fff",
//            padding: 15,
//            borderRadius: 10,
//            marginBottom: 10,
//            shadowColor: "#000",
//            shadowOpacity: 0.1,
//            shadowRadius: 5,
//          }}
//          onPress={() => {
//            if (item.title === "ASVAB Math") {
//              navigation.navigate("Mathscreen/ASVABMathScreen");
//            } else if (item.title === "Functions Intro 20") {
//              navigation.navigate("Mathscreen/FunctionIntroScreen");
//            }
//          }}
//        >
//          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
//          <Text style={{ color: "gray" }}>{item.terms}</Text>
//          <Text style={{ marginTop: 5, fontWeight: "500" }}>👤 {item.user}</Text>
//        </TouchableOpacity>
       
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default MathsScreen;


import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  Animated, 
  Dimensions, 
  StatusBar,
  Image
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

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

const { width } = Dimensions.get('window');

const MathsScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Algebra");
  const scrollY = new Animated.Value(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const tabs = ["Algebra", "Arithmetic", "Applied Maths"];

  const data = {
    Algebra: [
      { 
        title: "ASVAB Math", 
        terms: "60 terms", 
        user: "Sharon_Mikesell", 
        icon: "function-variant", 
        color: COLORS.primary,
        progress: 75
      },
      { 
        title: "Functions Intro 20", 
        terms: "20 terms", 
        user: "dconsbruck", 
        icon: "math-integral", 
        color: COLORS.secondary,
        progress: 30
      },
      { 
        title: "Point-Slope Form of a Line", 
        terms: "20 terms", 
        user: "Lisa_Williamson65", 
        icon: "chart-line", 
        color: "#4ECDC4",
        progress: 90
      },
      { 
        title: "Area and Perimeter", 
        terms: "17 terms", 
        user: "Lisa_Williamson65", 
        icon: "math-compass", 
        color: "#FF9F43",
        progress: 45
      },
    ],
    Arithmetic: [
      { 
        title: "Math Fundamentals", 
        terms: "60 terms", 
        user: "Sharon_Mikesell", 
        icon: "calculator", 
        color: "#FF6B6B",
        progress: 60
      },
      { 
        title: "Functions Intro 20", 
        terms: "20 terms", 
        user: "dconsbruck", 
        icon: "function", 
        color: "#A5B4FC",
        progress: 25
      },
      { 
        title: "Linear Equations", 
        terms: "20 terms", 
        user: "Lisa_Williamson65", 
        icon: "equal", 
        color: "#10B981",
        progress: 85
      },
    ],
    "Applied Maths": [
      { 
        title: "Advanced Math", 
        terms: "60 terms", 
        user: "Sharon_Mikesell", 
        icon: "atom", 
        color: "#9D4EDD",
        progress: 15
      },
      { 
        title: "Statistics Fundamentals", 
        terms: "20 terms", 
        user: "dconsbruck", 
        icon: "chart-bell-curve", 
        color: "#3B82F6",
        progress: 55
      },
      { 
        title: "Physics Applications", 
        terms: "20 terms", 
        user: "Lisa_Williamson65", 
        icon: "rocket-launch", 
        color: "#F59E0B",
        progress: 40
      },
    ],
  };

  // Simulate refresh
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  // Animation values
  const fadeAnim = new Animated.Value(0);
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [selectedTab]);

  // Header animation
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [120, 80],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 60, 90],
    outputRange: [1, 0.3, 0],
    extrapolate: 'clamp',
  });

  const textScale = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  // Card entrance animations
  const getItemAnimationStyle = (index) => {
    return {
      opacity: fadeAnim,
      transform: [
        { 
          translateY: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0],
          }) 
        },
        {
          scale: fadeAnim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.8, 1.02, 1],
          })
        }
      ],
    };
  };

  // ProgressBar component
  const ProgressBar = ({ progress, color }) => {
    return (
      <View style={{ height: 4, width: '100%', backgroundColor: '#E0E0E0', borderRadius: 2, marginTop: 8 }}>
        <View 
          style={{ 
            height: '100%', 
            width: `${progress}%`, 
            backgroundColor: color,
            borderRadius: 2,
          }} 
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      {/* Animated Header */}
      <Animated.View 
        style={{ 
          height: headerHeight, 
          paddingTop: 40,
          backgroundColor: COLORS.white,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
          zIndex: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: COLORS.white,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Ionicons name="arrow-back" size={22} color={COLORS.text.primary} />
          </TouchableOpacity>
          
          <Animated.Text 
            style={{ 
              fontSize: 28, 
              fontWeight: "bold", 
              marginLeft: 15,
              color: COLORS.text.primary,
              transform: [{ scale: textScale }],
            }}
          >
            Mathematics
          </Animated.Text>
        </View>
        
        <Animated.View style={{ opacity: headerOpacity, paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 14, color: COLORS.text.secondary }}>
            Explore different branches of mathematics
          </Text>
        </Animated.View>
      </Animated.View>

      {/* Tab Navigation with Gradient Indicator */}
      <View 
        style={{ 
          flexDirection: "row", 
          justifyContent: "space-between", 
          paddingHorizontal: 20,
          marginVertical: 15,
          backgroundColor: COLORS.white,
          paddingVertical: 12,
          borderRadius: 12,
          marginHorizontal: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 2,
        }}
      >
        {tabs.map((tab) => (
          <TouchableOpacity 
            key={tab} 
            onPress={() => setSelectedTab(tab)} 
            style={{ 
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
              backgroundColor: selectedTab === tab ? COLORS.primary : 'transparent',
            }}
          >
            <Text 
              style={{ 
                fontSize: 14, 
                fontWeight: "600", 
                color: selectedTab === tab ? COLORS.white : COLORS.inactive 
              }}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List of Topics with Animations */}
      <Animated.ScrollView 
        style={{ paddingHorizontal: 15 }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {data[selectedTab].map((item, index) => (
          <Animated.View
            key={index}
            style={[getItemAnimationStyle(index), { marginBottom: 15 }]}
          >
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.white,
                padding: 20,
                borderRadius: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 3,
              }}
              onPress={() => {
                if (item.title === "ASVAB Math") {
                  navigation.navigate("Mathscreen/ASVABMathScreen");
                } else if (item.title === "Functions Intro 20") {
                  navigation.navigate("Mathscreen/FunctionIntroScreen");
                }
              }}
              activeOpacity={0.7}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View 
                  style={{ 
                    width: 50, 
                    height: 50, 
                    borderRadius: 25,
                    backgroundColor: `${item.color}20`,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MaterialCommunityIcons name={item.icon} size={24} color={item.color} />
                </View>
                
                <View style={{ marginLeft: 15, flex: 1 }}>
                  <Text style={{ fontSize: 17, fontWeight: "700", color: COLORS.text.primary }}>{item.title}</Text>
                  <Text style={{ color: COLORS.text.secondary, marginTop: 4 }}>{item.terms}</Text>
                  
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                    <View 
                      style={{ 
                        width: 24, 
                        height: 24, 
                        borderRadius: 12,
                        backgroundColor: COLORS.gradient.start,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={{ fontSize: 12, color: COLORS.white, fontWeight: '600' }}>👤</Text>
                    </View>
                    <Text style={{ marginLeft: 6, color: COLORS.text.secondary }}>{item.user}</Text>
                  </View>
                  
                  <View style={{ marginTop: 4 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ fontSize: 12, color: COLORS.text.secondary }}>Progress</Text>
                      <Text style={{ fontSize: 12, fontWeight: '600', color: item.color }}>{item.progress}%</Text>
                    </View>
                    <ProgressBar progress={item.progress} color={item.color} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
        
        {/* Add some space at the bottom */}
        <View style={{ height: 30 }} />
      </Animated.ScrollView>
      
      {/* Floating Action Button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: COLORS.primary,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: COLORS.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 8,
          elevation: 6,
        }}
        onPress={() => {}}
      >
        <LinearGradient
          colors={[COLORS.gradient.start, COLORS.gradient.end]}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 28,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name="add" size={26} color={COLORS.white} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default MathsScreen;