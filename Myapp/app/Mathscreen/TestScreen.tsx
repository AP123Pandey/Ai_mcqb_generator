// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
// import { useRoute, useNavigation } from "@react-navigation/native";
// import axios from "axios";

// const TestScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
  
//   const [questions, setQuestions] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showResults, setShowResults] = useState(false);
//   const [score, setScore] = useState(0);
//   const [loading, setLoading] = useState(true);

  
//     const fetchMCQs = async () => {
//         try {
//           console.log("Fetching MCQs...");
      
//           const response = await axios.get(
//             `http://192.168.86.29:6000/getMCQs?topic=Maths&difficulty=easy`
//           );
      
//           console.log("API Response:", response.data);  // 🔹 Log API response
      
//           if (!Array.isArray(response.data)) {
//             throw new Error("Invalid response format: Expected an array");
//           }
      
//           setQuestions(response.data);
//         } catch (error) {
//           console.error("❌ Error fetching questions:", error.message);
//         } finally {
//           setLoading(false);
//         }
//       };
    

//   const handleSelect = (questionId, answer) => {
//     setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
//   };

//   const submitTest = async () => {
//     let correctCount = 0;
//     for (let question of questions) {
//       if (selectedAnswers[question.id] === question.correct_answer) {
//         correctCount++;
//       }
//     }
//     setScore(correctCount);
//     setShowResults(true);

//     // Save user answers to the database
//     await axios.post("http://192.168.86.29:6000/saveTestResult", {
//       answers: selectedAnswers,
//       score,
//       topic: "Maths Percentage",
//       difficulty: "easy",
//     });
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007bff" />
//         <Text>Loading questions...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>Maths Percentage - Test</Text>

//       {questions.map((q, index) => (
//         <View key={q.id} style={styles.questionContainer}>
//           <Text style={styles.question}>{index + 1}. {q.question}</Text>
//           {[q.option1, q.option2, q.option3, q.option4].map((option, i) => (
//             <TouchableOpacity
//               key={i}
//               style={[styles.option, selectedAnswers[q.id] === option ? styles.selectedOption : {}]}
//               onPress={() => handleSelect(q.id, option)}
//             >
//               <Text>{option}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       ))}

//       {!showResults ? (
//         <TouchableOpacity style={styles.submitButton} onPress={submitTest}>
//           <Text style={styles.submitText}>Submit Test</Text>
//         </TouchableOpacity>
//       ) : (
//         <View>
//           <Text style={styles.resultText}>Your Score: {score} / {questions.length}</Text>
//           <TouchableOpacity style={styles.submitButton} onPress={() => navigation.goBack()}>
//             <Text style={styles.submitText}>Back</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
//   questionContainer: { marginBottom: 20 },
//   question: { fontSize: 18, fontWeight: "bold" },
//   option: { padding: 10, backgroundColor: "#f0f0f0", borderRadius: 5, marginTop: 5 },
//   selectedOption: { backgroundColor: "#90ee90" },
//   submitButton: { backgroundColor: "#007bff", padding: 15, borderRadius: 5, marginTop: 20, alignItems: "center" },
//   submitText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
//   resultText: { fontSize: 22, fontWeight: "bold", marginTop: 20, textAlign: "center" },
//   loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
// });

// export default TestScreen;



// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
// import { useRoute, useNavigation } from "@react-navigation/native";
// import axios from "axios";

// const TestScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
  
//   const { topic, difficulty } = route.params;  // Get topic and difficulty from route params
//   const [questions, setQuestions] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showResults, setShowResults] = useState(false);
//   const [score, setScore] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchMCQs();
//   }, []);

//   const fetchMCQs = async () => {
//     try {
//       console.log(`Fetching MCQs for Topic: ${topic}, Difficulty: ${difficulty}`);

//       const response = await axios.get(
//         `http://192.168.86.29:6000/getMCQs?topic=${encodeURIComponent(topic)}&difficulty=${encodeURIComponent(difficulty)}`
//       );

//       console.log("API Response:", response.data);  

//       if (!Array.isArray(response.data)) {
//         throw new Error("Invalid response format: Expected an array");
//       }

//       setQuestions(response.data);
//     } catch (error) {
//       console.error("❌ Error fetching questions:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSelect = (questionId, answer) => {
//     setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
//   };

//   const submitTest = async () => {
//     let correctCount = 0;
//     for (let question of questions) {
//       if (selectedAnswers[question.id] === question.correct_answer) {
//         correctCount++;
//       }
//     }
//     setScore(correctCount);
//     setShowResults(true);

//     // Save user answers to the database
//     await axios.post("http://192.168.86.29:6000/saveTestResult", {
//       answers: selectedAnswers,
//       score,
//       topic,
//       difficulty,
//     });
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007bff" />
//         <Text>Loading questions...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>{topic} - {difficulty} Test</Text>

//       {questions.map((q, index) => (
//         <View key={q.id} style={styles.questionContainer}>
//           <Text style={styles.question}>{index + 1}. {q.question}</Text>
//           {[q.option1, q.option2, q.option3, q.option4].map((option, i) => (
//             <TouchableOpacity
//               key={i}
//               style={[styles.option, selectedAnswers[q.id] === option ? styles.selectedOption : {}]}
//               onPress={() => handleSelect(q.id, option)}
//             >
//               <Text>{option}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       ))}

//       {!showResults ? (
//         <TouchableOpacity style={styles.submitButton} onPress={submitTest}>
//           <Text style={styles.submitText}>Submit Test</Text>
//         </TouchableOpacity>
//       ) : (
//         <View>
//           <Text style={styles.resultText}>Your Score: {score} / {questions.length}</Text>
//           <TouchableOpacity style={styles.submitButton} onPress={() => navigation.goBack()}>
//             <Text style={styles.submitText}>Back</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
//   questionContainer: { marginBottom: 20 },
//   question: { fontSize: 18, fontWeight: "bold" },
//   option: { padding: 10, backgroundColor: "#f0f0f0", borderRadius: 5, marginTop: 5 },
//   selectedOption: { backgroundColor: "#90ee90" },
//   submitButton: { backgroundColor: "#007bff", padding: 15, borderRadius: 5, marginTop: 20, alignItems: "center" },
//   submitText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
//   resultText: { fontSize: 22, fontWeight: "bold", marginTop: 20, textAlign: "center" },
//   loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
// });

// export default TestScreen;









import React, { useState, useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  ActivityIndicator,
  Animated,
  Dimensions,
  StatusBar,
  SafeAreaView
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import axios from "axios";

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
  success: '#00B894',
  warning: '#FDCB6E',
  error: '#FF7675'
};

const { width, height } = Dimensions.get('window');

const TestScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const scrollViewRef = useRef();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  
  const { topic, difficulty } = route.params;
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [timer, setTimer] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);

  const difficultyColors = {
    'Easy': COLORS.success,
    'Medium': COLORS.warning,
    'Hard': COLORS.error,
  };

  const difficultyColor = difficultyColors[difficulty] || COLORS.primary;

  useEffect(() => {
    
    fetchMCQs();
    
    // Start entrance animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    if (questions.length > 0 && !timerRunning) {
      startTimer();
      setTimerRunning(true);
    }
  }, [questions]);

  const startTimer = () => {
    // Set timer based on difficulty
    let seconds = difficulty === 'Easy' ? 300 : difficulty === 'Medium' ? 240 : 180;
    setTimeLeft(seconds);
    
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          if (!testCompleted) {
            submitTest();
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    setTimer(interval);
    return () => clearInterval(interval);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const fetchMCQs = async () => {
    try {
      setLoading(true);
      console.log(`Fetching MCQs for Topic: ${topic}, Difficulty: ${difficulty}`);

      const response = await axios.get(
        `http://192.168.86.29:6000/getMCQs?topic=${encodeURIComponent(topic)}&difficulty=${encodeURIComponent(difficulty)}`
      );

      console.log("API Response:", response.data);  

      if (!Array.isArray(response.data)) {
        throw new Error("Invalid response format: Expected an array");
      }

      // Add animation delay
      setTimeout(() => {
        setQuestions(response.data);
        setLoading(false);
      }, 1200);
    } catch (error) {
      console.error("❌ Error fetching questions:", error.message);
      setLoading(false);
    }
  };

  const handleSelect = (questionId, answer) => {
    // Simple animation instead of haptic feedback
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.03,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
    
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
  };

  const navigateToQuestion = (index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
      scrollViewRef.current?.scrollTo({ 
        y: 0, 
        animated: true 
      });
    }
  };

  const submitTest = async () => {
    // Clear timer
    if (timer) {
      clearInterval(timer);
    }
    
    setTestCompleted(true);
    
    let correctCount = 0;
    for (let question of questions) {
      if (selectedAnswers[question.id] === question.correct_answer) {
        correctCount++;
      }
    }
    
    const finalScore = correctCount;
    setScore(finalScore);
    
    // Animation for results reveal
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => setShowResults(true));

    // Save user answers to the database
    try {
      await axios.post("http://192.168.86.29:6000/saveTestResult", {
        answers: selectedAnswers,
        score: finalScore,
        topic,
        difficulty,
        timeSpent: 300 - timeLeft, // Calculate time spent in seconds
      });
    } catch (error) {
      console.error("Failed to save test results:", error);
    }
  };

  const renderProgressIndicator = () => {
    return (
      <View style={styles.progressContainer}>
        {questions.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigateToQuestion(index)}
            style={[
              styles.progressDot,
              {
                backgroundColor: 
                  currentQuestionIndex === index 
                    ? COLORS.primary 
                    : selectedAnswers[questions[index]?.id] 
                      ? COLORS.success 
                      : COLORS.inactive
              }
            ]}
          />
        ))}
      </View>
    );
  };

  const renderQuestion = () => {
    if (questions.length === 0) return null;
    
    const currentQuestion = questions[currentQuestionIndex];
    
    return (
      <Animated.View 
        style={[
          styles.questionCard,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        <View style={styles.questionHeader}>
          <Text style={styles.questionNumber}>Question {currentQuestionIndex + 1}/{questions.length}</Text>
          <View style={styles.timer}>
            <View style={[
              styles.timerCircle,
              { borderColor: timeLeft < 60 ? COLORS.error : COLORS.primary }
            ]}>
              <Text style={[
                styles.timerText,
                { color: timeLeft < 60 ? COLORS.error : COLORS.text.primary }
              ]}>
                {formatTime(timeLeft)}
              </Text>
            </View>
          </View>
        </View>
        
        <Text style={styles.question}>{currentQuestion.question}</Text>
        
        {[currentQuestion.option1, currentQuestion.option2, currentQuestion.option3, currentQuestion.option4].map((option, i) => {
          const isSelected = selectedAnswers[currentQuestion.id] === option;
          return (
            <TouchableOpacity
              key={i}
              style={[
                styles.option,
                isSelected && { 
                  backgroundColor: COLORS.primary,
                  transform: [{ scale: 1.02 }]
                }
              ]}
              onPress={() => handleSelect(currentQuestion.id, option)}
            >
              <View style={styles.optionContent}>
                <View style={[
                  styles.optionBullet,
                  isSelected && { backgroundColor: COLORS.white }
                ]}>
                  <Text style={[
                    styles.optionBulletText,
                    isSelected && { color: COLORS.primary }
                  ]}>
                    {['A', 'B', 'C', 'D'][i]}
                  </Text>
                </View>
                <Text style={[
                  styles.optionText,
                  isSelected && { color: COLORS.white }
                ]}>
                  {option}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        
        <View style={styles.navigationButtons}>
          <TouchableOpacity 
            style={[styles.navButton, currentQuestionIndex === 0 ? styles.disabledButton : {}]}
            onPress={() => navigateToQuestion(currentQuestionIndex - 1)}
            disabled={currentQuestionIndex === 0}
          >
            <Text style={[styles.navButtonText, currentQuestionIndex === 0 ? styles.disabledButtonText : {}]}>Previous</Text>
          </TouchableOpacity>
          
          {currentQuestionIndex === questions.length - 1 ? (
            <TouchableOpacity 
              style={[styles.navButton, styles.submitButton]} 
              onPress={submitTest}
            >
              <Text style={styles.submitText}>Submit Test</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              style={styles.navButton}
              onPress={() => navigateToQuestion(currentQuestionIndex + 1)}
            >
              <Text style={styles.navButtonText}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    );
  };

  const renderResults = () => {
    const percentage = (score / questions.length) * 100;
    let resultMessage = '';
    let resultColor = '';
    
    if (percentage >= 80) {
      resultMessage = 'Excellent! You mastered this topic!';
      resultColor = COLORS.success;
    } else if (percentage >= 60) {
      resultMessage = 'Good job! Keep practicing!';
      resultColor = COLORS.warning;
    } else {
      resultMessage = 'Keep studying! Youll get better!';
      resultColor = COLORS.error;
    }
    
    return (
      <Animated.View 
        style={[
          styles.resultsCard,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        <View style={styles.resultIconContainer}>
          <View style={[styles.resultIcon, { backgroundColor: resultColor }]}>
            <Text style={styles.resultIconText}>
              {percentage >= 70 ? '✓' : percentage >= 50 ? '!' : '×'}
            </Text>
          </View>
        </View>
        
        <Text style={styles.resultHeading}>Test Complete!</Text>
        <Text style={[styles.resultMessage, { color: resultColor }]}>{resultMessage}</Text>
        
        <View style={styles.scoreContainer}>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreText}>{score}</Text>
            <Text style={styles.scoreTotal}>/{questions.length}</Text>
          </View>
          <Text style={styles.percentageText}>{percentage.toFixed(0)}%</Text>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Topic</Text>
            <Text style={styles.statValue}>{topic}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Difficulty</Text>
            <Text style={[styles.statValue, { color: difficultyColor }]}>{difficulty}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Time Spent</Text>
            <Text style={styles.statValue}>{formatTime(300 - timeLeft)}</Text>
          </View>
        </View>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={[styles.actionButton, styles.reviewButton]}
            onPress={() => {
              setShowResults(false);
              setCurrentQuestionIndex(0);
            }}
          >
            <Text style={styles.reviewButtonText}>Review Answers</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.actionButton, styles.homeButton]}
            onPress={() => navigation.goBack()}
          >
            <View style={styles.gradientButton}>
              <Text style={styles.homeButtonText}>Back to Topics</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
        <ActivityIndicator size="large" color={COLORS.primary} style={{ transform: [{ scale: 2 }] }} />
        <Text style={styles.loadingText}>Loading {topic} questions...</Text>
        <Text style={styles.difficultyText}>Difficulty: <Text style={{ color: difficultyColor }}>{difficulty}</Text></Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{topic}</Text>
        <View style={[styles.difficultyBadge, { backgroundColor: difficultyColor }]}>
          <Text style={styles.difficultyBadgeText}>{difficulty}</Text>
        </View>
      </View>
      
      {!showResults && renderProgressIndicator()}
      
      <ScrollView 
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {!showResults ? renderQuestion() : renderResults()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background 
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  loadingContainer: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: COLORS.background 
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text.primary,
    marginTop: 20,
  },
  difficultyText: {
    fontSize: 16,
    color: COLORS.text.secondary,
    marginTop: 8,
  },
  header: {
    height: 100,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginTop:20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  difficultyBadgeText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    flexWrap: 'wrap',
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
    marginBottom: 8,
  },
  questionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text.secondary,
  },
  timer: {
    alignItems: 'center',
  },
  timerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    // We'll apply the dynamic color in the component render
  },
  timerText: {
    fontSize: 12,
    fontWeight: 'bold',
    // We'll apply the dynamic color in the component render
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text.primary,
    marginBottom: 20,
    lineHeight: 24,
  },
  option: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  optionBullet: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  optionBulletText: {
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  optionText: {
    fontSize: 16,
    color: COLORS.text.primary,
    flex: 1,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: COLORS.background,
    minWidth: 120,
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
  },
  disabledButton: {
    backgroundColor: COLORS.background,
    opacity: 0.5,
  },
  disabledButtonText: {
    color: COLORS.inactive,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
  },
  submitText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  resultsCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 25,
    marginHorizontal: 20,
    marginTop: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  resultIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultIconText: {
    fontSize: 40,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  resultHeading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: 10,
  },
  resultMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  scoreContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  scoreCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  scoreTotal: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 10,
  },
  percentageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: COLORS.text.secondary,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  actionButtons: {
    width: '100%',
    marginTop: 10,
  },
  actionButton: {
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  reviewButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 12,
    alignItems: 'center',
  },
  reviewButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  homeButton: {
    marginTop: 5,
  },
  gradientButton: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  homeButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TestScreen;