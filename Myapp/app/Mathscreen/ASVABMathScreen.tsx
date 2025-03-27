import React, { useRef, useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Animated, 
  Dimensions, 
  StatusBar,
  Image
} from "react-native";
import { 
  Ionicons, 
  MaterialCommunityIcons,
  FontAwesome5
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";

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

const studyModes = [
  { 
    name: "Flashcards", 
    icon: "cards-outline", 
    iconType: "materialCommunity",
    color: COLORS.primary
  },
  { 
    name: "Learn", 
    icon: "book-open-outline", 
    iconType: "materialCommunity",
    color: "#4ECDC4"
  },
  { 
    name: "Test", 
    icon: "pencil-alt", 
    iconType: "fontAwesome5",
    color: "#FF9F43"
  },
  { 
    name: "Match", 
    icon: "puzzle-outline", 
    iconType: "materialCommunity",
    color: COLORS.secondary
  },
  { 
    name: "Blast", 
    icon: "rocket-outline", 
    iconType: "ionicons",
    color: "#F59E0B"
  },
  { 
    name: "Blocks", 
    icon: "cube-outline", 
    iconType: "ionicons",
    color: "#3B82F6"
  }
];

const ASVABMathScreen = ({ navigation }) => {
  // Animated values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const flipAnim = useRef(new Animated.Value(0)).current;
  const cardScaleAnim = useRef(new Animated.Value(0.9)).current;
  
  // State
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [progress, setProgress] = useState(18);
  
  // Sample flashcards
  const flashcards = [
    { 
      question: "What are whole numbers?",
      answer: "Whole numbers are positive integers including zero (0, 1, 2, 3, ...)"
    },
    { 
      question: "What is the value of π (pi) to 2 decimal places?",
      answer: "The value of π is approximately 3.14"
    },
    { 
      question: "What is the Pythagorean theorem?",
      answer: "In a right-angled triangle, the square of the hypotenuse equals the sum of squares of the other two sides: a² + b² = c²"
    }
  ];

  // Run animations on component mount
  useEffect(() => {
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
      Animated.spring(cardScaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  // Flip card animation
  const flipCard = () => {
    // Haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    Animated.spring(flipAnim, {
      toValue: isFlipped ? 0 : 1,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();
    setIsFlipped(!isFlipped);
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg']
  });

  const frontAnimatedStyle = {
    transform: [
      { rotateY: frontInterpolate },
      { scale: cardScaleAnim }
    ]
  };

  const backAnimatedStyle = {
    transform: [
      { rotateY: backInterpolate },
      { scale: cardScaleAnim }
    ]
  };

  // Next card animation
  const nextCard = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    // Reset flip state
    if (isFlipped) {
      flipCard();
    }
    
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(cardScaleAnim, {
          toValue: 0.9,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        })
      ]),
      Animated.timing(rotateAnim, {
        toValue: rotateAnim._value + 1,
        duration: 0,
        useNativeDriver: true,
      })
    ]).start(() => {
      setCurrentCardIndex((currentCardIndex + 1) % flashcards.length);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(cardScaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        })
      ]).start();
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      {/* Background Elements */}
      <View style={styles.backgroundElements}>
        <Animated.View style={[styles.backgroundCircle, {
          opacity: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.15]
          }),
          transform: [
            { scale: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.8, 1]
            })}
          ]
        }]} />
      </View>
      
      {/* Header with Back Button */}
      <Animated.View style={[styles.header, {
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }]
      }]}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={22} color={COLORS.text.primary} />
        </TouchableOpacity>
        
        <Text style={styles.headerText}>ASVAB Math</Text>
        
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-vertical" size={20} color={COLORS.text.primary} />
        </TouchableOpacity>
      </Animated.View>

      {/* Progress Bar */}
      <Animated.View style={[styles.progressContainer, {
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }]
      }]}>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{progress}% Complete</Text>
      </Animated.View>

      {/* Flashcard */}
      <View style={styles.flashcardContainer}>
        <Animated.View style={[styles.flashcard, frontAnimatedStyle, {
          opacity: fadeAnim,
          backfaceVisibility: 'hidden',
        }]}>
          <Text style={styles.cardNumber}>Card {currentCardIndex + 1} of {flashcards.length}</Text>
          <Text style={styles.flashcardText}>{flashcards[currentCardIndex].question}</Text>
          <View style={styles.tapHint}>
            <Text style={styles.tapHintText}>Tap to flip</Text>
            <Ionicons name="hand-left" size={16} color={COLORS.text.secondary} />
          </View>
        </Animated.View>
        
        <Animated.View style={[styles.flashcard, styles.flashcardBack, backAnimatedStyle, {
          opacity: fadeAnim,
          backfaceVisibility: 'hidden',
        }]}>
          <Text style={styles.cardNumber}>Card {currentCardIndex + 1} of {flashcards.length}</Text>
          <Text style={styles.flashcardAnswer}>{flashcards[currentCardIndex].answer}</Text>
          <View style={styles.tapHint}>
            <Text style={styles.tapHintText}>Tap to flip back</Text>
            <Ionicons name="hand-left" size={16} color={COLORS.text.secondary} />
          </View>
        </Animated.View>
        
        {/* Card Navigation Buttons */}
        <View style={styles.cardNavigation}>
          <TouchableOpacity 
            style={[styles.navButton, { opacity: currentCardIndex > 0 ? 1 : 0.5 }]}
            onPress={() => {
              if (currentCardIndex > 0) {
                setCurrentCardIndex(currentCardIndex - 1);
                if (isFlipped) flipCard();
              }
            }}
            disabled={currentCardIndex === 0}
          >
            <Ionicons name="chevron-back" size={24} color={COLORS.white} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.flipButton}
            onPress={flipCard}
          >
            <Ionicons name="sync" size={20} color={COLORS.white} />
            <Text style={styles.flipButtonText}>Flip</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navButton}
            onPress={nextCard}
          >
            <Ionicons name="chevron-forward" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Touchable flashcard area */}
      <TouchableOpacity 
        style={styles.touchableCardArea}
        onPress={flipCard}
        activeOpacity={1}
      />

      {/* Upgrade Section */}
      <Animated.View style={[styles.upgradeContainer, {
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }]
      }]}>
        <LinearGradient
          colors={[COLORS.gradient.start, COLORS.gradient.end]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBackground}
        >
          <View style={styles.upgradeContent}>
            <View>
              <Text style={styles.upgradeText}>Level up with </Text>
              <Text style={styles.upgradeSubText}>Unlock all premium features</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.upgradeButton}
              onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}
            >
              <Text style={styles.upgradeButtonText}>Upgrade now</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </Animated.View>

      {/* User and Terms Info */}
      <Animated.View style={[styles.infoContainer, {
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }]
      }]}>
        <Text style={styles.courseTitle}>ASVAB Math</Text>
        <View style={styles.userInfoContainer}>
          <View style={styles.userIconContainer}>
            <Text style={styles.userIcon}>👤</Text>
          </View>
          <Text style={styles.userText}>Sharon_Mikesell <Text style={styles.termText}>• 60 terms</Text></Text>
        </View>
      </Animated.View>

      {/* Study Options */}
      <Animated.View style={[styles.studyOptionsHeader, {
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }]
      }]}>
        <Text style={styles.studyOptionsTitle}>Study Modes</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Options Buttons */}
      <Animated.View style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
        flex: 1
      }}>
        <ScrollView 
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.optionsGrid}>
            {studyModes.map((mode, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.optionButton}
                onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                activeOpacity={0.8}
              >
                <View 
                  style={[
                    styles.optionIconContainer,
                    { backgroundColor: `${mode.color}15` }
                  ]}
                >
                  {mode.iconType === "materialCommunity" ? (
                    <MaterialCommunityIcons name={mode.icon} size={22} color={mode.color} />
                  ) : mode.iconType === "fontAwesome5" ? (
                    <FontAwesome5 name={mode.icon} size={18} color={mode.color} />
                  ) : (
                    <Ionicons name={mode.icon} size={20} color={mode.color} />
                  )}
                </View>
                <Text style={styles.optionText}>{mode.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background, 
    paddingTop: 50
  },
  backgroundElements: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backgroundCircle: {
    position: 'absolute',
    top: -150,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: COLORS.primary,
  },
  header: { 
    flexDirection: "row", 
    alignItems: "center", 
    paddingHorizontal: 20, 
    marginBottom: 15,
    justifyContent: 'space-between'
  },
  backButton: {
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
  },
  moreButton: {
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
  },
  headerText: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: COLORS.text.primary
  },
  progressContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: `${COLORS.primary}20`,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: COLORS.text.secondary,
    marginTop: 6,
    alignSelf: 'flex-end',
  },
  flashcardContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
    height: 210,
  },
  touchableCardArea: {
    position: 'absolute',
    top: 90,
    height: 180,
    width: width - 40,
    zIndex: 10,
  },
  flashcard: { 
    backgroundColor: COLORS.white, 
    padding: 20, 
    borderRadius: 16,
    width: width - 40,
    height: 180,
    alignItems: "center", 
    justifyContent: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
    position: 'absolute',
  },
  flashcardBack: {
    backgroundColor: COLORS.white,
  },
  cardNumber: {
    position: 'absolute',
    top: 15,
    left: 15,
    fontSize: 12,
    color: COLORS.text.secondary,
  },
  flashcardText: { 
    fontSize: 20, 
    fontWeight: "bold", 
    textAlign: "center",
    color: COLORS.text.primary,
  },
  flashcardAnswer: {
    fontSize: 18,
    textAlign: "center",
    color: COLORS.text.primary,
    lineHeight: 26,
  },
  tapHint: {
    position: 'absolute',
    bottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tapHintText: {
    fontSize: 12,
    color: COLORS.text.secondary,
    marginRight: 5,
  },
  cardNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
    position: 'absolute',
    bottom: -25,
    zIndex: 20,
  },
  navButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  flipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  flipButtonText: {
    color: COLORS.white,
    fontWeight: '600',
    marginLeft: 6,
  },
  upgradeContainer: { 
    marginHorizontal: 20,
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: COLORS.gradient.end,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  gradientBackground: {
    borderRadius: 16,
  },
  upgradeContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  upgradeText: { 
    color: COLORS.white, 
    fontSize: 18,
    fontWeight: 'bold',
  },
  upgradeSubText: {
    color: COLORS.white,
    opacity: 0.8,
    fontSize: 12,
    marginTop: 4,
  },
  upgradeButton: { 
    backgroundColor: COLORS.white, 
    borderRadius: 25, 
    paddingHorizontal: 20, 
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  upgradeButtonText: { 
    fontWeight: "bold",
    color: COLORS.gradient.end,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  courseTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: COLORS.text.primary,
    marginBottom: 6,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.gradient.start,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  userIcon: {
    fontSize: 14,
    color: COLORS.white,
  },
  userText: { 
    fontSize: 14,
    color: COLORS.text.primary,
    fontWeight: '500',
  },
  termText: {
    color: COLORS.text.secondary,
    fontWeight: 'normal',
  },
  studyOptionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  studyOptionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text.primary,
  },
  seeAllText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '500',
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionButton: { 
    backgroundColor: COLORS.white, 
    padding: 15, 
    borderRadius: 16, 
    marginBottom: 15,
    width: '48%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  optionText: { 
    fontSize: 15, 
    fontWeight: "600",
    color: COLORS.text.primary,
  },
});

export default ASVABMathScreen;