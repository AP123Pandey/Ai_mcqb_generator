// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet, 
//   Dimensions, 
//   Alert,
//   Animated,
// } from 'react-native';

// const { width } = Dimensions.get('window');

// const GameScreen = () => {
//   const QUESTIONS_BY_LEVEL = {
//     1: [
//       { id: 1, question: '2 + 2', answer: '4', category: 'Math' },
//       { id: 2, question: 'Capital of France?', answer: 'Paris', category: 'Geography' },
//       { id: 3, question: '5 x 3', answer: '15', category: 'Math' },
//       { id: 4, question: 'Earth is the ? Planet', answer: '3rd', category: 'Science' },
//       { id: 5, question: 'How many continents?', answer: '7', category: 'Geography' }
//     ],
//     2: [
//       { id: 6, question: 'Largest Planet', answer: 'Jupiter', category: 'Science' },
//       { id: 7, question: 'Human Heart Chambers', answer: '4', category: 'Biology' },
//       { id: 8, question: 'Speed of Light', answer: '299,792 km/s', category: 'Physics' },
//       { id: 9, question: 'Longest River', answer: 'Nile', category: 'Geography' },
//       { id: 10, question: '10² = ', answer: '100', category: 'Math' }
//     ],
//     3: [
//       { id: 11, question: 'First Woman in Space', answer: 'Valentina Tereshkova', category: 'History' },
//       { id: 12, question: 'Chemical Symbol for Gold', answer: 'Au', category: 'Chemistry' },
//       { id: 13, question: 'Smallest Country', answer: 'Vatican City', category: 'Geography' },
//       { id: 14, question: 'Pi Value (first 3 digits)', answer: '3.14', category: 'Math' },
//       { id: 15, question: 'Boiling Point of Water', answer: '100°C', category: 'Science' }
//     ]
//   };

//   const [currentLevel, setCurrentLevel] = useState(1);
//   const [cards, setCards] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [score, setScore] = useState(0);
//   const [time, setTime] = useState(0);
//   const [gameOver, setGameOver] = useState(false);
//   const [completedQuestions, setCompletedQuestions] = useState([]);
//   const [showLevelUpModal, setShowLevelUpModal] = useState(false);
//   const [animation] = useState(new Animated.Value(1));

//   useEffect(() => {
//     initializeLevel();
//   }, [currentLevel]);

//   useEffect(() => {
//     let timer;
//     if (!gameOver) {
//       timer = setInterval(() => {
//         setTime(prev => prev + 10);
//       }, 10);
//     }
//     return () => clearInterval(timer);
//   }, [gameOver]);

//   const initializeLevel = () => {
//     const currentLevelQuestions = QUESTIONS_BY_LEVEL[currentLevel];
//     const shuffledCards = [...currentLevelQuestions, ...currentLevelQuestions.map(q => ({ ...q, question: q.answer, answer: q.question }))].sort(() => Math.random() - 0.5);
    
//     setCards(shuffledCards);
//     setCompletedQuestions([]);
//     setScore(0);
//   };

//   const handleSelect = (item) => {
//     if (gameOver) return;

//     if (selectedCard) {
//       if (selectedCard.question === item.answer) {
//         // Correct answer
//         setCompletedQuestions(prev => [...prev, selectedCard.id]);
//         setScore(prev => prev + 1);
//         setSelectedCard(null);
//         // Check if level is complete
//         if (completedQuestions.length + 1 === QUESTIONS_BY_LEVEL[currentLevel].length) {
//           setShowLevelUpModal(true);
//         }
//       } else {
//         // Incorrect answer
//         animateIncorrectSelection();
//         setSelectedCard(null);
//       }
//     } else {
//       setSelectedCard(item);
//     }
//   };

//   const animateIncorrectSelection = () => {
//     Animated.sequence([
//       Animated.timing(animation, { toValue: 0.5, duration: 200, useNativeDriver: true }),
//       Animated.timing(animation, { toValue: 1, duration: 200, useNativeDriver: true }),
//     ]).start();
//   };

//   const proceedToNextLevel = () => {
//     setShowLevelUpModal(false);
//     if (currentLevel < 3) {
//       setCurrentLevel(prev => prev + 1);
//     } else {
//       endGame();
//     }
//   };

//   const endGame = () => {
//     setGameOver(true);
//   };

//   const resetGame = () => {
//     setCurrentLevel(1);
//     setScore(0);
//     setTime(0);
//     setGameOver(false);
//     setShowLevelUpModal(false);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Brain Match Challenge</Text>
//         <Text style={styles.timer}>
//           Level {currentLevel} | Time: {(time / 1000).toFixed(2)}s
//         </Text>
//       </View>

//       <View style={styles.gameBoard}>
//         {cards.map((card, index) => (
//           <TouchableOpacity 
//             key={index} 
//             style={[
//               styles.card, 
//               selectedCard === card && styles.selectedCard,
//               completedQuestions.includes(card.id) && styles.completedCard,
//               { opacity: animation }
//             ]} 
//             onPress={() => handleSelect(card)}
//           >
//             <Text style={styles.cardText}>{selectedCard === card ? card.answer : card.question}</Text>
//             <Text style={styles.categoryText}>{card.category}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {showLevelUpModal && (
//         <View style={styles.levelUpModal}>
//           <Text style={styles.levelUpTitle}>Level Completed!</Text>
//           <Text style={styles.levelUpText}>Do you want to play Level {currentLevel + 1}?</Text>
//           <TouchableOpacity 
//             style={styles.levelUpButton} 
//             onPress={proceedToNextLevel}
//           >
//             <Text style={styles.levelUpButtonText}>Yes</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//             style={styles.levelUpButton} 
//             onPress={resetGame}
//           >
//             <Text style={styles.levelUpButtonText}>No</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {gameOver && (
//         <View style={styles.gameOverModal}>
//           <Text style={styles.gameOverTitle}>Congratulations!</Text>
//           <Text style={styles.gameOverText}>
//             You completed all levels!
//           </Text>
//           <Text style={styles.gameOverText}>
//             Total Time: {(time / 1000).toFixed(2)}s
//           </Text>

//           <TouchableOpacity 
//             style={styles.resetButton} 
//             onPress={resetGame}
//           >
//             <Text style={styles.resetButtonText}>Play Again</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#2c3e50',
//     paddingTop: 50,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   timer: {
//     color: '#ecf0f1',
//     fontSize: 18,
//     marginTop: 10,
//   },
//   gameBoard: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   card: {
//     backgroundColor: 'white',
//     width: '30%', // Adjust width to fit 3 cards per row
//     height: 100, // Fixed height for uniformity
//     margin: 5,
//     borderRadius: 10,
//     elevation: 3,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedCard: {
//     backgroundColor: '#3498db',
//   },
//   completedCard: {
//     backgroundColor: '#2ecc71',
//   },
//   cardText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   categoryText: {
//     fontSize: 12,
//     color: '#7f8c8d',
//     marginTop: 5,
//   },
//   levelUpModal: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   levelUpTitle: {
//     color: 'white',
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   levelUpText: {
//     color: 'white',
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   levelUpButton: {
//     backgroundColor: '#2ecc71',
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   levelUpButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   gameOverModal: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   gameOverTitle: {
//     color: 'white',
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   gameOverText: {
//     color: 'white',
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   resetButton: {
//     backgroundColor: '#2ecc71',
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   resetButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default GameScreen;

import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  Animated,
} from 'react-native';

const { width } = Dimensions.get('window');

const GameScreen = ({ navigation }) => {
  const QUESTIONS_BY_LEVEL = {
    1: [
      { id: 1, question: '2 + 2', answer: '4', category: 'Math' },
      { id: 2, question: 'Capital of France?', answer: 'Paris', category: 'Geography' },
      { id: 3, question: '5 x 3', answer: '15', category: 'Math' },
      { id: 4, question: 'Earth is the ? Planet', answer: '3rd', category: 'Science' },
      { id: 5, question: 'How many continents?', answer: '7', category: 'Geography' }
    ],
    2: [
      { id: 6, question: 'Largest Planet', answer: 'Jupiter', category: 'Science' },
      { id: 7, question: 'Human Heart Chambers', answer: '4', category: 'Biology' },
      { id: 8, question: 'Speed of Light', answer: '299,792 km/s', category: 'Physics' },
      { id: 9, question: 'Longest River', answer: 'Nile', category: 'Geography' },
      { id: 10, question: '10² = ', answer: '100', category: 'Math' }
    ],
    3: [
      { id: 11, question: 'First Woman in Space', answer: 'Valentina Tereshkova', category: 'History' },
      { id: 12, question: 'Chemical Symbol for Gold', answer: 'Au', category: 'Chemistry' },
      { id: 13, question: 'Smallest Country', answer: 'Vatican City', category: 'Geography' },
      { id: 14, question: 'Pi Value (first 3 digits)', answer: '3.14', category: 'Math' },
      { id: 15, question: 'Boiling Point of Water', answer: '100°C', category: 'Science' }
    ]
  };

  const [currentLevel, setCurrentLevel] = useState(1);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false);
  const [animation] = useState(new Animated.Value(1));

  useEffect(() => {
    initializeLevel();
  }, [currentLevel]);

  useEffect(() => {
    let timer;
    if (!gameOver) {
      timer = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [gameOver]);

  const initializeLevel = () => {
    const currentLevelQuestions = QUESTIONS_BY_LEVEL[currentLevel];
    const shuffledCards = [...currentLevelQuestions, ...currentLevelQuestions.map(q => ({ ...q, question: q.answer, answer: q.question }))].sort(() => Math.random() - 0.5);
    
    setCards(shuffledCards);
    setCompletedQuestions([]);
    setScore(0);
  };

  const handleSelect = (item) => {
    if (gameOver) return;

    if (selectedCard) {
      if (selectedCard.question === item.answer) {
        // Correct answer
        setCompletedQuestions(prev => [...prev, selectedCard.id]);
        setScore(prev => prev + 1);
        
        // Remove both question and answer from cards
        setCards(prevCards => prevCards.filter(card => card.id !== selectedCard.id && card.id !== item.id));
        
        setSelectedCard(null);
        
        // Check if level is complete
        if (completedQuestions.length + 1 === QUESTIONS_BY_LEVEL[currentLevel].length) {
          setShowResultModal(true);
        }
      } else {
        // Incorrect answer
        animateIncorrectSelection();
        setSelectedCard(null);
      }
    } else {
      setSelectedCard(item);
    }
  };

  const animateIncorrectSelection = () => {
    Animated.sequence([
      Animated.timing(animation, { toValue: 0.5, duration: 200, useNativeDriver: true }),
      Animated.timing(animation, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start();
  };

  const proceedToNextLevel = () => {
    setShowResultModal(false);
    if (currentLevel < 3) {
      setCurrentLevel(prev => prev + 1);
    } else {
      endGame();
    }
  };

  const endGame = () => {
    setGameOver(true);
  };

  const resetGame = () => {
    setCurrentLevel(1);
    setScore(0);
    setTime(0);
    setGameOver(false);
    setShowResultModal(false);
  };

  const handleNo = () => {
    setShowResultModal(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Brain Match Challenge</Text>
        <Text style={styles.timer}>
          Level {currentLevel} | Time: {(time / 1000).toFixed(2)}s
        </Text>
      </View>

      <View style={styles.gameBoard}>
        {cards.map((card, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.card, 
              selectedCard === card && styles.selectedCard,
              completedQuestions.includes(card.id) && styles.completedCard,
              { opacity: animation }
            ]} 
            onPress={() => handleSelect(card)}
          >
            <Text style={styles.cardText}>{selectedCard === card ? card.answer : card.question}</Text>
            <Text style={styles.categoryText}>{card.category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {showResultModal && (
        <View style={styles.resultModal}>
          <Text style={styles.resultTitle}>Level Completed!</Text>
          <Text style={styles.resultText}>Your Score: {score}</Text>
          <Text style={styles.resultText}>Total Time: {(time / 1000).toFixed(2)}s</Text>
          <Text style={styles.resultText}>Do you want to proceed to the next level?</Text>
          <TouchableOpacity 
            style={styles.resultButton} 
            onPress={proceedToNextLevel}
          >
            <Text style={styles.resultButtonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.resultButton} 
            onPress={handleNo}
          >
            <Text style={styles.resultButtonText}>No</Text>
          </TouchableOpacity>
        </View>
      )}

      {gameOver && (
        <View style={styles.gameOverModal}>
          <Text style={styles.gameOverTitle}>Congratulations!</Text>
          <Text style={styles.gameOverText}>
            You completed all levels!
          </Text>
          <Text style={styles.gameOverText}>
            Total Time: {(time / 1000).toFixed(2)}s
          </Text>

          <TouchableOpacity 
            style={styles.resetButton} 
            onPress={resetGame}
          >
            <Text style={styles.resetButtonText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2c3e50',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  timer: {
    color: '#ecf0f1',
    fontSize: 18,
    marginTop: 10,
  },
  gameBoard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    width: '30%',
    height: 100,
    margin: 5,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCard: {
    backgroundColor: '#3498db',
  },
  completedCard: {
    backgroundColor: '#2ecc71',
  },
  incorrectCard: {
    backgroundColor: '#e74c3c',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 5,
  },
  resultModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  resultButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  resultButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameOverModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  gameOverTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gameOverText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GameScreen;