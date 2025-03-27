// // // import React, { useEffect, useState } from "react";
// // // import { View, Text, ActivityIndicator, ScrollView } from "react-native";

// // // const TestScreenAptitude = () => {
// // //   const [mcqs, setMcqs] = useState({});
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchMCQs = async () => {
// // //       try {
// // //         const response = await fetch(
// // //           `http://192.168.86.29:6000/generate-mcq-for-aptitude/20`
// // //         );
       
        
// // //       } catch (error) {
// // //         console.error("Error fetching MCQs:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchMCQs();
// // //   }, []);

// // //   const fetchNewMCQs = async () => {
// // //     try {
// // //       const response = await fetch(
// // //         `http://192.168.86.29:6000/get-aptitudeq-from-20q`
// // //       );
// // //       const data = await response.json();
// // //       setMcqs(data);
// // //     } catch (error) {
// // //       console.error("Error fetching new MCQs:", error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // // fetchNewMCQs();


// // //   return (
// // //     <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
// // //       {loading ? (
// // //         <ActivityIndicator size="large" color="#2A4DFF" />
// // //       ) : (
// // //         <ScrollView>
// // //           {Object.keys(mcqs).map((type) => (
// // //             <View key={type} style={{ marginBottom: 20 }}>
// // //               <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
// // //                 {type} MCQs
// // //               </Text>
// // //               {mcqs[type]?.map((mcq, index) => (
// // //                 <View key={index} style={{ marginBottom: 10 }}>
// // //                   <Text style={{ fontSize: 16, fontWeight: "bold" }}>
// // //                     Q{index + 1}: {mcq.question}
// // //                   </Text>
// // //                   {mcq.options.map((option, i) => (
// // //                     <Text key={i} style={{ marginLeft: 10 }}>● {option}</Text>
// // //                   ))}
// // //                 </View>
// // //               ))}
// // //             </View>
// // //           ))}
// // //         </ScrollView>
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // export default TestScreenAptitude;


// // import React, { useEffect, useState } from "react";
// // import { View, Text, ActivityIndicator, ScrollView } from "react-native";

// // const TestScreenAptitude = () => {
// //   const [mcqs, setMcqs] = useState({});
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
    // const fetchMCQs = async () => {
    //   try {
    //     await fetch(
    //       `http://192.168.86.29:6000/generate-mcq-for-aptitude/20`
    //     );
    //   } catch (error) {
    //     console.error("Error fetching MCQs:", error);
    //   }
    // };

// //     const fetchNewMCQs = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://192.168.86.29:6000/get-aptitudeq-from-20q`
// //         );
// //         const data = await response.json();
// //         setMcqs(data);
// //       } catch (error) {
// //         console.error("Error fetching new MCQs:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchMCQs(); // Runs once when component mounts
// //     fetchNewMCQs(); // Runs once when component mounts
// //   }, []); // Dependency array ensures this runs only once

// //   return (
// //     <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
// //       {loading ? (
// //         <ActivityIndicator size="large" color="#2A4DFF" />
// //       ) : (
// //         <ScrollView>
// //           {Object.keys(mcqs).map((type) => (
// //             <View key={type} style={{ marginBottom: 20 }}>
// //               <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
// //                 {type} MCQs
// //               </Text>
// //               {mcqs[type]?.map((mcq, index) => (
// //                 <View key={index} style={{ marginBottom: 10 }}>
// //                   <Text style={{ fontSize: 16, fontWeight: "bold" }}>
// //                     Q{index + 1}: {mcq.question}
// //                   </Text>
// //                   {mcq.options.map((option, i) => (
// //                     <Text key={i} style={{ marginLeft: 10 }}>● {option}</Text>
// //                   ))}
// //                 </View>
// //               ))}
// //             </View>
// //           ))}
// //         </ScrollView>
// //       )}
// //     </View>
// //   );
// // };


// // import React, { useEffect, useState } from "react";
// // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// // const TestScreenAptitude = () => {
// //   const [questions, setQuestions] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [selectedOption, setSelectedOption] = useState(null);
// //   const [score, setScore] = useState(0);
// //   const [showResult, setShowResult] = useState(false);

// //   useEffect(() => {
// //     fetch("http://192.168.86.29:6000/get-aptitudeq-from-20q")
// //       .then((res) => res.json())
// //       .then((data) => setQuestions(data))
// //       .catch((error) => console.error("Error fetching questions:", error));
// //   }, []);

// //   const handleSubmit = () => {
// //     if (!selectedOption) return;
// //     if (selectedOption === questions[currentIndex].correct_answer) {
// //       setScore(score + 1);
// //     }
// //     if (currentIndex + 1 < questions.length) {
// //       setCurrentIndex(currentIndex + 1);
// //       setSelectedOption(null);
// //     } else {
// //       setShowResult(true);
// //     }
// //   };

// //   if (!questions.length) {
// //     return <Text>Loading questions...</Text>;
// //   }

// //   if (showResult) {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.resultText}>Quiz Completed!</Text>
// //         <Text style={styles.resultText}>Your Score: {score} / {questions.length}</Text>
// //       </View>
// //     );
// //   }

// //   const currentQuestion = questions[currentIndex];

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.question}>{currentQuestion.question}</Text>
// //       {["option1", "option2", "option3", "option4"].map((option, index) => (
// //         <TouchableOpacity
// //           key={index}
// //           style={[styles.option, selectedOption === currentQuestion[option] && styles.selectedOption]}
// //           onPress={() => setSelectedOption(currentQuestion[option])}
// //         >
// //           <Text>{currentQuestion[option]}</Text>
// //         </TouchableOpacity>
// //       ))}
// //       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
// //         <Text style={styles.submitText}>Submit</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     padding: 20,
// //   },
// //   question: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     marginBottom: 20,
// //     textAlign: "center",
// //   },
// //   option: {
// //     width: "100%",
// //     padding: 15,
// //     marginVertical: 5,
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     alignItems: "center",
// //   },
// //   selectedOption: {
// //     backgroundColor: "lightblue",
// //   },
// //   submitButton: {
// //     marginTop: 20,
// //     backgroundColor: "blue",
// //     padding: 10,
// //     borderRadius: 5,
// //   },
// //   submitText: {
// //     color: "white",
// //     fontWeight: "bold",
// //   },
// //   resultText: {
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     textAlign: "center",
// //   },
// // });

// // export default TestScreenAptitude;




// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const TestScreenAptitude = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState({});
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [timer, setTimer] = useState(30 * 60);
//   const [skippedQuestions, setSkippedQuestions] = useState([]);
//   const [showExplanation, setShowExplanation] = useState({});

//   useEffect(() => {
//     fetch("http://192.168.86.29:6000/get-aptitudeq-from-20q")
//       .then((res) => res.json())
//       .then((data) => {
//         setQuestions(data);
//         setSkippedQuestions([...Array(data.length).keys()]);
//       })
//       .catch((error) => console.error("Error fetching questions:", error));
//   }, []);

//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
//       return () => clearInterval(interval);
//     } else {
//       handleSubmitFinal();
//     }
//   }, [timer]);

//   const handleSelectOption = (option) => {
//     setSelectedOption({ ...selectedOption, [currentIndex]: option });
//     setSkippedQuestions((prev) => prev.filter((q) => q !== currentIndex));
//   };

//   const handleSubmit = () => {
//     if (selectedOption[currentIndex] === questions[currentIndex].correct_answer) {
//       setScore((prevScore) => prevScore + 1);
//     }
//     if (currentIndex + 1 < questions.length) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

 

// const handleSubmitFinal = async () => {
    
//     const user = await AsyncStorage.getItem('user');
//     if (!user) {
//       alert("User not logged in");
//       return;
//     }
  
//     const { id: loggedInUserId } = JSON.parse(user);
  
//     const quizData = questions.map((q, index) => ({
//         qid: q.id,  // ✅ Include question ID
//       question: q.question,
//       selected_answer: selectedOption[index] || "Not Answered",
//       correct_answer: q.correct_answer,
//       is_correct: selectedOption[index] === q.correct_answer,
//       explanation: q.explanation || "No explanation available"
//     }));
  
//     fetch("http://192.168.86.29:6000/submit-quiz", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ user_id: loggedInUserId, quiz_data: quizData })
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Quiz submitted successfully:", data);
//         setShowResult(true);
//       })
//       .catch((error) => console.error("Error submitting quiz:", error));

//       setShowResult(true);
//   };

//   const handleExplanationToggle = (index) => {
//     setShowExplanation((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   if (!questions.length) {
//     return <Text>Loading questions...</Text>;
//   }

//   if (showResult) {
//     return (
//       <ScrollView style={styles.container}>
//         <Text style={styles.resultText}>Quiz Completed!</Text>
//         <Text style={styles.resultText}>Your Score: {score} / {questions.length}</Text>

//         {questions.map((question, index) => {
//           const isCorrect = selectedOption[index] === question.correct_answer;
//           return (
//             <View key={index} style={[styles.resultCard, isCorrect ? styles.correctCard : styles.wrongCard]}>
//               <Text style={styles.questionText}>Q{index + 1}: {question.question}</Text>
//               <Text style={styles.selectedAnswer}>Your Answer: {selectedOption[index] || "Not Answered"}</Text>
//               <Text style={styles.correctAnswer}>Correct Answer: {question.correct_answer}</Text>

//               <TouchableOpacity style={styles.explanationButton} onPress={() => handleExplanationToggle(index)}>
//                 <Text style={styles.explanationText}>{showExplanation[index] ? "Hide Explanation" : "See Explanation"}</Text>
//               </TouchableOpacity>

//               {showExplanation[index] && (
//                 <Text style={styles.explanation}>{question.explanation || "No explanation available."}</Text>
//               )}
//             </View>
//           );
//         })}
//       </ScrollView>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {/* Header with Timer and Skipped Questions */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Question {currentIndex + 1} / {questions.length}</Text>
//         <Text style={styles.timerText}>Time Left: {formatTime(timer)}</Text>

//         {skippedQuestions.length > 0 && (
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.skippedContainer}>
//             {skippedQuestions.map((qIndex) => (
//               <TouchableOpacity key={qIndex} style={styles.skippedButton} onPress={() => setCurrentIndex(qIndex)}>
//                 <Text style={styles.skippedText}>{qIndex + 1}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         )}
//       </View>

//       {/* Question */}
//       <Text style={styles.question}>{questions[currentIndex].question}</Text>

//       {/* Options */}
//       {["option1", "option2", "option3", "option4"].map((option, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[
//             styles.option,
//             selectedOption[currentIndex] === questions[currentIndex][option] && styles.selectedOption,
//           ]}
//           onPress={() => handleSelectOption(questions[currentIndex][option])}
//         >
//           <Text>{questions[currentIndex][option]}</Text>
//         </TouchableOpacity>
//       ))}

//       {/* Navigation Buttons */}
//       <View style={styles.navigationContainer}>
//         <TouchableOpacity style={styles.navButton} onPress={() => setCurrentIndex(Math.max(0, currentIndex - 1))}>
//           <Text style={styles.navText}>Previous</Text>
//         </TouchableOpacity>

//         {currentIndex + 1 === questions.length ? (
//           <TouchableOpacity style={styles.submitButton} onPress={handleSubmitFinal}>
//             <Text style={styles.navText}>Submit</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.navButton} onPress={handleSubmit} disabled={!selectedOption[currentIndex]}>
//             <Text style={styles.navText}>Next</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: "#F8F8F8" },
//   header: { backgroundColor: "#FFD700", padding: 10, borderRadius: 10, marginBottom: 10 },
//   headerText: { fontSize: 16, fontWeight: "bold" },
//   timerText: { fontSize: 16, color: "red", fontWeight: "bold" },
//   skippedContainer: { flexDirection: "row", marginTop: 5 },
//   skippedButton: { backgroundColor: "#FF4500", padding: 5, marginHorizontal: 3, borderRadius: 5 },
//   skippedText: { color: "white", fontWeight: "bold" },
//   question: { fontSize: 18, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
//   option: { padding: 15, marginVertical: 5, borderWidth: 1, borderRadius: 5, backgroundColor: "#FFF" },
//   selectedOption: { backgroundColor: "lightblue" },
//   navigationContainer: { flexDirection: "row", justifyContent: "space-between", marginVertical: 20 },
//   navButton: { backgroundColor: "#007BFF", padding: 10, borderRadius: 5, minWidth: 100, alignItems: "center" },
//   submitButton: { backgroundColor: "green", padding: 10, borderRadius: 5, minWidth: 100, alignItems: "center" },
//   navText: { color: "white", fontWeight: "bold" },
// });

// export default TestScreenAptitude;


import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar , AppState} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

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
  error: '#FF7675',
  warning: '#FDCB6E',
};

const TestScreenAptitude = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30 * 60);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [showExplanation, setShowExplanation] = useState({});
  const [testData, setTestData] = useState([]);
  const [appState, setAppState] = useState(AppState.currentState);
  const navigation = useNavigation();

  

  useEffect(() => {
      

    const fetchMCQs = async () => {
      try {
        await fetch(
          `http://192.168.86.29:6000/generate-mcq-for-aptitude/20`
        );
      } catch (error) { 
        console.error("Error fetching MCQs:", error);
      }
    };
    fetchMCQs();
    
    fetch("http://192.168.86.29:6000/get-aptitudeq-from-20q")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setSkippedQuestions([...Array(data.length).keys()]);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);



  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (
        appState.match(/active/) &&
        (nextAppState === "inactive" || nextAppState === "background")
      ) {
        console.log("Cheating detected! Submitting test...");
        autoSubmitTest();
        
      }
      setAppState(nextAppState);
    };

    const subscription = AppState.addEventListener("change", handleAppStateChange);

    // return () => {
    //   subscription.remove();
    // };
  }, [appState]);




  const autoSubmitTest = async () => {
    console.log("Test submitted automatically due to cheating.");
    await handleSubmit();
    setTimeout(() => navigation.replace("CheatingScreen"), 500); // Delay to ensure state updates
  };
  
  

  const submitTestManually = () => {
    // Normal test submission logic
    console.log("Test submitted manually.");
   
  };













  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      handleSubmitFinal();
    }
  }, [timer]);

  const handleSelectOption = (option) => {
    setSelectedOption({ ...selectedOption, [currentIndex]: option });
    setSkippedQuestions((prev) => prev.filter((q) => q !== currentIndex));
  };

  const handleSubmit = () => {
    if (selectedOption[currentIndex] === questions[currentIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmitFinal = async () => {
    const user = await AsyncStorage.getItem('user');
    if (!user) {
      alert("User not logged in");
      return;
    }
    
  
    const { id: loggedInUserId } = JSON.parse(user);
  
    const quizData = questions.map((q, index) => ({
      qid: q.id,
      question: q.question,
      selected_answer: selectedOption[index] || "Not Answered",
      correct_answer: q.correct_answer,
      is_correct: selectedOption[index] === q.correct_answer,
      explanation: q.explanation || "No explanation available"
    }));
  
    fetch("http://192.168.86.29:6000/submit-quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: loggedInUserId, quiz_data: quizData })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Quiz submitted successfully:", data);
        setShowResult(true);
      })
      .catch((error) => console.error("Error submitting quiz:", error));

      setShowResult(true);
  };

  const handleExplanationToggle = (index) => {
    setShowExplanation((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const getTimerColor = () => {
    if (timer < 60) return COLORS.error;
    if (timer < 5 * 60) return COLORS.warning;
    return COLORS.primary;
  };

  if (!questions.length) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading questions...</Text>
      </View>
    );
  }

  if (showResult) {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor={COLORS.gradient.start} />
        <LinearGradient
          colors={[COLORS.gradient.start, COLORS.gradient.end]}
          style={styles.resultHeader}
        >
          <Text style={styles.resultTitle}>Quiz Completed!</Text>
          <View style={styles.scoreCard}>
            <Text style={styles.scoreText}>Your Score</Text>
            <Text style={styles.scoreValue}>{score} / {questions.length}</Text>
            <Text style={styles.scorePercentage}>
              {Math.round((score / questions.length) * 100)}%
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.resultContainer}>
          {questions.map((question, index) => {
            const isCorrect = selectedOption[index] === question.correct_answer;
            const isSkipped = !selectedOption[index];
            
            return (
              <View key={index} style={styles.resultCard}>
                <View style={[
                  styles.resultStatusBar,
                  isCorrect ? styles.correctStatusBar : 
                  isSkipped ? styles.skippedStatusBar : styles.incorrectStatusBar
                ]} />
                
                <View style={styles.resultCardContent}>
                  <Text style={styles.resultQuestionText}>
                    Q{index + 1}: {question.question}
                  </Text>
                  
                  <View style={styles.answerRow}>
                    <Text style={styles.answerLabel}>Your answer:</Text>
                    <Text style={[
                      styles.answerText,
                      isCorrect ? styles.correctText : 
                      isSkipped ? styles.skippedText : styles.incorrectText
                    ]}>
                      {selectedOption[index] || "Skipped"}
                    </Text>
                  </View>
                  
                  <View style={styles.answerRow}>
                    <Text style={styles.answerLabel}>Correct answer:</Text>
                    <Text style={[styles.answerText, styles.correctText]}>
                      {question.correct_answer}
                    </Text>
                  </View>

                  <TouchableOpacity 
                    style={styles.explanationButton} 
                    onPress={() => handleExplanationToggle(index)}
                  >
                    <Text style={styles.explanationButtonText}>
                      {showExplanation[index] ? "Hide Explanation" : "See Explanation"}
                    </Text>
                  </TouchableOpacity>

                  {showExplanation[index] && (
                    <View style={styles.explanationContainer}>
                      <Text style={styles.explanationText}>
                        {question.explanation || "No explanation available."}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.gradient.start} />
      
      {/* Header with Timer and Progress */}
      <LinearGradient
        colors={[COLORS.gradient.start, COLORS.gradient.end]}
        style={styles.header}
      >
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Question {currentIndex + 1} of {questions.length}</Text>
          <View style={styles.progressBarContainer}>
            <View 
              style={[
                styles.progressBar, 
                { width: `${((currentIndex + 1) / questions.length) * 100}%` }
              ]} 
            />
          </View>
        </View>
        
        <View style={styles.timerContainer}>
          <Text style={[styles.timerText, { color: getTimerColor() }]}>
            {formatTime(timer)}
          </Text>
        </View>
      </LinearGradient>
      
      {/* Skipped Questions */}
      {skippedQuestions.length > 0 && (
        <View style={styles.skippedWrapper}>
          <Text style={styles.skippedLabel}>Skipped Questions:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.skippedContainer}>
            {skippedQuestions.map((qIndex) => (
              <TouchableOpacity 
                key={qIndex} 
                style={[
                  styles.skippedButton,
                  currentIndex === qIndex && styles.currentSkippedButton
                ]} 
                onPress={() => setCurrentIndex(qIndex)}
              >
                <Text style={styles.skippedText}>{qIndex + 1}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
      
      {/* Question Card */}
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{questions[currentIndex].question}</Text>
        
        {/* Options */}
        <View style={styles.optionsContainer}>
          {["option1", "option2", "option3", "option4"].map((option, index) => {
            const isSelected = selectedOption[currentIndex] === questions[currentIndex][option];
            
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  isSelected && styles.selectedOptionButton
                ]}
                onPress={() => handleSelectOption(questions[currentIndex][option])}
              >
                <View style={[
                  styles.optionBullet,
                  isSelected && styles.selectedOptionBullet
                ]}>
                  <Text style={[
                    styles.optionBulletText,
                    isSelected && styles.selectedOptionBulletText
                  ]}>{String.fromCharCode(65 + index)}</Text>
                </View>
                <Text style={[
                  styles.optionText,
                  isSelected && styles.selectedOptionText
                ]}>{questions[currentIndex][option]}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      
      {/* Navigation Buttons */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity 
          style={[
            styles.navButton,
            currentIndex === 0 && styles.navButtonDisabled
          ]} 
          onPress={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
        >
          <Text style={styles.navText}>Previous</Text>
        </TouchableOpacity>

        {currentIndex + 1 === questions.length ? (
          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={handleSubmitFinal}
          >
            <Text style={styles.submitText}>Submit Quiz</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            style={[
              styles.navButton,
              !selectedOption[currentIndex] && styles.navButtonDisabled
            ]} 
            onPress={handleSubmit} 
            disabled={!selectedOption[currentIndex]}
          >
            <Text style={styles.navText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  loadingText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:55,
  },
  progressContainer: {
    flex: 1,
  },
  progressText: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 3,
  },
  timerContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 16,
  },
  timerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  skippedWrapper: {
    marginTop: 16,
    paddingHorizontal: 20,
  },
  skippedLabel: {
    fontSize: 14,
    color: COLORS.text.secondary,
    marginBottom: 8,
  },
  skippedContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  skippedButton: {
    backgroundColor: COLORS.inactive,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  currentSkippedButton: {
    backgroundColor: COLORS.secondary,
  },
  skippedText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  questionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  questionText: {
    fontSize: 18,
    color: COLORS.text.primary,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 24,
  },
  optionsContainer: {
    marginTop: 8,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.inactive,
    borderRadius: 12,
  },
  selectedOptionButton: {
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(108, 99, 255, 0.05)',
  },
  optionBullet: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.inactive,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  selectedOptionBullet: {
    backgroundColor: COLORS.primary,
  },
  optionBulletText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  selectedOptionBulletText: {
    color: COLORS.white,
  },
  optionText: {
    flex: 1,
    color: COLORS.text.primary,
    fontSize: 16,
  },
  selectedOptionText: {
    color: COLORS.primary,
    fontWeight: '500',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 'auto',
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  navButtonDisabled: {
    backgroundColor: COLORS.inactive,
  },
  navText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  submitButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  submitText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  
  // Results styles
  resultHeader: {
    padding: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  resultTitle: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scoreCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  scoreText: {
    color: COLORS.text.secondary,
    fontSize: 16,
  },
  scoreValue: {
    color: COLORS.text.primary,
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  scorePercentage: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    padding: 20,
  },
  resultCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultStatusBar: {
    height: 8,
  },
  correctStatusBar: {
    backgroundColor: COLORS.success,
  },
  incorrectStatusBar: {
    backgroundColor: COLORS.error,
  },
  skippedStatusBar: {
    backgroundColor: COLORS.warning,
  },
  resultCardContent: {
    padding: 16,
  },
  resultQuestionText: {
    fontSize: 16,
    color: COLORS.text.primary,
    fontWeight: '600',
    marginBottom: 12,
  },
  answerRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  answerLabel: {
    width: 100,
    fontSize: 14,
    color: COLORS.text.secondary,
  },
  answerText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  correctText: {
    color: COLORS.success,
  },
  incorrectText: {
    color: COLORS.error,
  },
  skippedText: {
    color: COLORS.warning,
  },
  explanationButton: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  explanationButtonText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  explanationContainer: {
    backgroundColor: 'rgba(108, 99, 255, 0.05)',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  explanationText: {
    color: COLORS.text.primary,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default TestScreenAptitude;