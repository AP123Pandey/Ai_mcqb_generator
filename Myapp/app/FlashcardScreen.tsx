// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import * as DocumentPicker from "expo-document-picker";
// import * as ImagePicker from "expo-image-picker";

// const FlashcardScreen = () => {
//   // Handle document selection
//   const pickDocument = async () => {
//     try {
//       const res = await DocumentPicker.getDocumentAsync({
//         type: ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-powerpoint"],
//       });

//       if (res.canceled) {
//         console.log("User canceled document picker");
//         return;
//       }

//       console.log("Selected File:", res);
//       processFile(res);
//     } catch (err) {
//       console.error("Error picking file:", err);
//     }
//   };

//   // Handle image selection
//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: false,
//         quality: 1,
//       });

//       if (result.canceled) {
//         console.log("User canceled image picker");
//         return;
//       }

//       console.log("Selected Image:", result.assets[0]);
//       processImage(result.assets[0]);
//     } catch (err) {
//       console.error("Error picking image:", err);
//     }
//   };

//   // Dummy function to process files (You need to implement AI-based MCQ generation)
//   const processFile = (file) => {
//     Alert.alert("Processing File", `Generating MCQs from ${file.name}`);
//     // TODO: Implement text extraction and AI-based MCQ generation
//   };

//   // Dummy function to process images (AI-based topic detection and MCQs)
//   const processImage = (image) => {
//     Alert.alert("Processing Image", "Generating MCQs from selected image...");
//     // TODO: Implement OCR to extract text & AI-based MCQ generation
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Create flashcard set</Text>

//       <View style={styles.grid}>
//         <MenuItem icon="file-document-outline" text="Scan document" onPress={pickDocument} />
//         <MenuItem icon="image-outline" text="Select images" onPress={pickImage} />
//         <MenuItem icon="content-paste" text="Paste text" />
//         <MenuItem icon="file-upload-outline" text="Select file" subtext=".pdf, .docx, .pptx" onPress={pickDocument} />
//         <MenuItem icon="keyboard-outline" text="Create manually" fullWidth />
//       </View>
//     </View>
//   );
// };

// const MenuItem = ({ icon, text, subtext, fullWidth, onPress }) => (
//   <TouchableOpacity style={[styles.item, fullWidth && styles.fullWidth]} onPress={onPress}>
//     <Icon name={icon} size={30} color="#8a56ff" />
//     <Text style={styles.itemText}>{text}</Text>
//     {subtext && <Text style={styles.subtext}>{subtext}</Text>}
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", padding: 20, alignItems: "center" },
//   header: { fontSize: 22, fontWeight: "bold", marginVertical: 20 },
//   grid: { width: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
//   item: { width: "48%", height: 120, backgroundColor: "#f8f8ff", borderRadius: 15, justifyContent: "center", alignItems: "center", marginBottom: 15, elevation: 4 },
//   fullWidth: { width: "100%" },
//   itemText: { fontSize: 16, fontWeight: "500", marginTop: 8 },
//   subtext: { fontSize: 12, color: "gray", marginTop: 3 },
// });

// export default FlashcardScreen;

// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import * as DocumentPicker from "expo-document-picker";
// import * as ImagePicker from "expo-image-picker";
// import * as FileSystem from "expo-file-system";

// const FlashcardScreen = () => {
//   // Handle document selection
//   const pickDocument = async () => {
//     try {
//       const res = await DocumentPicker.getDocumentAsync({
//         type: ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
//       });

//       if (res.canceled) {
//         console.log("User canceled document picker");
//         return;
//       }

//       console.log("Selected File:", res);

//       // Read file content (only for text-based files)
//       if (res.uri.endsWith(".txt") || res.uri.endsWith(".md")) {
//         const content = await FileSystem.readAsStringAsync(res.uri);
//         console.log("File Content:", content);
//       }

//       processFile(res);
//     } catch (err) {
//       console.error("Error picking file:", err);
//     }
//   };

//   // Handle image selection
//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: false,
//         quality: 1,
//       });

//       if (result.canceled) {
//         console.log("User canceled image picker");
//         return;
//       }

//       console.log("Selected Image:", result.assets[0]);
//       processImage(result.assets[0]);
//     } catch (err) {
//       console.error("Error picking image:", err);
//     }
//   };

//   // Dummy function to process files (AI-based MCQ generation)
//   const processFile = (file) => {
//     Alert.alert("Processing File", `Generating MCQs from ${file.name}`);
//     // TODO: Implement text extraction and AI-based MCQ generation
//   };

//   // Dummy function to process images (OCR + AI-based MCQ generation)
//   const processImage = (image) => {
//     Alert.alert("Processing Image", "Generating MCQs from selected image...");
//     // TODO: Implement OCR to extract text & AI-based MCQ generation
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Create Flashcard Set</Text>

//       <View style={styles.grid}>
//         <MenuItem icon="file-document-outline" text="Scan Document" onPress={pickDocument} />
//         <MenuItem icon="image-outline" text="Select Images" onPress={pickImage} />
//         <MenuItem icon="content-paste" text="Paste Text" />
//         <MenuItem icon="file-upload-outline" text="Select File" subtext=".pdf, .docx" onPress={pickDocument} />
//         <MenuItem icon="keyboard-outline" text="Create Manually" fullWidth />
//       </View>
//     </View>
//   );
// };

// const MenuItem = ({ icon, text, subtext, fullWidth, onPress }) => (
//   <TouchableOpacity style={[styles.item, fullWidth && styles.fullWidth]} onPress={onPress}>
//     <Icon name={icon} size={30} color="#8a56ff" />
//     <Text style={styles.itemText}>{text}</Text>
//     {subtext && <Text style={styles.subtext}>{subtext}</Text>}
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", padding: 20, alignItems: "center" },
//   header: { fontSize: 22, fontWeight: "bold", marginVertical: 20 },
//   grid: { width: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
//   item: { width: "48%", height: 120, backgroundColor: "#f8f8ff", borderRadius: 15, justifyContent: "center", alignItems: "center", marginBottom: 15, elevation: 4 },
//   fullWidth: { width: "100%" },
//   itemText: { fontSize: 16, fontWeight: "500", marginTop: 8 },
//   subtext: { fontSize: 12, color: "gray", marginTop: 3 },
// });

// export default FlashcardScreen;

// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import * as DocumentPicker from "expo-document-picker";
// import * as ImagePicker from "expo-image-picker";

// const FlashcardScreen = () => {
//   const pickDocument = async () => {
//     const res = await DocumentPicker.getDocumentAsync({ type: ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"] });

//     if (!res.canceled && res.assets.length > 0) {
//       const { uri, name, mimeType } = res.assets[0];
//       uploadFile(uri, name, mimeType);
//     }
//   };

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 1,
//     });

//     if (!result.canceled && result.assets.length > 0) {
//       const { uri } = result.assets[0];
//       uploadFile(uri, "image.jpg", "image/jpeg");
//     }
//   };

//   const uploadFile = async (uri, fileName, mimeType) => {
//     const formData = new FormData();
//     formData.append("file", {
//       uri,
//       name: fileName,
//       type: mimeType,
//     });

//     try {
//       const response = await fetch("http://192.168.86.29:6000/upload-file", {
//         method: "POST",
//         body: formData,
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       const data = await response.json();
//       Alert.alert("MCQs Generated", JSON.stringify(data, null, 2));
//     } catch (error) {
//       console.error("Upload Error:", error);
//       Alert.alert("Error", "File upload failed. Please try again.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Upload File for MCQs</Text>
//       <TouchableOpacity style={styles.button} onPress={pickDocument}>
//         <Text>📄 Upload PDF/DOCX</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={pickImage}>
//         <Text>🖼️ Upload Image</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   header: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
//   button: { padding: 10, backgroundColor: "#ddd", margin: 10, borderRadius: 5 },
// });

// export default FlashcardScreen;










// chnages of 06-03-25

// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import * as DocumentPicker from "expo-document-picker";
// import * as ImagePicker from "expo-image-picker";
// import { useNavigation } from "@react-navigation/native";

// const FlashcardScreen = () => {
//   const navigation = useNavigation();
//   const pickDocument = async () => {
//     const res = await DocumentPicker.getDocumentAsync({
//       type: ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
//     });

//     if (!res.canceled && res.assets.length > 0) {
//       const { uri, name, mimeType } = res.assets[0];
//       uploadFile(uri, name, mimeType);
//     }
//   };

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 1,
//     });

//     if (!result.canceled && result.assets.length > 0) {
//       const { uri } = result.assets[0];
//       uploadFile(uri, "image.jpg", "image/jpeg");
//     }
//   };

//   const uploadFile = async (uri, fileName, mimeType) => {
//     const formData = new FormData();
//     formData.append("file", {
//       uri,
//       name: fileName,
//       type: mimeType,
//     });

//     try {
//       const response = await fetch("http://192.168.86.29:6000/upload-file", {
//         method: "POST",
//         body: formData,
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       const data = await response.json();
//       Alert.alert("MCQs Generated", "Test is ready!");

//       // Navigate to MCQ Test Screen with data
//       navigation.navigate("MCQTestScreen", { mcqs: data });
//     } catch (error) {
//       console.error("Upload Error:", error);
//       Alert.alert("Error", "File upload failed. Please try again.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Create Flashcard Set</Text>

//       <View style={styles.grid}>
//         <MenuItem icon="file-document-outline" text="Scan Document" onPress={pickDocument} />
//         <MenuItem icon="image-outline" text="Select Images" onPress={pickImage} />
//         <MenuItem icon="content-paste" text="Paste Text" />
//         <MenuItem icon="file-upload-outline" text="Select File" subtext=".pdf, .docx" onPress={pickDocument} />
//         <MenuItem icon="keyboard-outline" text="Create Manually" fullWidth />
//       </View>
//     </View>
//   );
// };

// const MenuItem = ({ icon, text, subtext, fullWidth, onPress }) => (
//   <TouchableOpacity style={[styles.item, fullWidth && styles.fullWidth]} onPress={onPress}>
//     <Icon name={icon} size={30} color="#8a56ff" />
//     <Text style={styles.itemText}>{text}</Text>
//     {subtext && <Text style={styles.subtext}>{subtext}</Text>}
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", padding: 20, alignItems: "center" },
//   header: { fontSize: 22, fontWeight: "bold", marginVertical: 20 },
//   grid: { width: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
//   item: { width: "48%", height: 120, backgroundColor: "#f8f8ff", borderRadius: 15, justifyContent: "center", alignItems: "center", marginBottom: 15, elevation: 4 },
//   fullWidth: { width: "100%" },
//   itemText: { fontSize: 16, fontWeight: "500", marginTop: 8 },
//   subtext: { fontSize: 12, color: "gray", marginTop: 3 },
// });

// export default FlashcardScreen;




// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import * as DocumentPicker from "expo-document-picker";
// import * as ImagePicker from "expo-image-picker";

// const FlashcardScreen = () => {
//   const navigation = useNavigation();

//   const pickDocument = async () => {
//     const res = await DocumentPicker.getDocumentAsync({
//       type: ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
//     });

//     if (!res.canceled && res.assets.length > 0) {
//       const { uri, name, mimeType } = res.assets[0];
//       uploadFile(uri, name, mimeType);
//     }
//   };

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 1,
//     });

//     if (!result.canceled && result.assets.length > 0) {
//       const { uri } = result.assets[0];
//       uploadFile(uri, "image.jpg", "image/jpeg");
//     }
//   };
//   // const uploadFile = async (uri, fileName, mimeType) => {
//   //   const formData = new FormData();
//   //   formData.append("file", { uri, name: fileName, type: mimeType });
  
//   //   try {
//   //     // Navigate to the waiting screen first
//   //     navigation.navigate("MCQLoadingScreen");
  
//   //     const response = await fetch("http://192.168.1.31:6000/upload-file", {
//   //       method: "POST",
//   //       body: formData,
//   //       headers: { "Content-Type": "multipart/form-data" },
//   //     });
  
//   //     const data = await response.json();
  
//   //     // Navigate to MCQ Test Screen once MCQs are generated
//   //     navigation.navigate("MCQTestScreen", { mcqData: data });
  
//   //   } catch (error) {
//   //     console.error("Upload Error:", error);
//   //     Alert.alert("Error", "File upload failed. Please try again.");
//   //   }
//   // };
  
//   const uploadFile = async (uri, fileName, mimeType) => {
//     const formData = new FormData();
//     formData.append("file", { uri, name: fileName, type: mimeType });
  
//     try {
//       // Navigate to the waiting screen first
//       navigation.navigate("MCQTestScreen");
  
//       const response = await fetch("http://192.168.1.31:6000/upload-file", {
//         method: "POST",
//         body: formData,
//         headers: { "Content-Type": "multipart/form-data" },
//       });
  
//       // Get raw text response instead of JSON
      
  
//       // Navigate to MCQ Test Screen with the raw data
//       navigation.navigate("MCQTestScreen");
  
//     } catch (error) {
//       console.error("Upload Error:", error);
//       Alert.alert("Error", "File upload failed. Please try again.");
//     }
//   };
  
  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Create Flashcard Set</Text>

//       <View style={styles.grid}>
//         <MenuItem icon="file-document-outline" text="Scan Document" onPress={pickDocument} />
//         <MenuItem icon="image-outline" text="Select Images" onPress={pickImage} />
//         <MenuItem icon="content-paste" text="Paste Text" />
//         <MenuItem icon="file-upload-outline" text="Select File" subtext=".pdf, .docx" onPress={pickDocument} />
//         <MenuItem icon="keyboard-outline" text="Create Manually" fullWidth />
//       </View>
//     </View>
//   );
// };

// const MenuItem = ({ icon, text, subtext, fullWidth, onPress }) => (
//   <TouchableOpacity style={[styles.item, fullWidth && styles.fullWidth]} onPress={onPress}>
//     <Icon name={icon} size={30} color="#8a56ff" />
//     <Text style={styles.itemText}>{text}</Text>
//     {subtext && <Text style={styles.subtext}>{subtext}</Text>}
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", padding: 20, alignItems: "center" },
//   header: { fontSize: 22, fontWeight: "bold", marginVertical: 20 },
//   grid: { width: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
//   item: { width: "48%", height: 120, backgroundColor: "#f8f8ff", borderRadius: 15, justifyContent: "center", alignItems: "center", marginBottom: 15, elevation: 4 },
//   fullWidth: { width: "100%" },
//   itemText: { fontSize: 16, fontWeight: "500", marginTop: 8 },
//   subtext: { fontSize: 12, color: "gray", marginTop: 3 },
// });

// export default FlashcardScreen;


import React, { useState, useRef } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  TextInput,
  Modal,
  Animated,
  ScrollView,
  StatusBar,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

const COLORS = {
  primary: '#6366F1', // Updated primary color (indigo)
  secondary: '#EC4899', // Updated secondary (pink)
  tertiary: '#8B5CF6', // Added tertiary (violet)
  gradient: {
    start: '#8B5CF6', // Violet
    middle: '#6366F1', // Indigo
    end: '#EC4899', // Pink
  },
  background: '#F9FAFB',
  white: '#FFFFFF',
  text: {
    primary: '#1F2937',
    secondary: '#6B7280',
  },
  inactive: '#D1D5DB',
  shadow: 'rgba(0, 0, 0, 0.1)',
  overlay: 'rgba(31, 41, 55, 0.8)',
};

const FlashcardScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [pastedText, setPastedText] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const headerOpacity = useRef(new Animated.Value(0)).current;
  
  React.useEffect(() => {
    // Staggered animations for better visual effect
    Animated.sequence([
      Animated.timing(headerOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
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
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ]).start();
  }, []);

  const animateSelection = (index) => {
    setSelectedOption(index);
    setTimeout(() => setSelectedOption(null), 800);
  };

  const pickDocument = async () => {
    animateSelection(3);
    const res = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
    });

    if (!res.canceled && res.assets.length > 0) {
      const { uri, name, mimeType } = res.assets[0];
      uploadFile(uri, name, mimeType);
    }
  };

  const pickImage = async () => {
    animateSelection(1);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const { uri } = result.assets[0];
      uploadFile(uri, "image.jpg", "image/jpeg");
    }
  };
  
  const uploadFile = async (uri, fileName, mimeType) => {
    const formData = new FormData();
    formData.append("file", { uri, name: fileName, type: mimeType });
  
    try {
      setIsLoading(true);
      
      const response = await fetch("http://192.168.86.29:6000/upload-file", {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      const data = await response.json();
      setIsLoading(false);
      
      // Navigate to MCQ Test Screen with the data
      navigation.navigate("MCQTestScreen");
  
    } catch (error) {
      console.error("Upload Error:", error);
      setIsLoading(false);
      Alert.alert("Error", "File upload failed. Please try again.");
    }
  };

  const handlePasteText = () => {
    animateSelection(2);
    setModalVisible(true);
  };

  const handleSubmitPastedText = () => {
    if (pastedText.trim() === "") {
      Alert.alert("Error", "Please enter some text");
      return;
    }
    
    setModalVisible(false);
    
    // Process the pasted text here
    // For now, we'll just navigate to the next screen
    navigation.navigate("MCQTestScreen");
  };

  const handleCreateManually = () => {
    animateSelection(4);
    navigation.navigate("CreateFlashcardScreen");
  };
  
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      {/* Header with animated gradient */}
      <LinearGradient
        colors={[COLORS.gradient.start, COLORS.gradient.middle, COLORS.gradient.end]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <Animated.View style={{
          opacity: headerOpacity,
          transform: [{ translateY: Animated.multiply(headerOpacity, -10) }]
        }}>
          <View style={styles.headerContent}>
            <Text style={styles.header}>
              Create Flashcard Set
            </Text>
            <Text style={styles.subheader}>Choose a method to create flashcards</Text>
          </View>
        </Animated.View>
      </LinearGradient>
      
      {/* Main content */}
      <Animated.View 
        style={[
          styles.contentContainer,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: slideAnim }
            ]
          }
        ]}
      >
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent}
          bounces={true}
        >
          <SectionHeader 
            title="Import Content" 
            icon="cloud-upload-outline"
          />
          
          <View style={styles.grid}>
            <MenuItem 
              icon="camera-outline" 
              text="Scan Document" 
              description="Use camera to capture text"
              onPress={() => {
                animateSelection(0);
                pickDocument();
              }}
              selected={selectedOption === 0}
            />
            
            <MenuItem 
              icon="image-outline" 
              text="Select Images" 
              description="Import from gallery"
              onPress={pickImage} 
              selected={selectedOption === 1}
            />
            
            <MenuItem 
              icon="content-paste" 
              text="Paste Text" 
              description="Type or paste text"
              onPress={handlePasteText} 
              selected={selectedOption === 2}
            />
            
            <MenuItem 
              icon="file-upload-outline" 
              text="Select File" 
              description=".pdf, .docx" 
              onPress={pickDocument} 
              selected={selectedOption === 3}
            />
          </View>
          
          <SectionHeader 
            title="Create From Scratch" 
            icon="pencil-plus-outline"
          />
          
          <MenuItem 
            icon="pencil-outline" 
            text="Create Manually" 
            description="Build card by card"
            fullWidth 
            onPress={handleCreateManually}
            selected={selectedOption === 4}
          />
          
          <View style={styles.tipContainer}>
            <LinearGradient
              colors={['rgba(139, 92, 246, 0.15)', 'rgba(236, 72, 153, 0.15)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.tipGradient}
            >
              <Icon name="lightbulb-outline" size={20} color={COLORS.tertiary} />
              <Text style={styles.tipText}>
                For best results, use clear images or well-formatted documents.
              </Text>
            </LinearGradient>
          </View>
        </ScrollView>
      </Animated.View>
      
      {/* Paste Text Modal with blur effect */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView intensity={90} style={styles.modalBlurContainer}>
          <Animated.View 
            style={[styles.modalContent, { 
              transform: [{ scale: modalVisible ? 1 : 0.9 }]
            }]}
          >
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Paste or Type Text</Text>
              <Text style={styles.modalSubtitle}>We'll convert your text into flashcards</Text>
            </View>
            
            <TextInput
              style={styles.textInput}
              multiline
              placeholder="Enter your text here..."
              value={pastedText}
              onChangeText={setPastedText}
              textAlignVertical="top"
              placeholderTextColor={COLORS.text.secondary}
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]} 
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalButton, styles.submitButton]} 
                onPress={handleSubmitPastedText}
              >
                <LinearGradient
                  colors={[COLORS.gradient.start, COLORS.gradient.end]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.submitButtonGradient}
                >
                  <Text style={styles.submitButtonText}>Create Flashcards</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </BlurView>
      </Modal>
      
      {/* Loading Overlay with animation */}
      {isLoading && (
        // <BlurView intensity={90} style={styles.loadingContainer}>
        //   <View style={styles.loadingContent}>
        //     <ActivityIndicator size="large" color={COLORS.primary} />
        //     <Text style={styles.loadingText}>Creating your flashcards...</Text>
        //     <Text style={styles.loadingSubtext}>This may take a moment</Text>
        //   </View>
        // </BlurView>
        navigation.navigate("MCQTestScreen")
      )}
    </View>
  );
};

const SectionHeader = ({ title, icon }) => (
  <View style={styles.sectionHeaderContainer}>
    <View style={styles.sectionIconContainer}>
      <Icon name={icon} size={18} color={COLORS.white} />
    </View>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

const MenuItem = ({ icon, text, description, fullWidth, onPress, selected }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
  React.useEffect(() => {
    if (selected) {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [selected]);
  
  return (
    <Animated.View style={{ 
      width: fullWidth ? '100%' : '48%',
      transform: [{ scale: scaleAnim }]
    }}>
      <TouchableOpacity 
        style={[
          styles.item, 
          fullWidth && styles.fullWidth,
          selected && styles.itemSelected
        ]} 
        onPress={onPress}
        activeOpacity={0.8}
      >
        {selected ? (
          <LinearGradient
            colors={[COLORS.gradient.start, COLORS.gradient.end]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.itemGradient}
          >
            <ItemContent 
              icon={icon} 
              text={text} 
              description={description} 
              selected={selected} 
            />
          </LinearGradient>
        ) : (
          <View style={styles.itemGradient}>
            <ItemContent 
              icon={icon} 
              text={text} 
              description={description} 
              selected={selected} 
            />
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const ItemContent = ({ icon, text, description, selected }) => (
  <>
    <View style={[styles.iconContainer, selected && styles.iconContainerSelected]}>
      <Icon 
        name={icon} 
        size={24} 
        color={selected ? COLORS.white : COLORS.primary} 
      />
    </View>
    
    <View style={styles.textContainer}>
      <Text style={[
        styles.itemText,
        selected && styles.itemTextSelected
      ]}>
        {text}
      </Text>
      
      {description && (
        <Text style={[
          styles.description,
          selected && styles.descriptionSelected
        ]}>
          {description}
        </Text>
      )}
    </View>
    
    <Icon 
      name="chevron-right" 
      size={20} 
      color={selected ? COLORS.white : COLORS.inactive} 
      style={styles.chevron}
    />
  </>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background,
  },
  headerGradient: {
    paddingTop: 60,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  headerContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: COLORS.white,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subheader: {
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.9,
    marginTop: 6,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.background,
    overflow: 'hidden',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  sectionIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text.primary,
  },
  grid: { 
    width: "100%", 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between",
  },
  item: { 
    height: 110, 
    marginBottom: 15, 
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    backgroundColor: COLORS.white,
  },
  itemGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
  },
  itemSelected: {
    elevation: 8,
    shadowOpacity: 0.25,
  },
  fullWidth: { 
    height: 100,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  itemText: { 
    fontSize: 16, 
    fontWeight: "700", 
    color: COLORS.text.primary,
  },
  itemTextSelected: {
    color: COLORS.white,
  },
  description: { 
    fontSize: 14, 
    color: COLORS.text.secondary, 
    marginTop: 4 
  },
  descriptionSelected: {
    color: COLORS.white,
    opacity: 0.8,
  },
  chevron: {
    marginLeft: 10,
  },
  tipContainer: {
    marginTop: 25,
    marginBottom: 10,
  },
  tipGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 16,
  },
  tipText: {
    fontSize: 14,
    color: COLORS.text.secondary,
    fontStyle: 'italic',
    marginLeft: 10,
    flex: 1,
  },
  
  // Modal Styles
  modalBlurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.overlay,
    padding: 20,
  },
  modalContent: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text.primary,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 14,
    color: COLORS.text.secondary,
    marginTop: 5,
    textAlign: 'center',
  },
  textInput: {
    height: 200,
    borderWidth: 1,
    borderColor: COLORS.inactive,
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    color: COLORS.text.primary,
    backgroundColor: COLORS.background,
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 54,
    overflow: 'hidden',
  },
  cancelButton: {
    backgroundColor: COLORS.background,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.inactive,
  },
  submitButton: {
    marginLeft: 10,
    overflow: 'hidden',
  },
  submitButtonGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: COLORS.text.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Loading Overlay
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  loadingContent: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    width: width * 0.8,
    maxWidth: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  loadingSubtext: {
    fontSize: 14,
    color: COLORS.text.secondary,
    marginTop: 4,
    textAlign: 'center',
  }
});
export default FlashcardScreen;