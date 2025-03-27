import React, { useState, useCallback } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  StatusBar, 
  Animated 
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get('window');

const QUESTIONS = [
  {
    id: '1',
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
    category: "Geography",
    difficulty: "Easy"
  },
  {
    id: '2',
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
    category: "Astronomy",
    difficulty: "Medium"
  },
  {
    id: '3',
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
    category: "Biology",
    difficulty: "Hard"
  }
];

export default function QuizApp({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [message, setMessage] = useState("");
  const [questions, setQuestions] = useState(QUESTIONS);

  // Animation values
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(width)).current;

  // Animate question transition
  const animateQuestion = useCallback(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  }, [fadeAnim, slideAnim]);

  React.useEffect(() => {
    animateQuestion();
  }, [currentQuestion, animateQuestion]);

  const handleAnswerPress = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    if (option === questions[currentQuestion].answer) {
      setCorrectAnswers(prev => prev + 1);
      setMessage("Correct!");
    } else {
      setMessage(`Incorrect. The correct answer is: ${questions[currentQuestion].answer}`);
    }
  };

  const handleContinue = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setMessage("");
      // Reset animation
      fadeAnim.setValue(0);
      slideAnim.setValue(width);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setShowResult(false);
    setMessage("");
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return '#4CAF50';
      case 'Medium': return '#FF9800';
      case 'Hard': return '#F44336';
      default: return '#2196F3';
    }
  };

  const renderQuizContent = () => {
    if (showResult) {
      return (
        <View style={styles.resultContainer}>
          <Icon name="trophy" size={100} color="#FFD700" />
          <Text style={styles.resultTitle}>Quiz Completed!</Text>
          <Text style={styles.resultText}>
            Your Score: {correctAnswers} / {questions.length}
          </Text>
          <Text style={styles.resultPercentage}>
            {Math.round((correctAnswers / questions.length) * 100)}%
          </Text>
          <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
            <Text style={styles.restartButtonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      );
    }

    const currentQuestionData = questions[currentQuestion];

    return (
      <Animated.View 
        style={[
          styles.quizContainer, 
          { 
            opacity: fadeAnim,
            transform: [{ translateX: slideAnim }] 
          }
        ]}
      >
        {/* Question Header */}
        <View style={styles.questionHeader}>
          <View style={[
            styles.difficultyTag, 
            { backgroundColor: getDifficultyColor(currentQuestionData.difficulty) }
          ]}>
            <Text style={styles.difficultyText}>
              {currentQuestionData.difficulty}
            </Text>
          </View>
          <Text style={styles.categoryText}>
            {currentQuestionData.category}
          </Text>
        </View>

        {/* Progress */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} of {questions.length}
          </Text>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressIndicator, 
                { width: `${((currentQuestion + 1) / questions.length) * 100}%` }
              ]} 
            />
          </View>
        </View>

        {/* Question */}
        <Text style={styles.questionText}>
          {currentQuestionData.question}
        </Text>

        {/* Options */}
        {currentQuestionData.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === option
                ? option === currentQuestionData.answer
                  ? styles.correctOptionButton
                  : styles.incorrectOptionButton
                : null,
            ]}
            onPress={() => handleAnswerPress(option)}
          >
            <Text 
              style={[
                styles.optionText,
                selectedAnswer === option 
                  ? { color: 'white' } 
                  : { color: '#333' }
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Feedback Message */}
        {message ? (
          <Text 
            style={[
              styles.messageText, 
              message.includes('Correct') 
                ? styles.correctMessage 
                : styles.incorrectMessage
            ]}
          >
            {message}
          </Text>
        ) : null}

        {/* Continue Button */}
        {selectedAnswer && (
          <TouchableOpacity 
            style={styles.continueButton} 
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a11cb" />
      
      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {renderQuizContent()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a11cb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  quizContainer: {
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  difficultyTag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  difficultyText: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 16,
    color: '#666',
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressIndicator: {
    height: '100%',
    backgroundColor: '#6a11cb',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  optionButton: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  correctOptionButton: {
    backgroundColor: '#4CAF50',
  },
  incorrectOptionButton: {
    backgroundColor: '#F44336',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  messageText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  correctMessage: {
    color: '#4CAF50',
  },
  incorrectMessage: {
    color: '#F44336',
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: '#6a11cb',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a11cb',
    marginVertical: 15,
  },
  resultText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
  resultPercentage: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: '#6a11cb',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});