

// // import React, { useState, useRef } from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Animated, Easing } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';

// // const flashcards = [
// //   {
// //     question: "What is the domain of the function shown in the mapping?",
// //     answer: "The domain is the set of all possible input values (x)."
// //   },
// //   {
// //     question: "What is the range of the function?",
// //     answer: "The range is the set of all possible output values (y)."
// //   },
// //   // Add more flashcards as needed...
// // ];

// // const FlashcardComponent = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [showAnswer, setShowAnswer] = useState(false);
// //   const flipAnim = useRef(new Animated.Value(0)).current;

// //   const toggleCard = () => {
// //     Animated.timing(flipAnim, {
// //       toValue: showAnswer ? 0 : 1,
// //       duration: 400,
// //       easing: Easing.linear,
// //       useNativeDriver: true,
// //     }).start();
// //     setShowAnswer(!showAnswer);
// //   };

// //   const rotateY = flipAnim.interpolate({
// //     inputRange: [0, 1],
// //     outputRange: ['0deg', '360deg'],
// //   });

// //   const nextCard = () => {
// //     if (currentIndex < flashcards.length - 1) {
// //       setCurrentIndex(currentIndex + 1);
// //       setShowAnswer(false);
// //       flipAnim.setValue(0); // Reset animation
// //     }
// //   };

// //   const previousCard = () => {
// //     if (currentIndex > 0) {
// //       setCurrentIndex(currentIndex - 1);
// //       setShowAnswer(false);
// //       flipAnim.setValue(0); // Reset animation
// //     }
// //   };

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="dark-content" />

// //       <View style={styles.header}>
// //         <Text style={styles.headerText}>{currentIndex + 1} / {flashcards.length}</Text>
// //       </View>

// //       <TouchableOpacity style={styles.card} onPress={toggleCard}>
// //         <Animated.View style={[styles.card, { transform: [{ rotateY }] }]}>
// //           {/* Question */}
// //           <Animated.View style={{ opacity: showAnswer ? 0 : 1 }}>
// //             <Text style={styles.questionText}>
// //               {flashcards[currentIndex].question}
// //             </Text>
// //           </Animated.View>
          
// //           {/* Answer */}
// //           <Animated.View style={{ opacity: showAnswer ? 1 : 0 }}>
// //             <Text style={styles.questionText}>
// //               {flashcards[currentIndex].answer}
// //             </Text>
// //           </Animated.View>
// //         </Animated.View>
// //       </TouchableOpacity>

// //       <View style={styles.footer}>
// //         <View style={styles.scoreContainer}>
// //           <Text style={styles.scoreText}>0</Text>
// //           <Text style={styles.scoreText}>0</Text>
// //         </View>

// //         <TouchableOpacity style={styles.btn} onPress={previousCard} disabled={currentIndex === 0}>
// //           <Text style={styles.btnText}>◀</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.btn} onPress={nextCard} disabled={currentIndex === flashcards.length - 1}>
// //           <Text style={styles.btnText}>▶</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f0f0f0',
// //   },
// //   header: {
// //     padding: 10,
// //     backgroundColor: '#fff',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   headerText: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   card: {
// //     flex: 1,
// //     backgroundColor: '#ffffff',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     margin: 15,
// //     borderRadius: 10,
// //     elevation: 5,
// //     padding: 20,
// //   },
// //   questionText: {
// //     fontSize: 16,
// //     textAlign: 'center',
// //   },
// //   footer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 20,
// //   },
// //   scoreContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     width: '20%',
// //   },
// //   scoreText: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   btn: {
// //     backgroundColor: '#e0e0e0',
// //     borderRadius: 5,
// //     padding: 10,
// //     alignItems: 'center',
// //   },
// //   btnText: {
// //     fontSize: 18,
// //   },
// // });

// // export default FlashcardComponent;


// import React, { useState, useRef, useCallback } from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TouchableOpacity, 
//   StatusBar, 
//   Animated, 
//   Easing, 
//   Dimensions,
//   Modal,
//   TextInput 
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';

// const { width, height } = Dimensions.get('window');

// const INITIAL_FLASHCARDS = [
//   {
//     id: '1',
//     question: "What is the domain of a function?",
//     answer: "The domain is the set of all possible input values (x).",
//     category: "Mathematics",
//     difficulty: "Easy"
//   },
//   {
//     id: '2',
//     question: "What is the range of a function?",
//     answer: "The range is the set of all possible output values (y).",
//     category: "Mathematics",
//     difficulty: "Easy"
//   },
// ];

// export const FlashcardComponent = () => {
//   const [flashcards, setFlashcards] = useState(INITIAL_FLASHCARDS);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showAnswer, setShowAnswer] = useState(false);
//   const [isAddModalVisible, setAddModalVisible] = useState(false);
//   const [newCard, setNewCard] = useState({ question: '', answer: '', category: '', difficulty: 'Easy' });
//   const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  
//   const flipAnim = useRef(new Animated.Value(0)).current;
//   const cardOpacity = useRef(new Animated.Value(1)).current;

//   const toggleCard = useCallback(() => {
//     Animated.parallel([
//       Animated.timing(flipAnim, {
//         toValue: showAnswer ? 0 : 1,
//         duration: 400,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       }),
//       Animated.timing(cardOpacity, {
//         toValue: 0.7,
//         duration: 200,
//         useNativeDriver: true,
//       })
//     ]).start(() => {
//       Animated.timing(cardOpacity, {
//         toValue: 1,
//         duration: 200,
//         useNativeDriver: true,
//       }).start();
//     });
//     setShowAnswer(!showAnswer);
//   }, [showAnswer, flipAnim, cardOpacity]);

//   const rotateY = flipAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   const nextCard = useCallback(() => {
//     if (currentIndex < flashcards.length - 1) {
//       setCurrentIndex(prev => prev + 1);
//       setShowAnswer(false);
//       flipAnim.setValue(0);
//     }
//   }, [currentIndex, flashcards]);

//   const previousCard = useCallback(() => {
//     if (currentIndex > 0) {
//       setCurrentIndex(prev => prev - 1);
//       setShowAnswer(false);
//       flipAnim.setValue(0);
//     }
//   }, [currentIndex]);

//   const handleScore = (isCorrect) => {
//     setScore(prev => ({
//       correct: isCorrect ? prev.correct + 1 : prev.correct,
//       incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect
//     }));
//     nextCard();
//   };

//   const addNewCard = () => {
//     if (newCard.question && newCard.answer) {
//       setFlashcards(prev => [
//         ...prev, 
//         { 
//           id: `${prev.length + 1}`, 
//           ...newCard 
//         }
//       ]);
//       setNewCard({ question: '', answer: '', category: '', difficulty: 'Easy' });
//       setAddModalVisible(false);
//     }
//   };

//   const renderAddCardModal = () => (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={isAddModalVisible}
//       onRequestClose={() => setAddModalVisible(false)}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Add New Flashcard</Text>
//           <TextInput
//             placeholder="Question"
//             value={newCard.question}
//             onChangeText={(text) => setNewCard(prev => ({ ...prev, question: text }))}
//             style={styles.input}
//             multiline
//           />
//           <TextInput
//             placeholder="Answer"
//             value={newCard.answer}
//             onChangeText={(text) => setNewCard(prev => ({ ...prev, answer: text }))}
//             style={styles.input}
//             multiline
//           />
//           <TextInput
//             placeholder="Category"
//             value={newCard.category}
//             onChangeText={(text) => setNewCard(prev => ({ ...prev, category: text }))}
//             style={styles.input}
//           />
//           <TouchableOpacity 
//             style={styles.addButton} 
//             onPress={addNewCard}
//           >
//             <Text style={styles.addButtonText}>Add Card</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />

//       <View style={styles.header}>
//         <Text style={styles.headerText}>
//           Flashcard Study: {currentIndex + 1} / {flashcards.length}
//         </Text>
//         <TouchableOpacity onPress={() => setAddModalVisible(true)}>
//           <Icon name="add-circle" size={30} color="black" />
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity 
//         style={styles.cardContainer} 
//         onPress={toggleCard}
//       >
//         <Animated.View 
//           style={[
//             styles.card, 
//             { 
//               opacity: cardOpacity,
//               transform: [{ rotateY }] 
//             }
//           ]}
//         >
//           <Text style={styles.categoryText}>
//             {flashcards[currentIndex].category || 'Uncategorized'}
//           </Text>
          
//           <Text style={styles.difficultText}>
//             {flashcards[currentIndex].difficulty}
//           </Text>

//           <Text style={styles.questionText}>
//             {showAnswer 
//               ? flashcards[currentIndex].answer 
//               : flashcards[currentIndex].question}
//           </Text>
//         </Animated.View>
//       </TouchableOpacity>

//       <View style={styles.footer}>
//         <View style={styles.scoreContainer}>
//           <Text style={styles.scoreText}>✓ {score.correct}</Text>
//           <Text style={styles.scoreText}>✗ {score.incorrect}</Text>
//         </View>

//         <View style={styles.navigationContainer}>
//           <TouchableOpacity 
//             style={styles.navBtn} 
//             onPress={previousCard} 
//             disabled={currentIndex === 0}
//           >
//             <Icon name="arrow-back" size={24} color="#333" />
//           </TouchableOpacity>

//           <View style={styles.scoreButtonsContainer}>
//             <TouchableOpacity 
//               style={styles.correctBtn} 
//               onPress={() => handleScore(true)}
//             >
//               <Text style={styles.btnText}>✓ Correct</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               style={styles.incorrectBtn} 
//               onPress={() => handleScore(false)}
//             >
//               <Text style={styles.btnText}>✗ Incorrect</Text>
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity 
//             style={styles.navBtn} 
//             onPress={nextCard} 
//             disabled={currentIndex === flashcards.length - 1}
//           >
//             <Icon name="arrow-forward" size={24} color="#333" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {renderAddCardModal()}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     paddingHorizontal: 20,
//     backgroundColor: 'white',
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   cardContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   card: {
//     width: width * 0.9,
//     height: height * 0.6,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 10,
//     backfaceVisibility: 'hidden',
//   },
//   questionText: {
//     fontSize: 20,
//     textAlign: 'center',
//     color: '#333',
//     fontWeight: '500',
//   },
//   categoryText: {
//     position: 'absolute',
//     top: 15,
//     left: 15,
//     fontSize: 14,
//     color: '#666',
//   },
//   difficultText: {
//     position: 'absolute',
//     top: 15,
//     right: 15,
//     fontSize: 14,
//     color: '#666',
//   },
//   footer: {
//     padding: 20,
//   },
//   scoreContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 15,
//   },
//   scoreText: {
//     fontSize: 18,
//     marginHorizontal: 10,
//     fontWeight: 'bold',
//   },
//   navigationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   navBtn: {
//     padding: 10,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 10,
//   },
//   scoreButtonsContainer: {
//     flexDirection: 'row',
//   },
//   correctBtn: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   incorrectBtn: {
//     backgroundColor: '#F44336',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 10,
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   // Modal Styles
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: width * 0.9,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//   },
//   modalTitle: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 10,
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   }
// });

// export default FlashcardComponent;







































import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar, 
  Animated, 
  Easing, 
  Dimensions,
  Modal,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

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
  success: '#00D68F',
  error: '#FF647C',
  warning: '#FFAA00',
  card: {
    easy: '#6C63FF20',
    medium: '#FFAA0020',
    hard: '#FF647C20'
  }
};

const DIFFICULTY_COLORS = {
  'Easy': COLORS.primary,
  'Medium': COLORS.warning,
  'Hard': COLORS.error
};

const INITIAL_FLASHCARDS = [
  {
    id: '1',
    question: "What is the domain of a function?",
    answer: "The domain is the set of all possible input values (x).",
    category: "Mathematics",
    difficulty: "Easy",
    lastReviewed: new Date().toISOString(),
    starred: false
  },
  {
    id: '2',
    question: "What is the range of a function?",
    answer: "The range is the set of all possible output values (y).",
    category: "Mathematics",
    difficulty: "Easy",
    lastReviewed: new Date().toISOString(),
    starred: false
  },
  {
    id: '3',
    question: "What is a function in mathematics?",
    answer: "A function is a relation where each input has a unique output.",
    category: "Mathematics",
    difficulty: "Easy",
    lastReviewed: new Date().toISOString(),
    starred: false
  },
  {
    id: '4',
    question: "What is a linear function?",
    answer: "A function that graphs to a straight line, represented as f(x) = mx + b.",
    category: "Mathematics",
    difficulty: "Hard",
    lastReviewed: new Date().toISOString(),
    starred: false
  },
  {
    id: '5',
    question: "What is the slope of a linear function?",
    answer: "The slope (m) is the rate of change of the function, given by rise/run.",
    category: "Mathematics",
    difficulty: "Easy",
    lastReviewed: new Date().toISOString(),
    starred: false
  }
];


export const FlashcardComponent = () => {
  const [flashcards, setFlashcards] = useState(INITIAL_FLASHCARDS);
  const [filteredCards, setFilteredCards] = useState(INITIAL_FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [isLibraryVisible, setLibraryVisible] = useState(false);
  const [isConfettiVisible, setConfettiVisible] = useState(false);
  const [newCard, setNewCard] = useState({ 
    question: '', 
    answer: '', 
    category: '', 
    difficulty: 'Easy',
    starred: false
  });
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [filter, setFilter] = useState({
    categories: [],
    difficulties: ['Easy', 'Medium', 'Hard'],
    showStarredOnly: false,
  });
  
  const flipAnim = useRef(new Animated.Value(0)).current;
  const cardOpacity = useRef(new Animated.Value(1)).current;
  const cardScale = useRef(new Animated.Value(1)).current;
  const confettiAnim = useRef(null);

  // Effect to filter cards when filters change
  useEffect(() => {
    const filtered = flashcards.filter(card => {
      const categoryMatch = filter.categories.length === 0 || 
        filter.categories.includes(card.category);
      const difficultyMatch = filter.difficulties.includes(card.difficulty);
      const starMatch = !filter.showStarredOnly || card.starred;
      
      return categoryMatch && difficultyMatch && starMatch;
    });
    
    setFilteredCards(filtered);
    setCurrentIndex(0);
    setShowAnswer(false);
    flipAnim.setValue(0);
  }, [filter, flashcards]);

  // Get all unique categories for filtering
  const allCategories = [...new Set(flashcards.map(card => card.category))];

  const toggleCard = useCallback(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(cardScale, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(cardOpacity, {
          toValue: 0.7,
          duration: 150,
          useNativeDriver: true,
        })
      ]),
      Animated.timing(flipAnim, {
        toValue: showAnswer ? 0 : 1,
        duration: 400,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(cardScale, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(cardOpacity, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        })
      ])
    ]).start();
    
    setShowAnswer(!showAnswer);
  }, [showAnswer, flipAnim, cardOpacity, cardScale]);

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '90deg', '180deg'],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['180deg', '270deg', '360deg'],
  });

  const frontOpacity = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 0],
  });

  const backOpacity = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  const nextCard = useCallback(() => {
    if (currentIndex < filteredCards.length - 1) {
      Animated.sequence([
        Animated.timing(cardOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(cardOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        })
      ]).start();
      
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
      flipAnim.setValue(0);
    }
  }, [currentIndex, filteredCards]);

  const previousCard = useCallback(() => {
    if (currentIndex > 0) {
      Animated.sequence([
        Animated.timing(cardOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(cardOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        })
      ]).start();
      
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
      flipAnim.setValue(0);
    }
  }, [currentIndex]);

  const handleScore = (isCorrect) => {
    setScore(prev => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect
    }));
    
    // Show confetti for correct answers
    if (isCorrect) {
      setConfettiVisible(true);
      setTimeout(() => setConfettiVisible(false), 2000);
      if (confettiAnim.current) {
        confettiAnim.current.play();
      }
    }
    
    // Mark as reviewed
    const updatedCards = [...flashcards];
    const currentCardIndex = flashcards.findIndex(
      card => card.id === filteredCards[currentIndex].id
    );
    
    if (currentCardIndex !== -1) {
      updatedCards[currentCardIndex] = {
        ...updatedCards[currentCardIndex],
        lastReviewed: new Date().toISOString()
      };
      setFlashcards(updatedCards);
    }
    
    nextCard();
  };

  const toggleStarCard = () => {
    const updatedCards = [...flashcards];
    const currentCardIndex = flashcards.findIndex(
      card => card.id === filteredCards[currentIndex].id
    );
    
    if (currentCardIndex !== -1) {
      updatedCards[currentCardIndex] = {
        ...updatedCards[currentCardIndex],
        starred: !updatedCards[currentCardIndex].starred
      };
      setFlashcards(updatedCards);
    }
  };

  const addNewCard = () => {
    if (newCard.question && newCard.answer) {
      setFlashcards(prev => [
        ...prev, 
        { 
          id: `${prev.length + 1}`, 
          ...newCard,
          lastReviewed: new Date().toISOString() 
        }
      ]);
      setNewCard({ 
        question: '', 
        answer: '', 
        category: '', 
        difficulty: 'Easy',
        starred: false
      });
      setAddModalVisible(false);
    }
  };

  const deleteCard = (id) => {
    setFlashcards(prev => prev.filter(card => card.id !== id));
    if (isLibraryVisible) {
      // Stay in library view
    } else if (filteredCards.length <= 1) {
      // If it was the last card, go back to filters
      setFilterModalVisible(true);
    } else if (currentIndex === filteredCards.length - 1) {
      // If it was the last card, go to previous
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Difficulty selector component
  const DifficultySelector = ({ value, onChange }) => (
    <View style={styles.difficultySelector}>
      {['Easy', 'Medium', 'Hard'].map((level) => (
        <TouchableOpacity
          key={level}
          style={[
            styles.difficultyOption,
            { 
              backgroundColor: value === level 
                ? DIFFICULTY_COLORS[level] 
                : COLORS.inactive + '40'
            }
          ]}
          onPress={() => onChange(level)}
        >
          <Text style={[
            styles.difficultyText,
            { color: value === level ? COLORS.white : COLORS.text.secondary }
          ]}>
            {level}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  // Modal for adding new cards
  const renderAddCardModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isAddModalVisible}
      onRequestClose={() => setAddModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={() => setAddModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
            <View style={styles.modalContent}>
              <LinearGradient
                colors={[COLORS.gradient.start, COLORS.gradient.end]}
                style={styles.modalHeader}
              >
                <Text style={styles.modalTitle}>Create New Flashcard</Text>
                <TouchableOpacity onPress={() => setAddModalVisible(false)}>
                  <Icon name="close" size={24} color={COLORS.white} />
                </TouchableOpacity>
              </LinearGradient>
              
              <ScrollView style={styles.modalBody}>
                <Text style={styles.inputLabel}>Question</Text>
                <TextInput
                  placeholder="Enter your question"
                  value={newCard.question}
                  onChangeText={(text) => setNewCard(prev => ({ ...prev, question: text }))}
                  style={styles.input}
                  multiline
                />
                
                <Text style={styles.inputLabel}>Answer</Text>
                <TextInput
                  placeholder="Enter your answer"
                  value={newCard.answer}
                  onChangeText={(text) => setNewCard(prev => ({ ...prev, answer: text }))}
                  style={styles.input}
                  multiline
                />
                
                <Text style={styles.inputLabel}>Category</Text>
                <TextInput
                  placeholder="E.g., Mathematics, Science, History"
                  value={newCard.category}
                  onChangeText={(text) => setNewCard(prev => ({ ...prev, category: text }))}
                  style={styles.input}
                />
                
                <Text style={styles.inputLabel}>Difficulty</Text>
                <DifficultySelector 
                  value={newCard.difficulty} 
                  onChange={(difficulty) => setNewCard(prev => ({ ...prev, difficulty }))}
                />
                
                <View style={styles.starContainer}>
                  <Text style={styles.inputLabel}>Star this card?</Text>
                  <TouchableOpacity
                    onPress={() => setNewCard(prev => ({ ...prev, starred: !prev.starred }))}
                  >
                    <Icon 
                      name={newCard.starred ? "star" : "star-outline"} 
                      size={24} 
                      color={newCard.starred ? COLORS.warning : COLORS.inactive} 
                    />
                  </TouchableOpacity>
                </View>
              </ScrollView>
              
              <TouchableOpacity 
                style={styles.primaryButton} 
                onPress={addNewCard}
              >
                <Icon name="add-circle-outline" size={20} color={COLORS.white} />
                <Text style={styles.primaryButtonText}>Add Card</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  // Modal for filtering cards
  const renderFilterModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isFilterModalVisible}
      onRequestClose={() => setFilterModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={() => setFilterModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
            <View style={styles.modalContent}>
              <LinearGradient
                colors={[COLORS.gradient.start, COLORS.gradient.end]}
                style={styles.modalHeader}
              >
                <Text style={styles.modalTitle}>Filter Flashcards</Text>
                <TouchableOpacity onPress={() => setFilterModalVisible(false)}>
                  <Icon name="close" size={24} color={COLORS.white} />
                </TouchableOpacity>
              </LinearGradient>
              
              <ScrollView style={styles.modalBody}>
                <Text style={styles.inputLabel}>Categories</Text>
                <View style={styles.categoriesContainer}>
                  {allCategories.map((category) => (
                    <TouchableOpacity
                      key={category}
                      style={[
                        styles.categoryChip,
                        { 
                          backgroundColor: filter.categories.includes(category) 
                            ? COLORS.primary 
                            : COLORS.inactive + '40'
                        }
                      ]}
                      onPress={() => {
                        setFilter(prev => {
                          const newCategories = prev.categories.includes(category)
                            ? prev.categories.filter(c => c !== category)
                            : [...prev.categories, category];
                          return { ...prev, categories: newCategories };
                        });
                      }}
                    >
                      <Text 
                        style={[
                          styles.categoryChipText,
                          { color: filter.categories.includes(category) ? COLORS.white : COLORS.text.secondary }
                        ]}
                      >
                        {category || 'Uncategorized'}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                
                <Text style={styles.inputLabel}>Difficulty</Text>
                <View style={styles.difficultiesContainer}>
                  {['Easy', 'Medium', 'Hard'].map((difficulty) => (
                    <TouchableOpacity
                      key={difficulty}
                      style={[
                        styles.difficultyChip,
                        { 
                          backgroundColor: filter.difficulties.includes(difficulty) 
                            ? DIFFICULTY_COLORS[difficulty] 
                            : COLORS.inactive + '40'
                        }
                      ]}
                      onPress={() => {
                        setFilter(prev => {
                          const newDifficulties = prev.difficulties.includes(difficulty)
                            ? prev.difficulties.filter(d => d !== difficulty)
                            : [...prev.difficulties, difficulty];
                          return { ...prev, difficulties: newDifficulties };
                        });
                      }}
                    >
                      <Text 
                        style={[
                          styles.difficultyChipText,
                          { color: filter.difficulties.includes(difficulty) ? COLORS.white : COLORS.text.secondary }
                        ]}
                      >
                        {difficulty}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                
                <View style={styles.starredFilterContainer}>
                  <Text style={styles.inputLabel}>Show Starred Only</Text>
                  <TouchableOpacity
                    onPress={() => setFilter(prev => ({ ...prev, showStarredOnly: !prev.showStarredOnly }))}
                  >
                    <Icon 
                      name={filter.showStarredOnly ? "checkbox" : "square-outline"} 
                      size={24} 
                      color={filter.showStarredOnly ? COLORS.primary : COLORS.inactive} 
                    />
                  </TouchableOpacity>
                </View>
              </ScrollView>
              
              <TouchableOpacity 
                style={styles.primaryButton} 
                onPress={() => setFilterModalVisible(false)}
              >
                <Icon name="filter" size={20} color={COLORS.white} />
                <Text style={styles.primaryButtonText}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  // Library view (card listing)
  const renderLibraryModal = () => (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isLibraryVisible}
      onRequestClose={() => setLibraryVisible(false)}
    >
      <SafeAreaView style={styles.libraryContainer}>
        <LinearGradient
          colors={[COLORS.gradient.start, COLORS.gradient.end]}
          style={styles.libraryHeader}
        >
          <View style={styles.libraryHeaderContent}>
            <TouchableOpacity onPress={() => setLibraryVisible(false)}>
              <Icon name="arrow-back" size={24} color={COLORS.white} />
            </TouchableOpacity>
            <Text style={styles.libraryTitle}>Flashcard Library</Text>
            <TouchableOpacity onPress={() => setFilterModalVisible(true)}>
              <Icon name="filter" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        
        <FlatList
          data={filteredCards}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.libraryList}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.libraryCard}
              onPress={() => {
                const newIndex = filteredCards.findIndex(card => card.id === item.id);
                if (newIndex !== -1) {
                  setCurrentIndex(newIndex);
                  setShowAnswer(false);
                  flipAnim.setValue(0);
                  setLibraryVisible(false);
                }
              }}
            >
              <View style={[styles.libraryCardContent, { backgroundColor: COLORS.card[item.difficulty.toLowerCase()] || COLORS.card.easy }]}>
                <View style={styles.libraryCardHeader}>
                  <View style={styles.libraryCardMeta}>
                    <Text style={styles.libraryCardCategory}>{item.category || 'Uncategorized'}</Text>
                    <View style={[
                      styles.difficultyBadge, 
                      { backgroundColor: DIFFICULTY_COLORS[item.difficulty] }
                    ]}>
                      <Text style={styles.difficultyBadgeText}>{item.difficulty}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.libraryCardActions}>
                    {item.starred && (
                      <Icon name="star" size={18} color={COLORS.warning} style={styles.starIcon} />
                    )}
                    <TouchableOpacity
                      onPress={(e) => {
                        e.stopPropagation();
                        deleteCard(item.id);
                      }}
                    >
                      <Icon name="trash-outline" size={18} color={COLORS.error} />
                    </TouchableOpacity>
                  </View>
                </View>
                
                <Text style={styles.libraryCardQuestion} numberOfLines={2}>
                  {item.question}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        
        <TouchableOpacity 
          style={styles.floatingButton} 
          onPress={() => {
            setLibraryVisible(false);
            setAddModalVisible(true);
          }}
        >
          <LinearGradient
            colors={[COLORS.gradient.start, COLORS.gradient.end]}
            style={styles.floatingButtonInner}
          >
            <Icon name="add" size={30} color={COLORS.white} />
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );

  // Card count status
  const cardCountStatus = `${currentIndex + 1} / ${filteredCards.length}`;
  // Check if current card is starred
  const isCurrentCardStarred = filteredCards.length > 0 && 
    flashcards.find(card => card.id === filteredCards[currentIndex].id)?.starred;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.gradient.start} />

      <LinearGradient
        colors={[COLORS.gradient.start, COLORS.gradient.end]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => setLibraryVisible(true)}>
            <Icon name="library-outline" size={24} color={COLORS.white} />
          </TouchableOpacity>
          
          <Text style={styles.headerText}>
            Flashcard Study
          </Text>
          
          <TouchableOpacity onPress={() => setFilterModalVisible(true)}>
            <Icon name="filter" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.statusBar}>
        <View style={styles.statusBarContent}>
          <Text style={styles.cardCountText}>
            {cardCountStatus}
          </Text>
          
          <TouchableOpacity
            onPress={toggleStarCard}
            disabled={filteredCards.length === 0}
          >
            <Icon 
              name={isCurrentCardStarred ? "star" : "star-outline"} 
              size={24} 
              color={isCurrentCardStarred ? COLORS.warning : COLORS.inactive} 
            />
          </TouchableOpacity>
        </View>
      </View>

      {filteredCards.length > 0 ? (
        <TouchableWithoutFeedback onPress={toggleCard}>
          <View style={styles.cardContainer}>
            {isConfettiVisible && (
              <View style={styles.confettiContainer}>
                <LottieView
                  ref={confettiAnim}
                  // source={require('/correct-animation.json')} // You need to add this JSON file
                  autoPlay
                  loop={false}
                  style={styles.confetti}
                />
              </View>
            )}
            
            <Animated.View
              style={[
                styles.cardWrapper,
                { 
                  opacity: cardOpacity,
                  transform: [
                    { scale: cardScale }
                  ]
                }
              ]}
            >
              {/* Front of card */}
              <Animated.View 
                style={[
                  styles.card,
                  styles.cardFront,
                  { 
                    opacity: frontOpacity,
                    transform: [{ rotateY: frontInterpolate }],
                    backgroundColor: COLORS.card[filteredCards[currentIndex].difficulty.toLowerCase()] || COLORS.card.easy
                  }
                ]}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.categoryText}>
                    {filteredCards[currentIndex].category || 'Uncategorized'}
                  </Text>
                  
                  <View style={[
                    styles.difficultyBadge, 
                    { backgroundColor: DIFFICULTY_COLORS[filteredCards[currentIndex].difficulty] }
                  ]}>
                    <Text style={styles.difficultyBadgeText}>
                      {filteredCards[currentIndex].difficulty}
                    </Text>
                  </View>
                </View>

                <View style={styles.cardContent}>
                  <Text style={styles.questionText}>
                    {filteredCards[currentIndex].question}
                  </Text>
                </View>
                
                <View style={styles.cardFooter}>
                  <Icon name="sync" size={24} color={COLORS.text.secondary} />
                  <Text style={styles.tapInstructionText}>Tap to flip</Text>
                </View>
              </Animated.View>
              
              {/* Back of card */}
              <Animated.View 
                style={[
                  styles.card,
                  styles.cardBack,
                  { 
                    opacity: backOpacity,
                    transform: [{ rotateY: backInterpolate }],
                    backgroundColor: COLORS.white
                  }
                ]}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.categoryText}>
                    {filteredCards[currentIndex].category || 'Uncategorized'}
                  </Text>
                  
                  <View style={[
                    styles.difficultyBadge, 
                    { backgroundColor: DIFFICULTY_COLORS[filteredCards[currentIndex].difficulty] }
                  ]}>
                    <Text style={styles.difficultyBadgeText}>
                      {filteredCards[currentIndex].difficulty}
                    </Text>
                  </View>
                </View>
                
                <View style={styles.cardContent}>
                  <Text style={styles.answerText}>
                    {filteredCards[currentIndex].answer}
                  </Text>
                </View>
                
                <View style={styles.cardFooter}>
                  <Icon name="sync" size={24} color={COLORS.text.secondary} />
                  <Text style={styles.tapInstructionText}>Tap to flip</Text>
                </View>
              </Animated.View>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <View style={styles.emptyStateContainer}>
          <Icon name="sad-outline" size={60} color={COLORS.inactive} />
          <Text style={styles.emptyStateText}>No flashcards found with the current filters.</Text>
          <TouchableOpacity 
            style={styles.emptyStateButton} 
            onPress={() => setAddModalVisible(true)}
          >
            <Text style={styles.emptyStateButtonText}>Create New Flashcard</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.footer}>
        <View style={styles.scoreContainer}>
          <View style={styles.scoreItem}>
            <Icon name="checkmark-circle" size={22} color={COLORS.success} />
            <Text style={[styles.scoreText, { color: COLORS.success }]}>{score.correct}</Text>
          </View>
          <View style={styles.scoreItem}>
            <Icon name="close-circle" size={22} color={COLORS.error} />
            <Text style={[styles.scoreText, { color: COLORS.error }]}>{score.incorrect}</Text>
          </View>
        </View>

        {filteredCards.length > 0 && (
          <View style={styles.navigationContainer}>
            <TouchableOpacity 
              style={[
                styles.navBtn,
                currentIndex === 0 && styles.navBtnDisabled
              ]} 
              onPress={previousCard} 
              disabled={currentIndex === 0}
            >
              <Icon name="arrow-back" size={24} color={currentIndex === 0 ? COLORS.inactive : COLORS.text.primary} />
            </TouchableOpacity>

            <View style={styles.scoreButtonsContainer}>
              <TouchableOpacity 
                style={styles.correctBtn} 
                onPress={() => handleScore(true)}
              >
                <Icon name="checkmark" size={22} color={COLORS.white} />
                <Text style={styles.btnText}>Know</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.incorrectBtn} 
                onPress={() => handleScore(false)}
              >
                <Icon name="close" size={22} color={COLORS.white} />
                <Text style={styles.btnText}>Not Know</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={[
                styles.navBtn,
                currentIndex === filteredCards.length - 1 && styles.navBtnDisabled
              ]} 
              onPress={nextCard} 
              disabled={currentIndex === filteredCards.length - 1}
            >
              <Icon name="arrow-forward" size={24} color={currentIndex === filteredCards.length - 1 ? COLORS.inactive : COLORS.text.primary} />
            </TouchableOpacity>
          </View>
        )}
        
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => setAddModalVisible(true)}
        >
          <LinearGradient
            colors={[COLORS.gradient.start, COLORS.gradient.end]}
            style={styles.addButtonInner}
          >
            <Icon name="add" size={24} color={COLORS.white} />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {renderAddCardModal()}
      {renderFilterModal()}
      {renderLibraryModal()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  statusBar: {
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  statusBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardCountText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text.secondary,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardWrapper: {
    width: width * 0.9,
    height: height * 0.5,
    position: 'relative',
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    backfaceVisibility: 'hidden',
    position: 'absolute',
  },
  cardFront: {
    justifyContent: 'space-between',
  },
  cardBack: {
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text.secondary,
  },
  difficultyBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  difficultyBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.text.primary,
    lineHeight: 30,
  },
  answerText: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.text.primary,
    lineHeight: 28,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  tapInstructionText: {
    fontSize: 14,
    color: COLORS.text.secondary,
  },
  footer: {
    padding: 20,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    gap: 20,
  },
  scoreItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBtn: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  navBtnDisabled: {
    opacity: 0.5,
  },
  scoreButtonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  correctBtn: {
    backgroundColor: COLORS.success,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  incorrectBtn: {
    backgroundColor: COLORS.error,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  addButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  addButtonInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: width * 0.9,
    maxHeight: height * 0.8,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  modalBody: {
    padding: 20,
    maxHeight: height * 0.5,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    minHeight: 50,
  },
  difficultySelector: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  difficultyOption: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  difficultyText: {
    fontWeight: '600',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  primaryButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  // Filter Modal
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 15,
  },
  categoryChip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  categoryChipText: {
    fontWeight: '500',
  },
  difficultiesContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  difficultyChip: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  difficultyChipText: {
    fontWeight: '600',
  },
  starredFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  // Library View
  libraryContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  libraryHeader: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  libraryHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  libraryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  libraryList: {
    padding: 15,
    paddingBottom: 80,
  },
  libraryCard: {
    marginBottom: 15,
  },
  libraryCardContent: {
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  libraryCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  libraryCardMeta: {
    flexDirection: 'column',
    gap: 5,
  },
  libraryCardCategory: {
    fontSize: 14,
    color: COLORS.text.secondary,
    fontWeight: '500',
  },
  libraryCardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  starIcon: {
    marginRight: 5,
  },
  libraryCardQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text.primary,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  floatingButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Empty state
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 16,
    color: COLORS.text.secondary,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  emptyStateButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  emptyStateButtonText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  // Confetti animation
  confettiContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    pointerEvents: 'none',
  },
  confetti: {
    width: width,
    height: height / 2,
  },
});

export default FlashcardComponent;