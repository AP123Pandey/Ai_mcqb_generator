
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Image,
//   Alert,
// } from "react-native";
// import * as ImagePicker from "react-native-image-picker";
// import axios from "axios";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     fathers_name: "",
//     date_of_birth: "",
//     primary_mobile: "",
//     whatsapp_number: "",
//     secondary_mobile: "",
//     blood_group: "",
//     city: "",
//     complete_address: "",
//     languages_known: "",
//     referral_code: "",
//   });

//   const [profilePicture, setProfilePicture] = useState(null);

//   // Handle Input Changes
//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const selectProfilePicture = async () => {
//     const result = await ImagePicker.launchImageLibrary({
//       mediaType: "photo",
//       quality: 1,
//     });
  
//     if (result.didCancel) {
//       Alert.alert("Cancelled", "Image selection was cancelled.");
//     } else if (result.errorMessage) {
//       Alert.alert("Error", result.errorMessage);
//     } else if (result.assets && result.assets.length > 0) {
//       setProfilePicture(result.assets[0]);
//     }
//   };
  

//   // Handle Submit
//   const handleSubmit = async () => {
//     if (!formData.first_name || !formData.primary_mobile) {
//       Alert.alert("Error", "Please fill all required fields.");
//       return;
//     }

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     if (profilePicture) {
//       data.append("profile_picture", {
//         uri: profilePicture.uri,
//         type: profilePicture.type,
//         name: profilePicture.fileName,
//       });
//     }

//     try {
//       const response = await axios.post(
//         "http://192.168.38.29:5000/api/register", // Replace with your backend URL
//         data,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       Alert.alert("Success", response.data.message);
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "Failed to register. Please try again.");
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Personal Information</Text>

//       {/* First Name */}
//       <TextInput
//         style={styles.input}
//         placeholder="First Name"
//         value={formData.first_name}
//         onChangeText={(value) => handleInputChange("first_name", value)}
//       />

//       {/* Last Name */}
//       <TextInput
//         style={styles.input}
//         placeholder="Last Name"
//         value={formData.last_name}
//         onChangeText={(value) => handleInputChange("last_name", value)}
//       />

//       {/* Father's Name */}
//       <TextInput
//         style={styles.input}
//         placeholder="Father's Name"
//         value={formData.fathers_name}
//         onChangeText={(value) => handleInputChange("fathers_name", value)}
//       />

//       {/* Date of Birth */}
//       <TextInput
//         style={styles.input}
//         placeholder="Date of Birth (dd-mm-yyyy)"
//         value={formData.date_of_birth}
//         onChangeText={(value) => handleInputChange("date_of_birth", value)}
//       />

//       {/* Primary Mobile */}
//       <TextInput
//         style={styles.input}
//         placeholder="Primary Mobile Number"
//         value={formData.primary_mobile}
//         onChangeText={(value) => handleInputChange("primary_mobile", value)}
//         keyboardType="phone-pad"
//       />

//       {/* WhatsApp Number */}
//       <TextInput
//         style={styles.input}
//         placeholder="WhatsApp Number"
//         value={formData.whatsapp_number}
//         onChangeText={(value) => handleInputChange("whatsapp_number", value)}
//         keyboardType="phone-pad"
//       />

//       {/* Secondary Mobile */}
//       <TextInput
//         style={styles.input}
//         placeholder="Secondary Mobile (Optional)"
//         value={formData.secondary_mobile}
//         onChangeText={(value) => handleInputChange("secondary_mobile", value)}
//         keyboardType="phone-pad"
//       />

//       {/* Blood Group */}
//       <TextInput
//         style={styles.input}
//         placeholder="Blood Group"
//         value={formData.blood_group}
//         onChangeText={(value) => handleInputChange("blood_group", value)}
//       />

//       {/* City */}
//       <TextInput
//         style={styles.input}
//         placeholder="City"
//         value={formData.city}
//         onChangeText={(value) => handleInputChange("city", value)}
//       />

//       {/* Address */}
//       <TextInput
//         style={[styles.input, styles.textArea]}
//         placeholder="Enter complete address here"
//         value={formData.complete_address}
//         onChangeText={(value) => handleInputChange("complete_address", value)}
//         multiline
//       />

//       {/* Languages Known */}
//       <TextInput
//         style={styles.input}
//         placeholder="Languages you know"
//         value={formData.languages_known}
//         onChangeText={(value) => handleInputChange("languages_known", value)}
//       />

//       {/* Referral Code */}
//       <TextInput
//         style={styles.input}
//         placeholder="Referral Code (Optional)"
//         value={formData.referral_code}
//         onChangeText={(value) => handleInputChange("referral_code", value)}
//       />

//       {/* Profile Picture */}
//       <View style={styles.uploadSection}>
//         <TouchableOpacity onPress={selectProfilePicture} style={styles.uploadButton}>
//           <Text style={styles.uploadButtonText}>Upload Photo</Text>
//         </TouchableOpacity>
//         {profilePicture && (
//           <Image source={{ uri: profilePicture.uri }} style={styles.profilePicture} />
//         )}
//       </View>

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 15,
//   },
//   textArea: {
//     height: 80,
//     textAlignVertical: "top",
//   },
//   uploadSection: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   uploadButton: {
//     backgroundColor: "#f36",
//     padding: 10,
//     borderRadius: 8,
//   },
//   uploadButtonText: {
//     color: "#fff",
//   },
//   profilePicture: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginTop: 10,
//   },
//   submitButton: {
//     backgroundColor: "#f36",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   submitButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default RegistrationForm;















// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Image,
//   Alert,
// } from "react-native";

// import axios from "axios";
// import * as Permissions from 'expo-permissions';
// import * as ImagePicker from 'expo-image-picker';



// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     fathers_name: "",
//     date_of_birth: "",
//     primary_mobile: "",
//     whatsapp_number: "",
//     secondary_mobile: "",
//     blood_group: "",
//     city: "",
//     complete_address: "",
//     languages_known: "",
//     referral_code: "",
//   });


  
//   const requestPermission = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert("Permission Required", "We need access to your media library.");
//       return false;
//     }
//     return true;
//   };

//   const [profilePicture, setProfilePicture] = useState(null);

//   // Handle Input Changes
//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const selectProfilePicture = async () => {
//     // Request permissions
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert("Permission Required", "We need access to your media library.");
//       return;
//     }
  
//     // Launch image picker
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaType: ImagePicker.MediaTypeOptions.Photo,
//       quality: 1,
//     });
  
//     // Handle the result
//     if (result.cancelled) {
//       Alert.alert("Cancelled", "Image selection was cancelled.");
//     } else if (result.errorMessage) {
//       Alert.alert("Error", result.errorMessage);
//     } else if (result.assets && result.assets.length > 0) {
//       setProfilePicture(result.assets[0]);
//     }
//   };
  


//   const handleSubmit = async () => {
//     if (!formData.first_name || !formData.primary_mobile) {
//       Alert.alert("Error", "Please fill all required fields.");
//       return;
//     }
  
//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });
  
//     if (profilePicture) {
//       data.append("profile_picture", {
//         uri: profilePicture.uri,
//         type: "image/jpeg", // Update with correct MIME type
//         name: profilePicture.uri.split("/").pop(), // Extract filename
//       });
//     }
  
//     try {
//       const response = await axios.post(
//         "http://192.168.38.29:5000/api/register",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       Alert.alert("Success", response.data.message);
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "Failed to register. Please try again.");
//     }
//   };
  

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Personal Information</Text>

//       {/* First Name */}
//       <TextInput
//         style={styles.input}
//         placeholder="First Name"
//         value={formData.first_name}
//         onChangeText={(value) => handleInputChange("first_name", value)}
//       />

//       {/* Last Name */}
//       <TextInput
//         style={styles.input}
//         placeholder="Last Name"
//         value={formData.last_name}
//         onChangeText={(value) => handleInputChange("last_name", value)}
//       />

     

//       {/* Date of Birth */}
//       <TextInput
//         style={styles.input}
//         placeholder="Date of Birth (dd-mm-yyyy)"
//         value={formData.date_of_birth}
//         onChangeText={(value) => handleInputChange("date_of_birth", value)}
//       />

//       {/* Primary Mobile */}
//       <TextInput
//         style={styles.input}
//         placeholder="Primary Mobile Number"
//         value={formData.primary_mobile}
//         onChangeText={(value) => handleInputChange("primary_mobile", value)}
//         keyboardType="phone-pad"
//       />

     

     

//       {/* City */}
//       <TextInput
//         style={styles.input}
//         placeholder="City"
//         value={formData.city}
//         onChangeText={(value) => handleInputChange("city", value)}
//       />

//       {/* Address */}
//       <TextInput
//         style={[styles.input, styles.textArea]}
//         placeholder="Enter complete address here"
//         value={formData.complete_address}
//         onChangeText={(value) => handleInputChange("complete_address", value)}
//         multiline
//       />

      

//       {/* Referral Code */}
//       <TextInput
//         style={styles.input}
//         placeholder="Referral Code (Optional)"
//         value={formData.referral_code}
//         onChangeText={(value) => handleInputChange("referral_code", value)}
//       />

//       {/* Profile Picture */}
//       <View style={styles.uploadSection}>
//         <TouchableOpacity onPress={selectProfilePicture} style={styles.uploadButton}>
//           <Text style={styles.uploadButtonText}>Upload Photo</Text>
//         </TouchableOpacity>
//         {profilePicture && (
//           <Image source={{ uri: profilePicture.uri }} style={styles.profilePicture} />
//         )}
//       </View>

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 15,
//   },
//   textArea: {
//     height: 80,
//     textAlignVertical: "top",
//   },
//   uploadSection: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   uploadButton: {
//     backgroundColor: "#f36",
//     padding: 10,
//     borderRadius: 8,
//   },
//   uploadButtonText: {
//     color: "#fff",
//   },
//   profilePicture: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginTop: 10,
//   },
//   submitButton: {
//     backgroundColor: "#f36",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   submitButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default RegistrationForm;





























































// change form naviage and change




import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

const RegistrationForm = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    fathers_name: "",
    date_of_birth: "",
    primary_mobile: "",
    whatsapp_number: "",
    secondary_mobile: "",
    blood_group: "",
    city: "",
    complete_address: "",
    languages_known: "",
    referral_code: "",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const selectProfilePicture = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "We need access to your media library.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Photo,
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.assets[0]);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Corrected typo
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
      setFormData({ ...formData, date_of_birth: formattedDate }); // Update formData
    }
  };

  const handleSubmit = async () => {
    if (!formData.first_name || !formData.primary_mobile) {
      Alert.alert("Error", "Please fill all required fields.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (profilePicture) {
      data.append("profile_picture", {
        uri: profilePicture.uri,
        type: "image/jpeg",
        name: profilePicture.uri.split("/").pop(),
      });
    }

    try {
      const response = await axios.post(
        "http://192.168.86.29:6000/api/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Alert.alert("Success", response.data.message);
      navigation.navigate("Login"); // Redirect to login page
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to register. Please try again.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Personal Information</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.first_name}
        onChangeText={(value) => handleInputChange("first_name", value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.last_name}
        onChangeText={(value) => handleInputChange("last_name", value)}
      />

<TouchableOpacity onPress={() => setShowDatePicker(true)}>
  <View style={styles.dateInput}>
    <Text style={styles.dateText}>
      {formData.date_of_birth || "Select Date of Birth"}
    </Text>
  </View>
</TouchableOpacity>
{showDatePicker && (
  <DateTimePicker
    value={new Date()}
    mode="date"
    display="default"
    onChange={handleDateChange}
  />
)}

<TextInput
  style={styles.input}
  placeholder="Primary Mobile Number"
  value={formData.primary_mobile}
  onChangeText={(value) => handleInputChange("primary_mobile", value)}
  keyboardType="phone-pad"
  maxLength={10}
/>

      <TextInput
        style={styles.input}
        placeholder="City"
        value={formData.city}
        onChangeText={(value) => handleInputChange("city", value)}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter complete address here"
        value={formData.complete_address}
        onChangeText={(value) => handleInputChange("complete_address", value)}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Referral Code (Optional)"
        value={formData.referral_code}
        onChangeText={(value) => handleInputChange("referral_code", value)}
      />

      <View style={styles.uploadSection}>
        <TouchableOpacity onPress={selectProfilePicture} style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload Photo</Text>
        </TouchableOpacity>
        {profilePicture && (
          <Image source={{ uri: profilePicture.uri }} style={styles.profilePicture} />
        )}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  dateText: {
    color: "#888",
  },
  uploadSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: "#f36",
    padding: 10,
    borderRadius: 8,
  },
  uploadButtonText: {
    color: "#fff",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: "#f36",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegistrationForm;
