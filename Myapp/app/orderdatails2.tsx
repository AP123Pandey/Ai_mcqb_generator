

// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Linking, ActivityIndicator, Animated, TouchableOpacity, Dimensions } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import opencage from "opencage-api-client";
// import { useRoute } from "@react-navigation/native";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as ImagePicker from 'expo-image-picker';
// import Toast from 'react-native-toast-message';
// import { useNavigation } from '@react-navigation/native'; // Import navigation hook

 


// const DEFAULT_COORDS = { latitude: 19.076, longitude: 72.8777 };
// const TIMEOUT_DURATION = 10000; // 10 seconds timeout

// const OrderDetailsScreen2 = () => {
//   const [userLocation, setUserLocation] = useState(null);
//   const [adminLocation, setAdminLocation] = useState(null);
//   const [loadingMap, setLoadingMap] = useState(true);
//   const [mapError, setMapError] = useState(false);
//   const fadeAnim = new Animated.Value(0);
//   const slideAnim = new Animated.Value(-50);
//   const route = useRoute();
//   const { order2 } = route.params;

//   const navigation = useNavigation(); // Access navigation object


 







//   const uploadFoodImage = async () => {
//     try {
//         const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (!permissionResult.granted) {
//             alert('Permission to access media library is required!');
//             return;
//         }

//         const pickerResult = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         if (pickerResult.canceled) {
//             return;
//         }

//         const userData = JSON.parse(await AsyncStorage.getItem('user'));
//         const { id: loginId } = userData;

//         const formData = new FormData();
//         formData.append('food_image', {
//             uri: pickerResult.assets ? pickerResult.assets[0].uri : pickerResult.uri,
//             type: 'image/jpeg',
//             name: 'food-image.jpg',
//         });
//         formData.append('loginId', loginId);
//         formData.append('adminId', order2.admin_id);
//         formData.append('userId', order2.user_id);
//         formData.append('subscriptionId', order2.subscription_id);
//         formData.append('adminName', `${order2.admin_first_name} ${order2.admin_last_name}`);
//         formData.append('userName', `${order2.user_first_name} ${order2.user_last_name}`);

//         const response = await fetch('http://192.168.86.29:6000/api/upload-food-image', {
//             method: 'POST',
//             body: formData,
//         });

//         const data = await response.json();
//         if (response.ok) {
//             alert('Image uploaded successfully!');
//             console.log('Uploaded Image URL:', data.imageUrl);
//         } else {
//             console.error('Failed to upload image:', data.error);
//         }
//     } catch (error) {
//         console.error('Error uploading image:', error);
//     }
// };










// const uploadFoodImageofclint = async () => {
//   try {
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (!permissionResult.granted) {
//           alert('Permission to access media library is required!');
//           return;
//       }

//       const pickerResult = await ImagePicker.launchImageLibraryAsync({
//           mediaTypes: ImagePicker.MediaTypeOptions.Images,
//           allowsEditing: true,
//           aspect: [4, 3],
//           quality: 1,
//       });

//       if (pickerResult.canceled) {
//           return;
//       }
//       const user = await AsyncStorage.getItem('user');
//       if (!user) {
//           console.error('User not logged in');
//           return;
//       }
    
//       const { id: loginId } = JSON.parse(user); // Extract the user ID
//       console.log('Fetching data for ID:', loginId);
     

//       const formData = new FormData();
//       formData.append('food_image_clint', {
//           uri: pickerResult.assets ? pickerResult.assets[0].uri : pickerResult.uri,
//           type: 'image/jpeg',
//           name: 'food-image.jpg',
//       });
//       formData.append('loginId', loginId);
//       formData.append('adminId', order2.admin_id);
//       formData.append('userId', order2.user_id);
//       formData.append('subscriptionId', order2.subscription_id);
//       formData.append('adminName', `${order2.admin_first_name} ${order2.admin_last_name}`);
//       formData.append('userName', `${order2.user_first_name} ${order2.user_last_name}`);

//       const response = await fetch('http://192.168.86.29:6000/api/upload-food-image-clint', {
//           method: 'POST',
//           body: formData,
//       });

//       const data = await response.json();
      
   
      
//       if (response.ok) {
//           // Display success toast
//       Toast.show({
//         type: 'success',
//         text1: 'Success',
//         text2: 'Image uploaded successfully!',
//         visibilityTime: 3000,
//         position: 'bottom',
//         style: { backgroundColor: 'orange', borderRadius: 10 },
//         textStyle: { color: 'white' },
//       });

//       // Refresh page
//       // Trigger a re-render to simulate refresh
//       // Redirect after 1 second
//       setTimeout(() => {
//         navigation.navigate('Order2'); // Navigate to OrdersScreen2
//       }, 1000);
//           console.log('Uploaded Image URL:', data.imageUrl);
//       } else {
//           console.error('Failed to upload image:', data.error);
//       }
//   } catch (error) {
//       console.error('Error uploading image:', error);
//   }
// };
































//   const openInGoogleMaps = (latitude, longitude) => {
//     const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
//     Linking.openURL(url).catch((err) =>
//       console.error("Failed to open Google Maps:", err)
//     );
//   };

  
//   const {
//     admin_area,
//     admin_landmark,
//     admin_city,
//     admin_state,
//     admin_pincode,
//     admin_house,
//     user_city,
//     user_state,
//     user_pincode,
//     user_house,
//     user_area,
//     user_landmark,
//     user_first_name,
//     user_last_name,
//     user_mobile,
//     user_email,
//     admin_first_name,
//     admin_last_name,
//     amount,
//     admin_email,
//     admin_mobile,
//   } = order2;

//   const getCoordinates = async (address) => {
//     try {
//       const response = await Promise.race([
//         opencage.geocode({
//           q: address,
//           key: "60396870226f4ec1a575583b4fc610bf",
//         }),
//         new Promise((_, reject) =>
//           setTimeout(() => reject(new Error("Geocoding timeout")), TIMEOUT_DURATION)
//         ),
//       ]);

//       if (response.results.length > 0) {
//         const { lat, lng } = response.results[0].geometry;
//         return { latitude: lat, longitude: lng };
//       }
//       console.warn(`No results found for address: ${address}`);
//       return DEFAULT_COORDS;
//     } catch (error) {
//       console.error("Error fetching coordinates:", error);
//       return DEFAULT_COORDS;
//     }
//   };

//   useEffect(() => {
//     let mounted = true;

//     const fetchLocations = async () => {
//       try {
//         setLoadingMap(true);
//         setMapError(false);

//         const userAddress = `${user_house}, ${user_area}, ${user_landmark}, ${user_city}, ${user_state}, ${user_pincode}`;
//         const adminAddress = `${admin_house}, ${admin_area}, ${admin_landmark}, ${admin_city}, ${admin_state}, ${admin_pincode}`;

//         const [userCoords, adminCoords] = await Promise.all([
//           getCoordinates(userAddress),
//           getCoordinates(adminAddress),
//         ]);

//         if (mounted) {
//           setUserLocation(userCoords);
//           setAdminLocation(adminCoords);
//           setLoadingMap(false);
//         }
//       } catch (error) {
//         console.error("Error in fetchLocations:", error);
//         if (mounted) {
//           setMapError(true);
//           setLoadingMap(false);
//         }
//       }
//     };

//     fetchLocations();

//     // Cleanup function
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//       Animated.spring(slideAnim, {
//         toValue: 0,
//         tension: 50,
//         friction: 7,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, []);

//   const MapContainer = ({ location, title }) => {
//     if (loadingMap) {
//       return (
//         <View style={styles.mapLoadingContainer}>
//           <ActivityIndicator size="large" color="#FF6B00" />
//           <Text style={styles.loadingText}>Loading map...</Text>
//         </View>
//       );
//     }

//     if (mapError) {
//       return (
//         <View style={styles.mapErrorContainer}>
//           <Text style={styles.errorText}>Unable to load map</Text>
//           <TouchableOpacity
//             style={styles.retryButton}
//             onPress={() => {
//               setLoadingMap(true);
//               setMapError(false);
//               fetchLocations();
//             }}
//           >
//             <Text style={styles.retryButtonText}>Retry</Text>
//           </TouchableOpacity>
//         </View>
//       );
//     }

//     if (!userLocation || !adminLocation) {
//       return (
//         <View style={styles.mapErrorContainer}>
//           <Text style={styles.errorText}>Location data unavailable</Text>
//         </View>
//       );
//     }

//     return (
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: location.latitude,
//           longitude: location.longitude,
//           latitudeDelta: 0.1,
//           longitudeDelta: 0.1,
//         }}
//       >
//         <Marker
//           coordinate={userLocation}
//           title="User Location"
//           description="User's Address"
//         />
//         <Marker
//           coordinate={adminLocation}
//           title="Admin Location"
//           description="Admin's Address"
//         />
//       </MapView>
//     );
//   };

//   // ... rest of the existing functionality remains the same ...

//   const CustomButton = ({ title, onPress, style }) => (
//     <TouchableOpacity
//       onPress={onPress}
//       style={[styles.customButton, style]}
//       activeOpacity={0.8}
//     >
//       <Text style={styles.buttonText}>{title}</Text>
//     </TouchableOpacity>
//   );



  


  
//   return (
//     <Animated.ScrollView
//       style={[
//         styles.container,
//         {
//           opacity: fadeAnim,
//           transform: [{ translateY: slideAnim }],
//         },
//       ]}
//     >
//       <Text style={styles.header}>Order Details</Text>
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>📦 Order Information</Text>
//         <View style={styles.cardContent}>
//           <View style={styles.infoRow}>
//             <Text style={styles.label}>Client</Text>
//             <Text style={styles.value}>
//               {user_first_name} {user_last_name}
//             </Text>
//           </View>
//           <View style={styles.infoRow}>
//             <Text style={styles.label}>Amount</Text>
//             <Text style={styles.valueAmount}>₹ {amount}</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.mapContainer}>
//         <MapContainer location={adminLocation || DEFAULT_COORDS} title="Admin Location" />
//       </View>
     

//       <CustomButton
//         title="📍 Open Admin Location"
//         onPress={() =>
//           openInGoogleMaps(adminLocation.latitude, adminLocation.longitude)
//         }
//       />





//       <View style={styles.Custb} >
//       <CustomButton
//         title=" Upload food image  "
//         onPress={uploadFoodImage}
        
//       />

//       </View>




//       <View style={styles.detailsCard}>
//         <Text style={styles.sectionTitle}>👤 Admin Details</Text>
//         <View style={styles.detailsContent}>
//           <Text style={styles.detailRow}>
//             <Text style={styles.detailLabel}>Name: </Text>
//             {admin_first_name} {admin_last_name}
//           </Text>
//           <Text style={styles.detailRow}>
//             <Text style={styles.detailLabel}>Email: </Text>
//             {admin_email}
//           </Text>
//           <Text style={styles.detailRow}>
//             <Text style={styles.detailLabel}>Mobile: </Text>
//             {admin_mobile}
//           </Text>
//           <Text style={styles.address}>
//             {admin_house}, {admin_area}, {admin_landmark}, {admin_city}, {admin_state}, {admin_pincode}
//           </Text>
//         </View>
//       </View>

      

//       <CustomButton
//         title="📍 Open User Location"
//         onPress={() =>
//           openInGoogleMaps(userLocation.latitude, userLocation.longitude)
//         }
//       />
// <View style={styles.mapContainer}>
//         <MapContainer location={userLocation || DEFAULT_COORDS} title="User Location" />
//       </View>
//       <View style={styles.detailsCard}>
//         <Text style={styles.sectionTitle}>👤 User Details</Text>
//         <View style={styles.detailsContent}>
//           <Text style={styles.detailRow}>
//             <Text style={styles.detailLabel}>Email: </Text>
//             {user_email}
//           </Text>
//           <Text style={styles.detailRow}>
//             <Text style={styles.detailLabel}>Mobile: </Text>
//             {user_mobile}
//           </Text>
//           <Text style={styles.address}>
//             {user_house}, {user_area}, {user_landmark}, {user_city}, {user_state}, {user_pincode}
//           </Text>
//         </View>
//       </View>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <CustomButton
//         title="🚚  Order deleverd"
//         onPress={uploadFoodImageofclint}
        
//         style={styles.pickOrderButton}
//       />
//       <Toast />
//     </View>
      
//     </Animated.ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
    
//   },
//   Custb:{
//         display:"flex",
//         flexDirection:"column",
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 24,
//     color: "#FF6B00",
//     textAlign: "center",
//     paddingVertical: 12,
//   },
//   card: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 24,
//     elevation: 4,
//     shadowColor: "#FF6B00",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#FF6B00",
//     marginBottom: 16,
//   },
//   cardContent: {
//     gap: 12,
//   },
//   infoRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: "#FFE0CC",
//   },
//   label: {
//     fontSize: 16,
//     color: "#666666",
//   },
//   value: {
//     fontSize: 16,
//     color: "#333333",
//     fontWeight: "600",
//   },
//   valueAmount: {
//     fontSize: 20,
//     color: "#FF6B00",
//     fontWeight: "bold",
//   },
//   mapContainer: {
//     height: 200,
//     borderRadius: 16,
//     overflow: "hidden",
//     marginBottom: 16,
//     elevation: 4,
//     shadowColor: "#FF6B00",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//   },
//   map: {
//     flex: 1,
//   },
//   customButton: {
//     backgroundColor: "#FF6B00",
//     paddingVertical: 14,
//     paddingHorizontal: 24,
//     borderRadius: 12,
//     marginBottom: 16,
//     elevation: 2,
//     shadowColor: "#FF6B00",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   detailsCard: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 24,
//     elevation: 4,
//     shadowColor: "#FF6B00",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#FF6B00",
//     marginBottom: 16,
//   },
//   detailsContent: {
//     gap: 12,
//   },
//   detailRow: {
//     fontSize: 16,
//     color: "#333333",
//     marginBottom: 8,
//   },
//   detailLabel: {
//     color: "#666666",
//     fontWeight: "600",
//   },
//   address: {
//     fontSize: 16,
//     color: "#333333",
//     lineHeight: 24,
//     marginTop: 8,
//     paddingTop: 8,
//     borderTopWidth: 1,
//     borderTopColor: "#FFE0CC",
//   },
//   pickOrderButton: {
//     backgroundColor: "#FF6B00",
//     marginTop: 8,
//     marginBottom: 32,
//   },
//   mapLoadingContainer: {
   
//     borderWidth: 1,
    
//   },
//   mapErrorContainer: {
   
//     borderWidth: 1,
    
//   },
//   loadingText: {
//     marginTop: 12,
//     color: '#666666',
//     fontSize: 16,
//   },
//   errorText: {
//     color: '#FF6B00',
//     fontSize: 16,
//     marginBottom: 12,
//   },
//   retryButton: {
   
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
  
// });

// export default OrderDetailsScreen2;













import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, StyleSheet, Linking, ActivityIndicator, Animated, TouchableOpacity, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import opencage from "opencage-api-client";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';


const COLORS = {
  pink: '#FF69B4',
  blue: '#1E90FF',
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
  accent: '#FF6B00'
};

const DEFAULT_COORDS = { latitude: 19.076, longitude: 72.8777 };
const TIMEOUT_DURATION = 10000;
const SERVER_URL = 'http://192.168.86.29:6000/api';

const OrderDetailsScreen2 = () => {

  const [userLocation, setUserLocation] = useState(null);
  const [adminLocation, setAdminLocation] = useState(null);
  const [loadingMap, setLoadingMap] = useState(true);
  const [mapError, setMapError] = useState(false);
  const [isPickingOrder, setIsPickingOrder] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigation = useNavigation(); 

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  const route = useRoute();
  const { order2 } = route.params;
 

  const getCoordinates = useCallback(async (address) => {
    try {
      const response = await Promise.race([
        opencage.geocode({
          q: address,
          key: "60396870226f4ec1a575583b4fc610bf",
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Geocoding timeout")), TIMEOUT_DURATION)
        ),
      ]);

      if (response.results.length > 0) {
        const { lat, lng } = response.results[0].geometry;
        return { latitude: lat, longitude: lng };
      }
      return DEFAULT_COORDS;
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return DEFAULT_COORDS;
    }
  }, []);

  const fetchLocations = useCallback(async () => {
    if (!mounted) return;

    try {
      setLoadingMap(true);
      setMapError(false);

      const userAddress = `${order2.user_house}, ${order2.user_area}, ${order2.user_landmark}, ${order2.user_city}`;
      const adminAddress = `${order2.admin_house}, ${order2.admin_area}, ${order2.admin_landmark}, ${order2.admin_city}`;

      const [userCoords, adminCoords] = await Promise.all([
        getCoordinates(userAddress),
        getCoordinates(adminAddress),
      ]);

      if (mounted) {
        setUserLocation(userCoords);
        setAdminLocation(adminCoords);
        setLoadingMap(false);
      }
    } catch (error) {
      if (mounted) {
        console.error("Error in fetchLocations:", error);
        setMapError(true);
        setLoadingMap(false);
      }
    }
  }, [mounted, getCoordinates, order2]);

  useEffect(() => {
    setMounted(true);
    fetchLocations();

    const animateIn = Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]);

    animateIn.start();

    return () => {
      setMounted(false);
      animateIn.stop();
      fadeAnim.setValue(0);
      slideAnim.setValue(-50);
      scaleAnim.setValue(0.95);
    };
  }, [fadeAnim, slideAnim, scaleAnim, fetchLocations]);

  const openInGoogleMaps = useCallback((latitude, longitude) => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open Google Maps:", err)
    );
  }, []);

  


//   const uploadFoodImage = async () => {
//     try {
//       const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
//       if (!permissionResult.granted) {
//         alert('Permission to access camera is required!');
//         return;
//       }

//       const pickerResult = await ImagePicker.launchCameraAsync({
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });
  

//         if (pickerResult.canceled) {
//             return;
//         }

//         const userData = JSON.parse(await AsyncStorage.getItem('user'));
//         const { id: loginId } = userData;

//         const formData = new FormData();
//         formData.append('food_image', {
//             uri: pickerResult.assets ? pickerResult.assets[0].uri : pickerResult.uri,
//             type: 'image/jpeg',
//             name: 'food-image.jpg',
//         });
//         formData.append('loginId', loginId);
//         formData.append('adminId', order2.admin_id);
//         formData.append('userId', order2.user_id);
//         formData.append('subscriptionId', order2.subscription_id);
//         formData.append('adminName', `${order2.admin_first_name} ${order2.admin_last_name}`);
//         formData.append('userName', `${order2.user_first_name} ${order2.user_last_name}`);

//         const response = await fetch('http://192.168.86.29:6000/api/upload-food-image', {
//             method: 'POST',
//             body: formData,
//         });

//         const data = await response.json();
//         if (response.ok) {
//             alert('Image uploaded successfully!');
//             console.log('Uploaded Image URL:', data.imageUrl);
//         } else {
//             console.error('Failed to upload image:', data.error);
//         }
//     } catch (error) {
//         console.error('Error uploading image:', error);
//     }
// };






const uploadFoodImage = async () => {
  try {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access camera is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (pickerResult.canceled) {
      return;
    }

    const userData = JSON.parse(await AsyncStorage.getItem('user'));
    const { id: loginId } = userData;

    const formData = new FormData();
    formData.append('food_image', {
      uri: pickerResult.assets ? pickerResult.assets[0].uri : pickerResult.uri,
      type: 'image/jpeg',
      name: 'food-image.jpg',
    });
    formData.append('loginId', loginId);
    formData.append('adminId', order2.admin_id);
    formData.append('userId', order2.user_id);
    formData.append('subscriptionId', order2.subscription_id);
    formData.append('adminName', `${order2.admin_first_name} ${order2.admin_last_name}`);
    formData.append('userName', `${order2.user_first_name} ${order2.user_last_name}`);

    const response = await fetch('http://192.168.86.29:6000/api/upload-food-image', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Image uploaded successfully!',
        visibilityTime: 3000,
        position: 'bottom',
        style: { backgroundColor: 'orange', borderRadius: 10 },
        textStyle: { color: 'white' },
      });
      setIsButtonDisabled(true); // Disable the button on success
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error!',
        text2: data.error || 'Failed to upload image.',
      });
    }
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Error!',
      text2: 'An error occurred during the upload.',
    });
    console.error('Error uploading image:', error);
  }
};







// const uploadFoodImageofclint = async () => {
//   try {
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (!permissionResult.granted) {
//           alert('Permission to access media library is required!');
//           return;
//       }

//       const pickerResult = await ImagePicker.launchImageLibraryAsync({
//           mediaTypes: ImagePicker.MediaTypeOptions.Images,
//           allowsEditing: true,
//           aspect: [4, 3],
//           quality: 1,
//       });

//       if (pickerResult.canceled) {
//           return;
//       }
//       const user = await AsyncStorage.getItem('user');
//       if (!user) {
//           console.error('User not logged in');
//           return;
//       }
    
//       const { id: loginId } = JSON.parse(user); // Extract the user ID
//       console.log('Fetching data for ID:', loginId);
     

//       const formData = new FormData();
//       formData.append('food_image_clint', {
//           uri: pickerResult.assets ? pickerResult.assets[0].uri : pickerResult.uri,
//           type: 'image/jpeg',
//           name: 'food-image.jpg',
//       });
//       formData.append('loginId', loginId);
//       formData.append('adminId', order2.admin_id);
//       formData.append('userId', order2.user_id);
//       formData.append('subscriptionId', order2.subscription_id);
//       formData.append('adminName', `${order2.admin_first_name} ${order2.admin_last_name}`);
//       formData.append('userName', `${order2.user_first_name} ${order2.user_last_name}`);

//       const response = await fetch('http://192.168.86.29:6000/api/upload-food-image-clint', {
//           method: 'POST',
//           body: formData,
//       });

//       const data = await response.json();
      
   
      
//       if (response.ok) {
//           // Display success toast
//       Toast.show({
//         type: 'success',
//         text1: 'Success',
//         text2: 'Image uploaded successfully!',
//         visibilityTime: 3000,
//         position: 'bottom',
//         style: { backgroundColor: 'orange', borderRadius: 10 },
//         textStyle: { color: 'white' },
//       });

//       // Refresh page
//       // Trigger a re-render to simulate refresh
//       // Redirect after 1 second
//       setTimeout(() => {
//         navigation.navigate('Order2'); // Navigate to OrdersScreen2
//       }, 1000);
//           console.log('Uploaded Image URL:', data.imageUrl);
//       } else {
//           console.error('Failed to upload image:', data.error);
//       }
//   } catch (error) {
//       console.error('Error uploading image:', error);
//   }
// };






const uploadFoodImageofclint = async () => {
  try {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access camera is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (pickerResult.canceled) {
      return;
    }

    const user = await AsyncStorage.getItem('user');
    if (!user) {
      console.error('User not logged in');
      return;
    }

    const { id: loginId } = JSON.parse(user); // Extract the user ID
    console.log('Fetching data for ID:', loginId);

    const formData = new FormData();
    formData.append('food_image_clint', {
      uri: pickerResult.assets ? pickerResult.assets[0].uri : pickerResult.uri,
      type: 'image/jpeg',
      name: 'food-image.jpg',
    });
    formData.append('loginId', loginId);
    formData.append('adminId', order2.admin_id);
    formData.append('userId', order2.user_id);
    formData.append('subscriptionId', order2.subscription_id);
    formData.append('adminName', `${order2.admin_first_name} ${order2.admin_last_name}`);
    formData.append('userName', `${order2.user_first_name} ${order2.user_last_name}`);

    const response = await fetch('http://192.168.86.29:6000/api/upload-food-image-clint', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      // Display success toast
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Image uploaded successfully!',
        visibilityTime: 3000,
        position: 'bottom',
        style: { backgroundColor: 'orange', borderRadius: 10 },
        textStyle: { color: 'white' },
      });

      // Refresh page
      setTimeout(() => {
        navigation.navigate('LowerNavbar'); // Replace 'UserDash' with the correct route name
      }, 1000);
     
      console.log('Uploaded Image URL:', data.imageUrl);
    } else {
      console.error('Failed to upload image:', data.error);
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};






















  const LocationCard = useCallback(({ title, address, name, email, mobile, location, icon }) => (
    <Animated.View
      style={[
        styles.locationCard,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <LinearGradient
        colors={[COLORS.gradient.start, COLORS.gradient.end]}
        style={styles.cardHeader}
      >
        <Icon name={icon} size={24} color={COLORS.white} />
        <Text style={styles.cardHeaderText}>{title}</Text>
      </LinearGradient>

      <View style={styles.cardContent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.contactDetail}>
          <Icon name="envelope" size={14} /> {email}
        </Text>
        <Text style={styles.contactDetail}>
          <Icon name="phone" size={14} /> {mobile}
        </Text>
        <Text style={styles.address}>{address}</Text>

        {location && (
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                ...location,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              liteMode
            >
              <Marker coordinate={location} />
            </MapView>
          </View>
        )}

        <TouchableOpacity
          style={styles.mapButton}
          onPress={() => openInGoogleMaps(location.latitude, location.longitude)}
        >
          <Icon name="map-marker-alt" size={16} color={COLORS.white} />
          <Text style={styles.mapButtonText}>Open in Maps</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  ), [fadeAnim, scaleAnim, openInGoogleMaps]);

  if (!order2) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.accent} />
      </View>
    );
  }

  return (
    <Animated.ScrollView
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Order Details</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📦 Order Information</Text>
        <View style={styles.cardContent}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Client</Text>
            <Text style={styles.value}>
              {order2.user_first_name} {order2.user_last_name}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Amount</Text>
            <Text style={styles.valueAmount}>₹ {order2.amount}</Text>
          </View>
        </View>
      </View>

      <LocationCard
        title="Pickup Location"
        address={`${order2.admin_house}, ${order2.admin_area}, ${order2.admin_landmark}, ${order2.admin_city}`}
        name={`${order2.admin_first_name} ${order2.admin_last_name}`}
        email={order2.admin_email}
        mobile={order2.admin_mobile}
        location={adminLocation}
        icon="store"
      />
<>
      
      <TouchableOpacity
        style={[
          styles.mapButton,
          isButtonDisabled ? styles.disabledButton : null,
        ]}
        onPress={isButtonDisabled ? null : uploadFoodImage} // Prevent click if disabled
        disabled={isButtonDisabled} // Disable button interaction
      >
        <Text style={styles.mapButtonText}>
          {isButtonDisabled ? 'Image Uploaded' : 'Upload Food Pickup Image'}
        </Text>
        <Toast />
      </TouchableOpacity>
    </>

      <LocationCard
        title="Delivery Location"
        address={`${order2.user_house}, ${order2.user_area}, ${order2.user_landmark}, ${order2.user_city}`}
        name={`${order2.user_first_name} ${order2.user_last_name}`}
        email={order2.user_email}
        mobile={order2.user_mobile}
        location={userLocation}
        icon="map-marker-alt"
      />

      <TouchableOpacity
        style={[styles.pickOrderButton, isPickingOrder && styles.pickOrderButtonDisabled]}
        onPress={uploadFoodImageofclint}
        disabled={isPickingOrder}
      >
        <LinearGradient
          colors={[COLORS.accent, '#FF8533']}
          style={styles.pickOrderGradient}
        >
          {isPickingOrder ? (
            <ActivityIndicator color={COLORS.white} />
          ) : (
            <>
              <Icon name="check" size={20} color={COLORS.white} />
              <Text style={styles.pickOrderText}>Order Delivered</Text>
            </>
          )}
        </LinearGradient>
      </TouchableOpacity>
      <Toast />
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: COLORS.blue,
    borderRadius: 8,
    margin: 10,
  },
  disabledButton: {
    backgroundColor: "red",
  },
  mapButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    elevation: 4,
    shadowColor: "#FF6B00",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF6B00",
    marginBottom: 16,
  },
  cardContent: {
    gap: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#FFE0CC",
  },
  label: {
    fontSize: 16,
    color: "#666666",
  },
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
  header: {
    padding: 20,
    backgroundColor: COLORS.white,
    marginBottom: 10,
    borderRadius: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  orderAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.accent,
    marginTop: 5,
  },
  locationCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  cardHeaderText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  value: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "600",
  },
  valueAmount: {
    fontSize: 20,
    color: "#FF6B00",
    fontWeight: "bold",
  },
 
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: 10,
  },
  contactDetail: {
    fontSize: 14,
    color: COLORS.text.secondary,
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: COLORS.text.secondary,
    lineHeight: 20,
    marginVertical: 10,
  },
  mapContainer: {
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  map: {
    flex: 1,
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.accent,
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
  mapButtonText: {
    color: COLORS.white,
    marginLeft: 8,
    fontWeight: '600',
  },
  pickOrderButton: {
    margin: 10,
    marginBottom: 30,
    borderRadius: 15,
    overflow: 'hidden',
  },
  pickOrderButtonDisabled: {
    opacity: 0.7,
  },
  pickOrderGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  pickOrderText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
});

export default OrderDetailsScreen2;