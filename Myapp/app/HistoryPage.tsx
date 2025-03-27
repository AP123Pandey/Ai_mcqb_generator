// // import React, { useEffect, useState } from 'react';
// // import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import axios from 'axios';

// // const QuizHistory = () => {
// //     const [quizHistory, setQuizHistory] = useState([]);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         const fetchQuizHistory = async () => {
// //             try {
// //                 const user = await AsyncStorage.getItem('user');
// //                 if (!user) throw new Error('User not logged in');

// //                 const { id: loggedInUserId } = JSON.parse(user);
// //                 const response = await axios.get(`http://192.168.86.29:6000/quiz-result/${loggedInUserId}`);
                
// //                 setQuizHistory(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching quiz history:', error);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchQuizHistory();
// //     }, []);

// //     if (loading) {
// //         return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
// //     }

// //     return (
// //         <View style={styles.container}>
// //             <Text style={styles.title}>Quiz History</Text>
// //             <FlatList
// //                 data={quizHistory}
// //                 keyExtractor={(item) => item.id.toString()}
// //                 renderItem={({ item }) => (
// //                     <View style={styles.card}>
// //                         <Text style={styles.question}>Q: {item.question}</Text>
// //                         <Text style={styles.wrongAnswer}>Your Answer: {item.selected_answer}</Text>
// //                         <Text style={styles.correctAnswer}>Correct Answer: {item.correct_answer}</Text>
// //                     </View>
// //                 )}
// //             />
// //         </View>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         padding: 20,
// //         backgroundColor: '#f8f9fa',
// //     },
// //     title: {
// //         fontSize: 24,
// //         fontWeight: 'bold',
// //         marginBottom: 10,
// //         textAlign: 'center',
// //     },
// //     card: {
// //         backgroundColor: '#ffffff',
// //         padding: 15,
// //         borderRadius: 8,
// //         marginVertical: 8,
// //         elevation: 2,
// //     },
// //     question: {
// //         fontSize: 16,
// //         fontWeight: 'bold',
// //         color: '#333',
// //     },
// //     wrongAnswer: {
// //         fontSize: 14,
// //         color: 'red',
// //         fontWeight: 'bold',
// //     },
// //     correctAnswer: {
// //         fontSize: 14,
// //         color: 'green',
// //         fontWeight: 'bold',
// //     },
// //     loader: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //     },
// // });

// // export default QuizHistory;


// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const HistoryPage = () => {
//     const [quizHistory, setQuizHistory] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchQuizHistory = async () => {
//             try {
//                 const user = await AsyncStorage.getItem('user');
//                 if (!user) throw new Error('User not logged in');

//                 const { id: loggedInUserId } = JSON.parse(user);
//                 const response = await axios.get(`http://192.168.86.29:6000/quiz-result/${loggedInUserId}`);
                
//                 // Group questions into sets of 20
//                 const groupedTests = [];
//                 for (let i = 0; i < response.data.length; i += 20) {
//                     groupedTests.push(response.data.slice(i, i + 20));
//                 }

//                 setQuizHistory(groupedTests);
//             } catch (error) {
//                 console.error('Error fetching quiz history:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchQuizHistory();
//     }, []);

//     if (loading) {
//         return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
//     }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Quiz History</Text>
//             <FlatList
//                 data={quizHistory}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item, index }) => (
//                     <View style={styles.testCard}>
//                         <Text style={styles.testTitle}>{index + 1}st Test</Text>
//                         {item.map((question, qIndex) => (
//                             <View key={qIndex} style={styles.questionCard}>
//                                 <Text style={styles.question}>Q: {question.question}</Text>
//                                 <Text style={styles.wrongAnswer}>Your Answer: {question.selected_answer}</Text>
//                                 <Text style={styles.correctAnswer}>Correct Answer: {question.correct_answer}</Text>
//                             </View>
//                         ))}
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#f8f9fa',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         textAlign: 'center',
//     },
//     testCard: {
//         backgroundColor: '#ffffff',
//         padding: 15,
//         borderRadius: 8,
//         marginVertical: 10,
//         elevation: 3,
//     },
//     testTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#000',
//         textAlign: 'center',
//         marginBottom: 10,
//     },
//     questionCard: {
//         backgroundColor: '#f1f1f1',
//         padding: 10,
//         borderRadius: 5,
//         marginVertical: 5,
//     },
//     question: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     wrongAnswer: {
//         fontSize: 14,
//         color: 'red',
//         fontWeight: 'bold',
//     },
//     correctAnswer: {
//         fontSize: 14,
//         color: 'green',
//         fontWeight: 'bold',
//     },
//     loader: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

// export default HistoryPage;





// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const HistoryPage = () => {
//     const [quizHistory, setQuizHistory] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [expandedIndex, setExpandedIndex] = useState(null);

//     useEffect(() => {
//         const fetchQuizHistory = async () => {
//             try {
//                 const user = await AsyncStorage.getItem('user');
//                 if (!user) throw new Error('User not logged in');

//                 const { id: loggedInUserId } = JSON.parse(user);
//                 const response = await axios.get(`http://192.168.86.29:6000/quiz-result/${loggedInUserId}`);
                
//                 // Group questions into sets of 20
//                 const groupedTests = [];
//                 for (let i = 0; i < response.data.length; i += 20) {
//                     groupedTests.push(response.data.slice(i, i + 20));
//                 }

//                 setQuizHistory(groupedTests);
//             } catch (error) {
//                 console.error('Error fetching quiz history:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchQuizHistory();
//     }, []);

//     if (loading) {
//         return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
//     }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Quiz History</Text>
//             <FlatList
//                 data={quizHistory}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item, index }) => (
//                     <View style={styles.testCard}>
//                         {/* Small Card for Test Name */}
//                         <TouchableOpacity
//                             style={styles.testButton}
//                             onPress={() => setExpandedIndex(expandedIndex === index ? null : index)}
//                         >
//                             <Text style={styles.testTitle}>{index + 1}st Test</Text>
//                         </TouchableOpacity>

//                         {/* Expand and Show 20 Questions if Clicked */}
//                         {expandedIndex === index && (
//                             <View style={styles.expandedCard}>
//                                 {item.map((question, qIndex) => (
//                                     <View key={qIndex} style={styles.questionCard}>
//                                         <Text style={styles.question}>Q: {question.question}</Text>
//                                         <Text style={styles.wrongAnswer}>Your Answer: {question.selected_answer}</Text>
//                                         <Text style={styles.correctAnswer}>Correct Answer: {question.correct_answer}</Text>
//                                     </View>
//                                 ))}
//                             </View>
//                         )}
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#f8f9fa',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         textAlign: 'center',
//     },
//     testCard: {
//         marginVertical: 8,
//         borderRadius: 8,
//         backgroundColor: '#fff',
//         elevation: 3,
//         overflow: 'hidden',
//     },
//     testButton: {
//         padding: 15,
//         backgroundColor: '#007bff',
//         borderRadius: 8,
//     },
//     testTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#fff',
//         textAlign: 'center',
//     },
//     expandedCard: {
//         backgroundColor: '#f1f1f1',
//         padding: 10,
//     },
//     questionCard: {
//         backgroundColor: '#ffffff',
//         padding: 10,
//         borderRadius: 5,
//         marginVertical: 5,
//         elevation: 2,
//     },
//     question: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     wrongAnswer: {
//         fontSize: 14,
//         color: 'red',
//         fontWeight: 'bold',
//     },
//     correctAnswer: {
//         fontSize: 14,
//         color: 'green',
//         fontWeight: 'bold',
//     },
//     loader: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

// export default HistoryPage;



import React, { useEffect, useState, useRef } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator, 
  TouchableOpacity, 
  Animated, 
  Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

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
  info: '#74B9FF'
};

// Simple gradient component to replace LinearGradient
const GradientView = ({ style, colors, children }) => {
  return (
    <View style={[style, { backgroundColor: colors[0] }]}>
      {children}
    </View>
  );
};

const HistoryPage = () => {
  const [quizHistory, setQuizHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [stats, setStats] = useState({ totalTests: 0, avgScore: 0, bestScore: 0 });
  const [refreshing, setRefreshing] = useState(false);
  const [emptyState, setEmptyState] = useState(false);
  
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const expandAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
    
    fetchQuizHistory();
  }, []);

  const fetchQuizHistory = async () => {
    try {
      setRefreshing(true);
      const user = await AsyncStorage.getItem('user');
      if (!user) throw new Error('User not logged in');

      const { id: loggedInUserId } = JSON.parse(user);
      const response = await axios.get(`http://192.168.86.29:6000/quiz-result/${loggedInUserId}`);
      
      if (response.data.length === 0) {
        setEmptyState(true);
        setQuizHistory([]);
      } else {
        setEmptyState(false);
        // Group questions into sets of 20
        const groupedTests = [];
        for (let i = 0; i < response.data.length; i += 20) {
          groupedTests.push(response.data.slice(i, i + 20));
        }

        setQuizHistory(groupedTests);
        
        // Calculate statistics
        const totalTests = groupedTests.length;
        let totalCorrect = 0;
        let bestScore = 0;
        
        groupedTests.forEach(test => {
          const correctCount = test.filter(q => q.selected_answer === q.correct_answer).length;
          const score = (correctCount / test.length) * 100;
          totalCorrect += correctCount;
          bestScore = Math.max(bestScore, score);
        });
        
        const avgScore = totalTests ? (totalCorrect / (totalTests * 20)) * 100 : 0;
        
        setStats({
          totalTests,
          avgScore: Math.round(avgScore),
          bestScore: Math.round(bestScore)
        });
      }
    } catch (error) {
      console.error('Error fetching quiz history:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      // Collapse
      Animated.timing(expandAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpandedIndex(null));
    } else {
      // Expand
      setExpandedIndex(index);
      Animated.timing(expandAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return COLORS.success;
    if (score >= 60) return COLORS.info;
    if (score >= 40) return COLORS.warning;
    return COLORS.error;
  };

  const getOrdinal = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = number % 100;
    return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  };

  const calculateScore = (test) => {
    const correctCount = test.filter(q => q.selected_answer === q.correct_answer).length;
    return Math.round((correctCount / test.length) * 100);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "No date";
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} style={{ transform: [{ scale: 2 }] }} />
        <Text style={styles.loaderText}>Loading your quiz history...</Text>
      </View>
    );
  }

  if (emptyState) {
    return (
      <View style={styles.emptyContainer}>
        <FontAwesome5 name="clipboard-check" size={80} color={COLORS.inactive} />
        <Text style={styles.emptyTitle}>No Quizzes Yet</Text>
        <Text style={styles.emptySubtitle}>Complete your first quiz to see your history here!</Text>
        <TouchableOpacity 
          style={styles.startButton} 
          onPress={() => console.log('Navigate to QuizCategories')}
        >
          <GradientView
            colors={[COLORS.gradient.start, COLORS.gradient.end]}
            style={styles.gradientButton}
          >
            <Text style={styles.startButtonText}>Start a Quiz</Text>
          </GradientView>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Animated.View 
      style={[
        styles.container,
        {
          transform: [{ scale: scaleAnim }],
          opacity: opacityAnim
        }
      ]}
    >
      <GradientView
        colors={[COLORS.gradient.start, COLORS.gradient.end]}
        style={styles.header}
      >
        <Text style={styles.title}>Quiz History</Text>
        <Text style={styles.subtitle}>Track your progress over time</Text>
      </GradientView>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <FontAwesome5 name="clipboard-list" size={24} color={COLORS.primary} />
          <Text style={styles.statValue}>{stats.totalTests}</Text>
          <Text style={styles.statLabel}>Total Tests</Text>
        </View>
        <View style={styles.statBox}>
          <FontAwesome5 name="chart-line" size={24} color={COLORS.secondary} />
          <Text style={styles.statValue}>{stats.avgScore}%</Text>
          <Text style={styles.statLabel}>Avg Score</Text>
        </View>
        <View style={styles.statBox}>
          <FontAwesome5 name="trophy" size={24} color={COLORS.warning} />
          <Text style={styles.statValue}>{stats.bestScore}%</Text>
          <Text style={styles.statLabel}>Best Score</Text>
        </View>
      </View>

      <FlatList
        data={quizHistory}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onRefresh={fetchQuizHistory}
        refreshing={refreshing}
        renderItem={({ item, index }) => {
          const score = calculateScore(item);
          const scoreColor = getScoreColor(score);
          const testDate = item[0]?.created_at;
          
          return (
            <Animated.View 
              style={[
                styles.testCard,
                {
                  transform: [{ scale: 1 }],
                  opacity: 1
                }
              ]}
            >
              <TouchableOpacity
                style={styles.testButton}
                onPress={() => toggleExpand(index)}
                activeOpacity={0.9}
              >
                <View style={styles.testHeader}>
                  <View>
                    <Text style={styles.testTitle}>{getOrdinal(index + 1)} Test</Text>
                    <Text style={styles.testDate}>{formatDate(testDate)}</Text>
                  </View>
                  
                  <View style={styles.scoreContainer}>
                    <View style={[styles.scoreCircle, { borderColor: scoreColor }]}>
                      <Text style={[styles.scoreText, { color: scoreColor }]}>{score}%</Text>
                    </View>
                    <MaterialIcons 
                      name={expandedIndex === index ? "expand-less" : "expand-more"} 
                      size={24} 
                      color={COLORS.text.secondary} 
                    />
                  </View>
                </View>
              </TouchableOpacity>

              {expandedIndex === index && (
                <Animated.View 
                  style={[styles.expandedCard, {
                    maxHeight: expandAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1000]
                    })
                  }]}
                >
                  <View style={styles.questionsList}>
                    {item.map((question, qIndex) => {
                      const isCorrect = question.selected_answer === question.correct_answer;
                      
                      return (
                        <Animated.View 
                          key={qIndex} 
                          style={[styles.questionCard, isCorrect ? styles.correctCard : styles.incorrectCard]}
                        >
                          <View style={styles.questionHeader}>
                            <Text style={styles.questionNumber}>Question {qIndex + 1}</Text>
                            <FontAwesome5 
                              name={isCorrect ? "check-circle" : "times-circle"} 
                              size={18} 
                              color={isCorrect ? COLORS.success : COLORS.error} 
                            />
                          </View>
                          <Text style={styles.question}>{question.question}</Text>
                          
                          <View style={styles.answerContainer}>
                            <Text style={styles.answerLabel}>Your Answer:</Text>
                            <Text style={[
                              styles.answer, 
                              isCorrect ? styles.correctAnswer : styles.wrongAnswer
                            ]}>
                              {question.selected_answer || "No answer selected"}
                            </Text>
                          </View>
                          
                          {!isCorrect && (
                            <View style={styles.answerContainer}>
                              <Text style={styles.answerLabel}>Correct Answer:</Text>
                              <Text style={styles.correctAnswer}>{question.correct_answer}</Text>
                            </View>
                          )}
                        </Animated.View>
                      );
                    })}
                  </View>
                </Animated.View>
              )}
            </Animated.View>
          );
        }}
        ListFooterComponent={<View style={{ height: 20 }} />}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 8,
    shadowColor: COLORS.gradient.end,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  title: {
    fontSize: 28,
    marginTop: 10,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.9,
    textAlign: 'center',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 16,
  },
  statBox: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    width: width / 3 - 22,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.text.secondary,
    marginTop: 2,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  testCard: {
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  testButton: {
    padding: 16,
  },
  testHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  testTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  testDate: {
    fontSize: 12,
    color: COLORS.text.secondary,
    marginTop: 4,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  expandedCard: {
    backgroundColor: '#f8f8f8',
    overflow: 'hidden',
  },
  questionsList: {
    padding: 12,
  },
  questionCard: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 12,
    marginVertical: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderLeftWidth: 4,
  },
  correctCard: {
    borderLeftColor: COLORS.success,
  },
  incorrectCard: {
    borderLeftColor: COLORS.error,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  questionNumber: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.text.secondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.text.primary,
    marginBottom: 12,
  },
  answerContainer: {
    marginTop: 8,
  },
  answerLabel: {
    fontSize: 12,
    color: COLORS.text.secondary,
    marginBottom: 4,
  },
  answer: {
    fontSize: 14,
    fontWeight: '500',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  wrongAnswer: {
    backgroundColor: 'rgba(255, 118, 117, 0.1)',
    color: COLORS.error,
  },
  correctAnswer: {
    backgroundColor: 'rgba(0, 184, 148, 0.1)',
    color: COLORS.success,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  loaderText: {
    fontSize: 16,
    color: COLORS.text.secondary,
    marginTop: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 32,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginTop: 16,
  },
  emptySubtitle: {
    fontSize: 16,
    color: COLORS.text.secondary,
    marginTop: 8,
    textAlign: 'center',
    marginBottom: 24,
  },
  startButton: {
    width: '80%',
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: COLORS.gradient.end,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  gradientButton: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HistoryPage;