// // import React, { useState } from "react";
// // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// // import { useNavigation, useRoute } from "@react-navigation/native";

// // const MCQTestScreen = () => {
// //   const navigation = useNavigation();
// //   const route = useRoute();
// //   const { mcqData } = route.params;
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [selectedAnswer, setSelectedAnswer] = useState(null);
// //   const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

// //   const currentQuestion = mcqData[currentIndex];

// //   const handleSelect = (answer) => {
// //     setSelectedAnswer(answer);
// //     setShowCorrectAnswer(true);

// //     // Move to the next question after a delay
// //     setTimeout(() => {
// //       if (currentIndex < mcqData.length - 1) {
// //         setCurrentIndex((prev) => prev + 1);
// //         setSelectedAnswer(null);
// //         setShowCorrectAnswer(false);
// //       } else {
// //         navigation.navigate("MCQResultScreen"); // Redirect to result screen
// //       }
// //     }, 2000); // 2-second delay before moving to the next question
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Question Counter */}
// //       <Text style={styles.counter}>
// //         Question {currentIndex + 1} / {mcqData.length}
// //       </Text>

// //       {/* Progress Bar */}
// //       <View style={styles.progressContainer}>
// //         <View style={[styles.progressBar, { width: `${((currentIndex + 1) / mcqData.length) * 100}%` }]} />
// //       </View>

// //       {/* Question */}
// //       <Text style={styles.question}>{currentQuestion.question}</Text>

// //       {/* Options */}
// //       <View style={styles.optionsContainer}>
// //         {["optionA", "optionB", "optionC", "optionD"].map((option) => (
// //           <TouchableOpacity
// //             key={option}
// //             style={[
// //               styles.option,
// //               selectedAnswer === currentQuestion[option] && styles.selectedOption,
// //               showCorrectAnswer && currentQuestion.correctAnswer === currentQuestion[option] && styles.correctOption
// //             ]}
// //             onPress={() => handleSelect(currentQuestion[option])}
// //             disabled={showCorrectAnswer} // Disable selection after choosing
// //           >
// //             <Text style={styles.optionText}>{currentQuestion[option]}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>

// //       {/* Correct Answer Message */}
// //       {showCorrectAnswer && (
// //         <Text style={styles.correctAnswerText}>
// //           Correct Answer: {currentQuestion.correctAnswer}
// //         </Text>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 20, backgroundColor: "#fff", justifyContent: "center" },
// //   counter: { fontSize: 18, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
// //   progressContainer: { height: 8, backgroundColor: "#ddd", borderRadius: 5, marginBottom: 20 },
// //   progressBar: { height: 8, backgroundColor: "#8a56ff", borderRadius: 5 },
// //   question: { fontSize: 18, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// //   optionsContainer: { gap: 10 },
// //   option: { padding: 12, borderRadius: 5, backgroundColor: "#ddd", alignItems: "center" },
// //   selectedOption: { backgroundColor: "#ffcc00" },
// //   correctOption: { backgroundColor: "#32CD32" },
// //   optionText: { fontSize: 16 },
// //   correctAnswerText: { marginTop: 15, fontSize: 16, fontWeight: "bold", color: "#32CD32", textAlign: "center" },
// // });

// // export default MCQTestScreen;











// // import React, { useState, useEffect } from "react";
// // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// // import { useNavigation, useRoute } from "@react-navigation/native";

// // const MCQTestScreen = () => {
// //   const navigation = useNavigation();
// //   const route = useRoute();
// //   const { mcqData } = route.params;
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (mcqData && mcqData.length > 0) {
// //       setLoading(false);
// //     }
// //   }, [mcqData]);

// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [selectedAnswer, setSelectedAnswer] = useState(null);
// //   const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

// //   if (loading) {
// //     return (
// //       <View style={styles.container}>
// //         <Text>Loading...</Text>
// //       </View>
// //     );
// //   }

// //   if (!mcqData || mcqData.length === 0) {
// //     return (
// //       <View style={styles.container}>
// //         <Text>No questions available.</Text>
// //       </View>
// //     );
// //   }

// //   const currentQuestion = mcqData[currentIndex];

// //   if (!currentQuestion) {
// //     return (
// //       <View style={styles.container}>
// //         <Text>No more questions available.</Text>
// //       </View>
// //     );
// //   }

// //   const handleSelect = (answer) => {
// //     setSelectedAnswer(answer);
// //     setShowCorrectAnswer(true);

// //     setTimeout(() => {
// //       if (currentIndex < mcqData.length - 1) {
// //         setCurrentIndex((prev) => prev + 1);
// //         setSelectedAnswer(null);
// //         setShowCorrectAnswer(false);
// //       } else {
// //         navigation.navigate("MCQResultScreen");
// //       }
// //     }, 2000);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.counter}>
// //         Question {currentIndex + 1} / {mcqData.length}
// //       </Text>

// //       <View style={styles.progressContainer}>
// //         <View style={[styles.progressBar, { width: `${((currentIndex + 1) / mcqData.length) * 100}%` }]} />
// //       </View>

// //       <Text style={styles.question}>{currentQuestion.question}</Text>

// //       <View style={styles.optionsContainer}>
// //         {["optionA", "optionB", "optionC", "optionD"].map((option) => (
// //           <TouchableOpacity
// //             key={option}
// //             style={[
// //               styles.option,
// //               selectedAnswer === currentQuestion[option] && styles.selectedOption,
// //               showCorrectAnswer && currentQuestion.correctAnswer === currentQuestion[option] && styles.correctOption
// //             ]}
// //             onPress={() => handleSelect(currentQuestion[option])}
// //             disabled={showCorrectAnswer}
// //           >
// //             <Text style={styles.optionText}>{currentQuestion[option]}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>

// //       {showCorrectAnswer && (
// //         <Text style={styles.correctAnswerText}>
// //           Correct Answer: {currentQuestion.correctAnswer}
// //         </Text>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 20, backgroundColor: "#fff", justifyContent: "center" },
// //   counter: { fontSize: 18, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
// //   progressContainer: { height: 8, backgroundColor: "#ddd", borderRadius: 5, marginBottom: 20 },
// //   progressBar: { height: 8, backgroundColor: "#8a56ff", borderRadius: 5 },
// //   question: { fontSize: 18, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// //   optionsContainer: { gap: 10 },
// //   option: { padding: 12, borderRadius: 5, backgroundColor: "#ddd", alignItems: "center" },
// //   selectedOption: { backgroundColor: "#ffcc00" },
// //   correctOption: { backgroundColor: "#32CD32" },
// //   optionText: { fontSize: 16 },
// //   correctAnswerText: { marginTop: 15, fontSize: 16, fontWeight: "bold", color: "#32CD32", textAlign: "center" },
// // });

// // export default MCQTestScreen;


// // from change 07-03-25..........................................................................

// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const MCQTestScreen = () => {
//   const navigation = useNavigation();
//   const [mcqData, setMcqData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

//   useEffect(() => {
//     fetch("http://192.168.86.29:6000/fetchmcqs")
//       .then((response) => response.json())
//       .then((data) => {
//         setMcqData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#8a56ff" />
//       </View>
//     );
//   }

//   if (!mcqData.length) {
//     return (
//       <View style={styles.container}>
//         <Text>No questions available.</Text>
//       </View>
//     );
//   }

//   const currentQuestion = mcqData[currentIndex];

//   const handleSelect = (answer) => {
//     setSelectedAnswer(answer);
//     setShowCorrectAnswer(true);

//     setTimeout(() => {
//       if (currentIndex < mcqData.length - 1) {
//         setCurrentIndex(currentIndex + 1);
//         setSelectedAnswer(null);
//         setShowCorrectAnswer(false);
//       } else {
//         navigation.navigate("MCQResultScreen");
//       }
//     }, 2000);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.counter}>
//         Question {currentIndex + 1} / {mcqData.length}
//       </Text>

//       <View style={styles.progressContainer}>
//         <View style={[styles.progressBar, { width: `${((currentIndex + 1) / mcqData.length) * 100}%` }]} />
//       </View>

//       <Text style={styles.question}>{currentQuestion.question}</Text>

//       <View style={styles.optionsContainer}>
//         {["option1", "option2", "option3", "option4"].map((option) => (
//           <TouchableOpacity
//             key={option}
//             style={[
//               styles.option,
//               selectedAnswer === currentQuestion[option] && styles.selectedOption,
//               showCorrectAnswer && currentQuestion.answer === currentQuestion[option] && styles.correctOption
//             ]}
//             onPress={() => handleSelect(currentQuestion[option])}
//             disabled={showCorrectAnswer}
//           >
//             <Text style={styles.optionText}>{currentQuestion[option]}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {showCorrectAnswer && (
//         <Text style={styles.correctAnswerText}>
//           Correct Answer: {currentQuestion.answer}
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: "#fff", justifyContent: "center" },
//   counter: { fontSize: 18, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
//   progressContainer: { height: 8, backgroundColor: "#ddd", borderRadius: 5, marginBottom: 20 },
//   progressBar: { height: 8, backgroundColor: "#8a56ff", borderRadius: 5 },
//   question: { fontSize: 18, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
//   optionsContainer: { gap: 10 },
//   option: { padding: 12, borderRadius: 5, backgroundColor: "#ddd", alignItems: "center" },
//   selectedOption: { backgroundColor: "#ffcc00" },
//   correctOption: { backgroundColor: "#32CD32" },
//   optionText: { fontSize: 16 },
//   correctAnswerText: { marginTop: 15, fontSize: 16, fontWeight: "bold", color: "#32CD32", textAlign: "center" },
// });

// export default MCQTestScreen;


import React, { useState, useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ActivityIndicator,
  Animated,
  Dimensions,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
// Removed Lottie and Haptics imports that were causing issues

// Colors theme
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
  correct: '#4CD964',
  wrong: '#FF3B30',
};

const { width } = Dimensions.get("window");

const MCQTestScreen = () => {
  const navigation = useNavigation();
  const [mcqData, setMcqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds per question
  const [timerActive, setTimerActive] = useState(true);
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const optionAnimations = useRef([...Array(4)].map(() => new Animated.Value(0))).current;
  const timerAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    fetch("http://192.168.86.29:6000/fetchmcqs")
      .then((response) => response.json())
      .then((data) => {
        setMcqData(data);
        setLoading(false);
        // Start animations when data is loaded
        animateEntrance();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Timer effect
  useEffect(() => {
    let timerId;
    if (timerActive && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
        Animated.timing(timerAnimation, {
          toValue: timeLeft / 30, // Normalize to 0-1
          duration: 500,
          useNativeDriver: false,
        }).start();
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      handleTimeout();
    }
    
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [timeLeft, timerActive]);

  // Update progress bar when current index changes
  useEffect(() => {
    if (mcqData.length > 0) {
      Animated.timing(progressAnim, {
        toValue: (currentIndex + 1) / mcqData.length,
        duration: 500,
        useNativeDriver: false,
      }).start();
      
      // Reset timer for new question
      setTimeLeft(30);
      setTimerActive(true);
      
      // Animate entrance of new question
      animateEntrance();
    }
  }, [currentIndex, mcqData.length]);

  const animateEntrance = () => {
    // Reset animations
    fadeAnim.setValue(0);
    scaleAnim.setValue(0.95);
    optionAnimations.forEach(anim => anim.setValue(0));
    
    // Animate question appearing
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();
    
    // Stagger animate options
    optionAnimations.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 400,
        delay: 300 + (index * 100),
        useNativeDriver: true,
      }).start();
    });
  };

  const handleTimeout = () => {
    setTimerActive(false);
    setShowCorrectAnswer(true);
    // Removed haptic feedback call
    
    setTimeout(() => moveToNextQuestion(), 2000);
  };

  const handleSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowCorrectAnswer(true);
    setTimerActive(false);
    
    const isCorrect = answer === mcqData[currentIndex].answer;
    
    if (isCorrect) {
      setScore(score + 1);
      // Removed haptic feedback call
    } else {
      // Removed haptic feedback call
    }

    setTimeout(() => moveToNextQuestion(), 2000);
  };
  
  const moveToNextQuestion = () => {
    if (currentIndex < mcqData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowCorrectAnswer(false);
    } else {
      navigation.navigate("MCQResultScreen", { score, total: mcqData.length });
    }
  };

  const getTimerColor = () => {
    if (timeLeft > 20) return COLORS.correct;
    if (timeLeft > 10) return COLORS.primary;
    return COLORS.wrong;
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Loading questions...</Text>
      </View>
    );
  }

  if (!mcqData.length) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[COLORS.gradient.start, COLORS.gradient.end]}
          style={styles.emptyGradient}
        >
          <Text style={styles.emptyText}>questions available.</Text>
          <TouchableOpacity 
            style={styles.retryButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.retryButtonText}>Click Here</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    );
  }

  const currentQuestion = mcqData[currentIndex];

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[COLORS.background, COLORS.background]}
        style={styles.container}
      >
        {/* Timer */}
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>{timeLeft}</Text>
          <View style={styles.timerBarContainer}>
            <Animated.View 
              style={[
                styles.timerBar, 
                { 
                  width: timerAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%']
                  }),
                  backgroundColor: getTimerColor()
                }
              ]} 
            />
          </View>
        </View>

        <View style={styles.header}>
          <Text style={styles.counter}>
            Question {currentIndex + 1} / {mcqData.length}
          </Text>

          <View style={styles.progressContainer}>
            <Animated.View 
              style={[
                styles.progressBar, 
                { 
                  width: progressAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%']
                  })
                }
              ]} 
            />
          </View>
        </View>

        <Animated.View 
          style={[
            styles.questionContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }]
            }
          ]}
        >
          <LinearGradient
            colors={[COLORS.white, COLORS.white]}
            style={styles.questionGradient}
          >
            <Text style={styles.question}>{currentQuestion.question}</Text>
          </LinearGradient>
        </Animated.View>

        <View style={styles.optionsContainer}>
          {["option1", "option2", "option3", "option4"].map((option, index) => (
            <Animated.View
              key={option}
              style={{
                opacity: optionAnimations[index],
                transform: [
                  { 
                    translateY: optionAnimations[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0]
                    })
                  }
                ]
              }}
            >
              <TouchableOpacity
                style={[
                  styles.option,
                  selectedAnswer === currentQuestion[option] && !showCorrectAnswer && styles.selectedOption,
                  showCorrectAnswer && currentQuestion.answer === currentQuestion[option] && styles.correctOption,
                  showCorrectAnswer && selectedAnswer === currentQuestion[option] && 
                  selectedAnswer !== currentQuestion.answer && styles.wrongOption
                ]}
                onPress={() => handleSelect(currentQuestion[option])}
                disabled={showCorrectAnswer}
              >
                <Text style={[
                  styles.optionText,
                  showCorrectAnswer && currentQuestion.answer === currentQuestion[option] && styles.correctOptionText,
                  showCorrectAnswer && selectedAnswer === currentQuestion[option] && 
                  selectedAnswer !== currentQuestion.answer && styles.wrongOptionText
                ]}>
                  {currentQuestion[option]}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>

        {showCorrectAnswer && (
          <Animated.View 
            style={[styles.feedbackContainer, { opacity: fadeAnim }]}
          >
            {selectedAnswer === currentQuestion.answer ? (
              <View style={styles.correctFeedback}>
                <View style={styles.feedbackIcon}>
                  <Text style={styles.feedbackIconText}>✓</Text>
                </View>
                <Text style={styles.correctAnswerText}>Correct!</Text>
              </View>
            ) : (
              <View style={styles.wrongFeedback}>
                <View style={styles.feedbackIcon}>
                  <Text style={styles.feedbackIconText}>✗</Text>
                </View>
                <Text style={styles.wrongAnswerText}>
                  Correct answer: {currentQuestion.answer}
                </Text>
              </View>
            )}
          </Animated.View>
        )}

        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Score: {score}</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: COLORS.text.primary,
    marginTop: 20,
  },
  emptyGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 20,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  retryButtonText: {
    color: COLORS.gradient.start,
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    marginBottom: 15,
  },
  timerContainer: {
   
    alignItems: "center",
    marginTop:20,
  },
  timerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text.primary,
    marginBottom: 5,
  },
  timerBarContainer: {
    height: 8,
    backgroundColor: COLORS.inactive,
    borderRadius: 10,
    width: "100%",
    overflow: "hidden",
  },
  timerBar: {
    height: 8,
    borderRadius: 10,
  },
  counter: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  progressContainer: {
    height: 8,
    backgroundColor: COLORS.inactive,
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  progressBar: {
    height: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionGradient: {
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text.primary,
    textAlign: "center",
    lineHeight: 28,
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  option: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  selectedOption: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    transform: [{ scale: 1.02 }],
  },
  correctOption: {
    backgroundColor: COLORS.correct,
    borderColor: COLORS.correct,
  },
  wrongOption: {
    backgroundColor: COLORS.wrong,
    borderColor: COLORS.wrong,
  },
  optionText: {
    fontSize: 16,
    color: COLORS.text.primary,
    fontWeight: "500",
  },
  correctOptionText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  wrongOptionText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  feedbackContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  correctFeedback: {
    alignItems: "center",
  },
  wrongFeedback: {
    alignItems: "center",
  },
  feedbackIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: (props) => props.isCorrect ? COLORS.correct : COLORS.wrong,
  },
  feedbackIconText: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.white,
  },
  correctAnswerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.correct,
    textAlign: "center",
  },
  wrongAnswerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.wrong,
    textAlign: "center",
  },
  scoreContainer: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});

export default MCQTestScreen;