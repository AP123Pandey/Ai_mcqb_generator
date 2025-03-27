


// import React, { useState } from "react";
// import { View, Text, TextInput, Button, ActivityIndicator, ScrollView } from "react-native";
// import axios from "axios";
// import { Picker } from '@react-native-picker/picker';


// function OrdersScreen() {
//     const [topic, setTopic] = useState("");
//     const [difficulty, setDifficulty] = useState("easy");
//     const [mcqs, setMcqs] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const fetchMCQs = async () => {
//         setLoading(true); // Show loading
//         try {
//             const response = await axios.get(`http://192.168.86.29:6000/generate-mcq/${topic}/${difficulty}`);
//             console.log("API Response:", response.data);
//             setMcqs(Array.isArray(response.data) ? response.data : [response.data]);
//         } catch (error) {
//             console.error("Error fetching MCQs:", error);
//             setMcqs([]);
//         }
//         setLoading(false); // Hide loading
//     };

//     return (
//         <ScrollView contentContainerStyle={{ padding: 20 }}>
//             <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>MCQ Generator</Text>
            
//             <TextInput 
//                 placeholder="Enter Topic" 
//                 value={topic} 
//                 onChangeText={setTopic} 
//                 style={{ borderWidth: 1, padding: 10, marginBottom: 10 }} 
//             />
            
//             <Picker selectedValue={difficulty} onValueChange={(itemValue) => setDifficulty(itemValue)}>
//                 <Picker.Item label="Easy" value="easy" />
//                 <Picker.Item label="Medium" value="medium" />
//                 <Picker.Item label="Hard" value="hard" />
//             </Picker>
            
//             {loading ? <ActivityIndicator size="large" color="#0000ff" /> : 
//                 <Button title="Generate MCQs" onPress={fetchMCQs} />
//             }
            
//             <View style={{ marginTop: 20 }}>
//                 {mcqs.map((mcq, index) => (
//                     <View key={index} style={{ marginBottom: 20, borderWidth: 1, padding: 10 }}>
//                         <Text style={{ fontSize: 18, fontWeight: "bold" }}>{mcq.question}</Text>
//                         {['option1', 'option2', 'option3', 'option4'].map((option, i) => (
//                             <Text key={i}>• {mcq[option]}</Text>
//                         ))}
//                         <Text><Text style={{ fontWeight: "bold" }}>Answer:</Text> {mcq.answer}</Text>
//                         <Text><Text style={{ fontWeight: "bold" }}>Explanation:</Text> {mcq.explanation}</Text>
//                     </View>
//                 ))}
//             </View>
//         </ScrollView>
//     );
// }

// // export default OrdersScreen;
// import React, { useState } from "react";
// import { View, Text, Button, ActivityIndicator, ScrollView, Alert } from "react-native";
// import { Picker } from '@react-native-picker/picker';
// import axios from "axios";

// const OrdersScreen = () => {
//     const [topics, setTopics] = useState(["Mathematics", "Science", "History", "Computer Science"]);
//     const [selectedTopic, setSelectedTopic] = useState("");
//     const [difficulty, setDifficulty] = useState("easy");
//     const [mcqs, setMcqs] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const generateMCQs = async () => {
//         if (!selectedTopic) return Alert.alert("⚠️ Please select a topic.");
//         setLoading(true);

//         try {
//             const prompt = `Generate a multiple-choice question on the topic: "${selectedTopic}" with ${difficulty} difficulty.
//             Provide:
//             - A question
//             - Four answer choices labeled A, B, C, and D
//             - The correct answer
//             - A brief explanation of the correct answer.
//             Respond in JSON format: 
//             {"question": "...", "option1": "...", "option2": "...", "option3": "...", "option4": "...", "answer": "...", "explanation": "..."}`;

//             const response = await axios.post("http://192.168.86.29:11434/api/chat", {
//                 model: "mistral",
//                 messages: [{ role: "user", content: prompt }],
//                 stream: false,
//             });
            

//             console.log("Mistral Response:", response.data);

//             let responseText = response.data.response.trim(); 
            
//             // Extract JSON safely
//             const jsonStart = responseText.indexOf('{');
//             const jsonEnd = responseText.lastIndexOf('}');
//             if (jsonStart !== -1 && jsonEnd !== -1) {
//                 responseText = responseText.substring(jsonStart, jsonEnd + 1);
//             }

//             const generatedMCQ = JSON.parse(responseText);
//             setMcqs([generatedMCQ]); 
//         } catch (error) {
//             console.error("Error fetching MCQs:", error);
//             Alert.alert("⚠️ Error generating MCQs. Ensure Ollama is running.");
//         }
//         setLoading(false);
//     };

//     return (
//         <View style={{ flex: 1, padding: 20, alignItems: "center", justifyContent: "center" }}>
//             <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>MCQ Generator</Text>

//             <Text>Topic:</Text>
//             <Picker
//                 selectedValue={selectedTopic}
//                 style={{ height: 50, width: 250 }}
//                 onValueChange={(itemValue) => setSelectedTopic(itemValue)}
//             >
//                 <Picker.Item label="Select Topic" value="" />
//                 {topics.map((topic, index) => (
//                     <Picker.Item key={index} label={topic} value={topic} />
//                 ))}
//             </Picker>

//             <Text>Difficulty:</Text>
//             <Picker
//                 selectedValue={difficulty}
//                 style={{ height: 50, width: 250 }}
//                 onValueChange={(itemValue) => setDifficulty(itemValue)}
//             >
//                 <Picker.Item label="Easy" value="easy" />
//                 <Picker.Item label="Medium" value="medium" />
//                 <Picker.Item label="Hard" value="hard" />
//             </Picker>

//             <Button title="Generate MCQs" onPress={generateMCQs} />
//             {loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}

//             <ScrollView style={{ marginTop: 20, width: "100%" }}>
//                 {mcqs.length > 0 ? (
//                     mcqs.map((mcq, index) => (
//                         <View key={index} style={{ marginBottom: 20, padding: 10, borderWidth: 1, borderRadius: 5 }}>
//                             <Text style={{ fontWeight: "bold" }}>Q: {mcq.question}</Text>
//                             <Text>A: {mcq.option1}</Text>
//                             <Text>B: {mcq.option2}</Text>
//                             <Text>C: {mcq.option3}</Text>
//                             <Text>D: {mcq.option4}</Text>
//                             <Text style={{ fontWeight: "bold", marginTop: 5 }}>Answer: {mcq.answer}</Text>
//                             <Text style={{ fontStyle: "italic" }}>Explanation: {mcq.explanation}</Text>
//                         </View>
//                     ))
//                 ) : (
//                     <Text style={{ textAlign: "center", marginTop: 20 }}>No MCQs generated yet.</Text>
//                 )}
//             </ScrollView>
//         </View>
//     );
// };

// export default OrdersScreen;


import React, { useState, useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  ActivityIndicator, 
  Animated, 
  Dimensions, 
  StyleSheet 
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import axios from "axios";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

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

const MCQCard = ({ mcq, index, expanded, toggleExpand }) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true
    }).start();
  }, []);

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: expanded ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start();
  }, [expanded]);

  const getOptionStyle = (option) => {
    if (!expanded) return styles.option;
    
    if (mcq.answer === option) {
      return [styles.option, styles.correctOption];
    }
    return styles.option;
  };

  const getOptionTextStyle = (option) => {
    if (!expanded) return styles.optionText;
    
    if (mcq.answer === option) {
      return [styles.optionText, styles.correctOptionText];
    }
    return styles.optionText;
  };

  return (
    <Animated.View style={[styles.mcqCard, { opacity: fadeAnim, transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }] }]}>
      <View style={styles.mcqHeader}>
        <Text style={styles.questionNumber}>Question {index + 1}</Text>
        <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.expandButton}>
          <MaterialIcons name={expanded ? "expand-less" : "expand-more"} size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.question}>{mcq.question}</Text>
      
      <TouchableOpacity style={getOptionStyle('A')} onPress={() => !expanded && toggleExpand(index)}>
        <Text style={styles.optionLetter}>A</Text>
        <Text style={getOptionTextStyle('A')}>{mcq.option1}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={getOptionStyle('B')} onPress={() => !expanded && toggleExpand(index)}>
        <Text style={styles.optionLetter}>B</Text>
        <Text style={getOptionTextStyle('B')}>{mcq.option2}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={getOptionStyle('C')} onPress={() => !expanded && toggleExpand(index)}>
        <Text style={styles.optionLetter}>C</Text>
        <Text style={getOptionTextStyle('C')}>{mcq.option3}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={getOptionStyle('D')} onPress={() => !expanded && toggleExpand(index)}>
        <Text style={styles.optionLetter}>D</Text>
        <Text style={getOptionTextStyle('D')}>{mcq.option4}</Text>
      </TouchableOpacity>
      
      {expanded && (
        <Animated.View style={{ maxHeight: animatedHeight.interpolate({ inputRange: [0, 1], outputRange: [0, 500] }) }}>
          <View style={styles.explanationContainer}>
            <Text style={styles.explanationTitle}>Explanation</Text>
            <Text style={styles.explanation}>{mcq.explanation}</Text>
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
};

const OrdersScreen = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [mcqs, setMcqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isTopicPickerVisible, setTopicPickerVisible] = useState(false);
  const [isDifficultyPickerVisible, setDifficultyPickerVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showNoMCQsMessage, setShowNoMCQsMessage] = useState(false);
  const [mcqCount, setMcqCount] = useState(0);

  const buttonScale = useRef(new Animated.Value(1)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadTopics();
  }, []);

  useEffect(() => {
    
    if (loading) {
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 0.9) {
            clearInterval(interval);
            return prev;
          }
          return prev + 0.1;
        });
      }, 700);
      
      // Start rotation animation for loading spinner
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true
        })
      ).start();
      
      return () => {
        clearInterval(interval);
        spinValue.setValue(0);
      };
    } else {
      setProgress(0);
    }
  }, [loading]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const loadTopics = async () => {
    try {
        const responses = await axios.post("http://192.168.86.29:11434/api/chat", {
            model: "mistral",
            messages: [{ role: "user", content: "prompt" }],
            stream: false,
        });
      const response = await axios.get("http://192.168.86.29:6000/topics");
      setTopics(response.data);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  const toggleExpand = (index) => {
    // Simple vibration instead of Haptics
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      try {
        Vibration.vibrate(50);
      } catch (error) {
        console.log("Vibration not supported");
      }
    }
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const generateMCQs = async () => {
    let finalTopic = selectedTopic || newTopic;
    if (!finalTopic) {
      // Simple alert instead of Haptics
      alert("⚠️ Please select or enter a topic.");
      return;
    }
    
    if (newTopic && !topics.includes(newTopic)) {
      setTopics([...topics, newTopic]);
    }

    setLoading(true);
    setShowNoMCQsMessage(false);
    
    try {
      // First try to get existing MCQs
      const storedMCQs = await axios.get(`http://192.168.86.29:6000/getMCQs?topic=${finalTopic}&difficulty=${difficulty}`);
      setMcqs(storedMCQs.data);
      setMcqCount(storedMCQs.data.length);
      
      // Then generate new MCQs
      await axios.get(`http://192.168.86.29:6000/generate-mcq/${finalTopic}/${difficulty}`);
      
      // Get the updated list
      const updatedMCQs = await axios.get(`http://192.168.86.29:6000/getMCQs?topic=${finalTopic}&difficulty=${difficulty}`);
      setMcqs(updatedMCQs.data);
      setMcqCount(updatedMCQs.data.length);
      
      if (updatedMCQs.data.length === 0) {
        setShowNoMCQsMessage(true);
      }
      
    } catch (error) {
      console.error("Error fetching MCQs:", error);
      alert("Error generating MCQs. Please try again.");
    } finally {
      setLoading(false);
      setProgress(1);
    }
  };

  const handleButtonPress = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    
    generateMCQs();
  };

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -20],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 60, 90],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.gradient.start, COLORS.gradient.end]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Animated.View style={[styles.headerContent, { transform: [{ translateY: headerTranslateY }], opacity: headerOpacity }]}>
          <Text style={styles.headerTitle}>AI MCQ Generator</Text>
          <Text style={styles.headerSubtitle}>Create & Practice Questions</Text>
        </Animated.View>
      </LinearGradient>
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Topic Selection</Text>
          
          <TouchableOpacity 
            style={styles.pickerButton} 
            onPress={() => setTopicPickerVisible(!isTopicPickerVisible)}
          >
            <Text style={styles.pickerButtonText}>
              {selectedTopic || "Select a Topic"}
            </Text>
            <MaterialIcons 
              name={isTopicPickerVisible ? "arrow-drop-up" : "arrow-drop-down"} 
              size={24} 
              color={COLORS.primary} 
            />
          </TouchableOpacity>
          
          {isTopicPickerVisible && (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedTopic}
                style={styles.picker}
                onValueChange={(itemValue) => {
                  setSelectedTopic(itemValue);
                  setNewTopic("");
                  setTopicPickerVisible(false);
                }}
              >
                <Picker.Item label="Select Topic" value="" />
                {topics.map((topic, index) => (
                  <Picker.Item key={index} label={topic} value={topic} />
                ))}
              </Picker>
            </View>
          )}
          
          <Text style={styles.inputLabel}>Or Enter a New Topic:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter new topic"
              value={newTopic}
              onChangeText={(text) => {
                setNewTopic(text);
                setSelectedTopic("");
              }}
              placeholderTextColor={COLORS.inactive}
            />
            {newTopic.length > 0 && (
              <TouchableOpacity 
                style={styles.clearButton} 
                onPress={() => setNewTopic("")}
              >
                <MaterialIcons name="clear" size={18} color={COLORS.inactive} />
              </TouchableOpacity>
            )}
          </View>
          
          <Text style={styles.sectionTitle}>Difficulty Level</Text>
          
          <TouchableOpacity 
            style={styles.pickerButton} 
            onPress={() => setDifficultyPickerVisible(!isDifficultyPickerVisible)}
          >
            <View style={styles.difficultyRow}>
              <View style={[styles.difficultyIndicator, { backgroundColor: 
                difficulty === 'easy' ? '#4CAF50' : 
                difficulty === 'medium' ? '#FFC107' : '#FF5252' }]} />
              <Text style={styles.pickerButtonText}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </Text>
            </View>
            <MaterialIcons 
              name={isDifficultyPickerVisible ? "arrow-drop-up" : "arrow-drop-down"} 
              size={24} 
              color={COLORS.primary} 
            />
          </TouchableOpacity>
          
          {isDifficultyPickerVisible && (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={difficulty}
                style={styles.picker}
                onValueChange={(itemValue) => {
                  setDifficulty(itemValue);
                  setDifficultyPickerVisible(false);
                }}
              >
                <Picker.Item label="Easy" value="easy" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="Hard" value="hard" />
              </Picker>
            </View>
          )}
          
          <Animated.View style={[styles.generateButtonContainer, { transform: [{ scale: buttonScale }] }]}>
            <TouchableOpacity activeOpacity={0.8} onPress={handleButtonPress}>
              <LinearGradient
                colors={[COLORS.primary, COLORS.gradient.end]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.generateButton}
              >
                <Text style={styles.generateButtonText}>Generate MCQs</Text>
                <FontAwesome5 name="magic" size={18} color={COLORS.white} />
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </View>
        
        {loading && (
          <View style={styles.loaderContainer}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <FontAwesome5 name="cog" size={50} color={COLORS.primary} />
            </Animated.View>
            <Text style={styles.loadingText}>
              Generating {difficulty} MCQs for {selectedTopic || newTopic}...
            </Text>
            <View style={styles.progressBarContainer}>
              <Animated.View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
            </View>
          </View>
        )}

        {mcqs.length > 0 ? (
          <View style={styles.resultsContainer}>
            <View style={styles.resultsHeader}>
              <Text style={styles.resultsTitle}>
                {mcqCount} AI MCQs Generated
              </Text>
              <View style={styles.chipContainer}>
                <View style={[styles.chip, { backgroundColor: difficulty === 'easy' ? '#4CAF5033' : difficulty === 'medium' ? '#FFC10733' : '#FF525233' }]}>
                  <Text style={[styles.chipText, { color: difficulty === 'easy' ? '#4CAF50' : difficulty === 'medium' ? '#FFC107' : '#FF5252' }]}>
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </Text>
                </View>
                <View style={styles.chip}>
                  <Text style={styles.chipText}>{selectedTopic || newTopic}</Text>
                </View>
              </View>
            </View>
            
            {mcqs.map((mcq, index) => (
              <MCQCard 
                key={index} 
                mcq={mcq} 
                index={index} 
                expanded={expandedIndex === index}
                toggleExpand={toggleExpand}
              />
            ))}
          </View>
        ) : showNoMCQsMessage ? (
          <View style={styles.emptyStateContainer}>
            <FontAwesome5 name="search" size={60} color={COLORS.inactive} />
            <Text style={styles.emptyStateTitle}>No MCQs Found</Text>
            <Text style={styles.emptyStateDescription}>
              We couldn't find or generate MCQs for this topic and difficulty level. Try a different combination.
            </Text>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    shadowColor: COLORS.gradient.end,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    zIndex: 10,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.8,
    marginTop: 5,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 30,
  },
  formContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    margin: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginVertical: 10,
  },
  pickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.inactive,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    backgroundColor: COLORS.white,
  },
  pickerButtonText: {
    fontSize: 16,
    color: COLORS.text.primary,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.inactive,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  inputLabel: {
    fontSize: 16,
    color: COLORS.text.secondary,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.inactive,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: COLORS.white,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: COLORS.text.primary,
  },
  clearButton: {
    padding: 5,
  },
  difficultyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  difficultyIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  generateButtonContainer: {
    marginTop: 10,
  },
  generateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 3,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  generateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginRight: 10,
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  loadingText: {
    fontSize: 16,
    color: COLORS.text.secondary,
    marginVertical: 16,
    textAlign: 'center',
  },
  progressBarContainer: {
    width: '100%',
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
    marginTop: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  resultsContainer: {
    marginHorizontal: 16,
    marginTop: 10,
  },
  resultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: COLORS.primary + '33',
    marginLeft: 8,
  },
  chipText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '500',
  },
  mcqCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  mcqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  questionNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
  expandButton: {
    padding: 5,
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.text.primary,
    marginBottom: 16,
    lineHeight: 24,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.inactive,
    borderRadius: 8,
    marginBottom: 8,
  },
  correctOption: {
    borderColor: '#4CAF50',
    backgroundColor: '#4CAF5010',
  },
  optionLetter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.inactive + '33',
    textAlign: 'center',
    lineHeight: 24,
    marginRight: 12,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text.secondary,
  },
  optionText: {
    flex: 1,
    fontSize: 15,
    color: COLORS.text.primary,
  },
  correctOptionText: {
    color: '#4CAF50',
    fontWeight: '500',
  },
  explanationContainer: {
    marginTop: 12,
    padding: 16,
    backgroundColor: COLORS.background,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
  },
  explanationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: 8,
  },
  explanation: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.text.secondary,
  },
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginTop: 20,
    marginBottom: 10,
  },
  emptyStateDescription: {
    fontSize: 16,
    color: COLORS.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  }
});

export default OrdersScreen;