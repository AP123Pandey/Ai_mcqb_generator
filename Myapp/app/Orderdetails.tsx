// // import React from "react";
// // import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// // const OrderDetailsScreen = () => {
// //   const orderId = "7D8DG8FG9HS98A";
// //   const orderDate = "02 Dec 2024, 15:01 PM";
// //   const amount = "2,500 RWF";
// //   const orderStatus = "Pending";
// //   const paymentStatus = "Paid";
// //   const pickupLocation = "Kicukiro, Simba Supermarket";
// //   const dropoffLocation = "Kimironko";
// //   const estimatedTimePickup = "3 MIN";
// //   const estimatedDistancePickup = "2.7 KM";
// //   const estimatedTimeDropoff = "5 MIN";
// //   const estimatedDistanceDropoff = "6.7 KM";

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Order Details</Text>

// //       {/* Order ID Section */}
// //       <View style={styles.card}>
// //         <View style={styles.row}>
// //           <Text style={styles.label}>Order ID</Text>
// //           <TouchableOpacity>
// //             <Text style={styles.value}>{orderId}</Text>
// //           </TouchableOpacity>
// //         </View>
// //         <Text style={styles.date}>{orderDate}</Text>
// //         <View style={styles.row}>
// //           <Text style={styles.amount}>💵 {amount}</Text>
// //           <Text
// //             style={[
// //               styles.status,
// //               orderStatus === "Pending" ? styles.pending : styles.completed,
// //             ]}
// //           >
// //             {orderStatus}
// //           </Text>
// //         </View>
// //         <View style={styles.row}>
// //           <Text
// //             style={[
// //               styles.status,
// //               paymentStatus === "Paid" ? styles.completed : styles.pending,
// //             ]}
// //           >
// //             ✔ {paymentStatus}
// //           </Text>
// //         </View>
// //       </View>

// //       {/* Pickup Location Section */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>Shop/Store Details</Text>
// //         <View style={styles.errorBox}>
// //           <Text style={styles.errorText}>❗ Sorry! Something went wrong.</Text>
// //           <Text style={styles.errorDetail}>
// //             This page didn't load Google Maps correctly. See the console for
// //             technical details.
// //           </Text>
// //         </View>
// //         <Text style={styles.locationLabel}>📍 Your Location</Text>
// //         <Text style={styles.location}>{pickupLocation}</Text>
// //       </View>

// //       {/* Client Location Section */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>Client Location Details</Text>
// //         <View style={styles.errorBox}>
// //           <Text style={styles.errorText}>❗ Sorry! Something went wrong.</Text>
// //           <Text style={styles.errorDetail}>
// //             This page didn't load Google Maps correctly. See the console for
// //             technical details.
// //           </Text>
// //         </View>
// //         <Text style={styles.location}>{pickupLocation}</Text>
// //         <Text style={styles.location}>{dropoffLocation}</Text>

// //         <View style={styles.estimateRow}>
// //           <View style={styles.estimateBox}>
// //             <Text style={styles.estimateLabel}>Estimated time</Text>
// //             <Text style={styles.estimateValue}>{estimatedTimeDropoff}</Text>
// //           </View>
// //           <View style={styles.estimateBox}>
// //             <Text style={styles.estimateLabel}>Estimated distance</Text>
// //             <Text style={styles.estimateValue}>{estimatedDistanceDropoff}</Text>
// //           </View>
// //         </View>
// //       </View>

// //       {/* Pick Order Button */}
// //       <TouchableOpacity style={styles.button}>
// //         <Text style={styles.buttonText}>Pick Order</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //     backgroundColor: "#F3F4F6",
// //   },
// //   header: {
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     marginBottom: 16,
// //   },
// //   card: {
// //     backgroundColor: "#FFF",
// //     padding: 16,
// //     borderRadius: 8,
// //     marginBottom: 16,
// //   },
// //   row: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     marginBottom: 8,
// //   },
// //   label: {
// //     fontSize: 14,
// //     color: "#555",
// //   },
// //   value: {
// //     fontSize: 14,
// //     color: "#007BFF",
// //   },
// //   date: {
// //     fontSize: 12,
// //     color: "#888",
// //     marginBottom: 8,
// //   },
// //   amount: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     color: "#000",
// //   },
// //   status: {
// //     fontSize: 14,
// //     paddingVertical: 2,
// //     paddingHorizontal: 8,
// //     borderRadius: 4,
// //   },
// //   pending: {
// //     color: "#FF6600",
// //     backgroundColor: "#FFE5D5",
// //   },
// //   completed: {
// //     color: "#2E7D32",
// //     backgroundColor: "#D7F8E4",
// //   },
// //   section: {
// //     backgroundColor: "#FFF",
// //     padding: 16,
// //     borderRadius: 8,
// //     marginBottom: 16,
// //   },
// //   sectionTitle: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     marginBottom: 8,
// //     color: "#FF6600",
// //   },
// //   errorBox: {
// //     backgroundColor: "#F8D7DA",
// //     padding: 16,
// //     borderRadius: 8,
// //     marginBottom: 8,
// //   },
// //   errorText: {
// //     fontSize: 14,
// //     fontWeight: "bold",
// //     color: "#D32F2F",
// //   },
// //   errorDetail: {
// //     fontSize: 12,
// //     color: "#D32F2F",
// //   },
// //   locationLabel: {
// //     fontSize: 14,
// //     fontWeight: "bold",
// //     marginBottom: 4,
// //   },
// //   location: {
// //     fontSize: 14,
// //     color: "#555",
// //     marginBottom: 8,
// //   },
// //   estimateRow: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     marginTop: 8,
// //   },
// //   estimateBox: {
// //     flex: 1,
// //     alignItems: "center",
// //   },
// //   estimateLabel: {
// //     fontSize: 12,
// //     color: "#555",
// //   },
// //   estimateValue: {
// //     fontSize: 14,
// //     fontWeight: "bold",
// //   },
// //   button: {
// //     backgroundColor: "#FF6600",
// //     padding: 16,
// //     borderRadius: 8,
// //     alignItems: "center",
// //   },
// //   buttonText: {
// //     fontSize: 16,
// //     color: "#FFF",
// //     fontWeight: "bold",
// //   },
// // });

// // export default OrderDetailsScreen;


























// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { useRoute } from '@react-navigation/native'; 

// const OrderDetailsScreen = () => {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const route = useRoute();
//   const { order } = route.params; 

//   useEffect(() => {
//     // Fetch order info from the backend
//     fetch("http://192.168.38.29:5000/Orders")
//       .then((response) => response.json())
//       .then((data) => setOrderDetails(data[0])) // Assuming there's only one order for simplicity
//       .catch((error) => console.error("Error fetching order details:", error));
//   }, []);

//   if (!orderDetails) {
//     return (
//       <View style={styles.container}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   const {
//     subscription_id,
//     amount,
//     admin_first_name,
//     admin_last_name,
//     admin_email,
//     admin_mobile,
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
//     user_first_name,
//     user_last_name,
//     user_email,
//     user_mobile,
//     user_area,
//     user_landmark,
//   } = order;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Order Details</Text>

//       {/* Order ID Section */}
//       <View style={styles.card}>
//         <Text style={styles.label}>Clint Name</Text>
//         <Text style={styles.value}> {user_first_name} {user_last_name}</Text>
//         <Text style={styles.label}>Amount</Text>
//         <Text style={styles.value}>💵 {amount}</Text>
//       </View>

      // {/* Admin Details Section */}
      // <View style={styles.section}>
      //   <Text style={styles.sectionTitle}>Admin Details</Text>
      //   <Text>Name: {admin_first_name} {admin_last_name}</Text>
      //   <Text>Email: {admin_email}</Text>
      //   <Text>Mobile: {admin_mobile}</Text>
      //   <Text>Location: {admin_house} ,{admin_area}, {admin_landmark},{admin_city},{admin_state}, {admin_pincode}</Text>
      // </View>

//       {/* User Details Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>User Details</Text>
//         <Text>Email: {user_email}</Text>
//         <Text>Mobile: {user_mobile}</Text>
//         <Text>Location: {user_house} , {user_area}, {user_landmark},{user_city},{user_state},{user_pincode}</Text>
//       </View>

      // {/* Pick Order Button */}
      // <TouchableOpacity style={styles.button}>
      //   <Text style={styles.buttonText}>Pick Order</Text>
      // </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#F3F4F6",
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: "#FFF",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 14,
//     color: "#555",
//   },
//   value: {
//     fontSize: 16,
//     color: "#007BFF",
//     fontWeight: "bold",
//   },
//   section: {
//     backgroundColor: "#FFF",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 8,
//     color: "#FF6600",
//   },
//   button: {
//     backgroundColor: "#FF6600",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     fontSize: 16,
//     color: "#FFF",
//     fontWeight: "bold",
//   },
// });

// export default OrderDetailsScreen;




// // change at 21-01-5

// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Button, Linking } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import opencage from "opencage-api-client";
// import { useRoute } from "@react-navigation/native";

// const OrderDetailsScreen = () => {
//   const [userLocation, setUserLocation] = useState(null);
//   const [adminLocation, setAdminLocation] = useState(null);
//   const route = useRoute();
//   const { order } = route.params;

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
//   } = order;

//   const getCoordinates = async (address) => {
//     try {
//       const response = await opencage.geocode({
//         q: address,
//         key: "60396870226f4ec1a575583b4fc610bf", // Your OpenCage API Key
//       });
//       if (response.results.length > 0) {
//         const { lat, lng } = response.results[0].geometry;
//         return { latitude: lat, longitude: lng };
//       } else {
//         console.error(`No results found for address: ${address}`);
//         return null;
//       }
//     } catch (error) {
//       console.error("Error fetching coordinates:", error);
//       return null;
//     }
//   };

//   useEffect(() => {
//     const fetchLocations = async () => {
//       const userAddress = `${user_house}, ${user_area}, ${user_landmark}, ${user_city}, ${user_state}, ${user_pincode}`;
//       const adminAddress = `${admin_house}, ${admin_area}, ${admin_landmark}, ${admin_city}, ${admin_state}, ${admin_pincode}`;

//       const userCoords = await getCoordinates(userAddress);
//       const adminCoords = await getCoordinates(adminAddress);

//       setUserLocation(userCoords);
//       setAdminLocation(adminCoords);
//     };

//     fetchLocations();
//   }, []);

//   if (!userLocation || !adminLocation) {
//     return (
//       <View style={styles.container}>
//         <Text>Loading map and location details...</Text>
//       </View>
//     );
//   }

//   const openInGoogleMaps = (latitude, longitude) => {
//     const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
//     Linking.openURL(url).catch((err) =>
//       console.error("Error opening Google Maps", err)
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Order Details</Text>
//       <View style={styles.card}>
//         <Text style={styles.label}>Client Name</Text>
//         <Text style={styles.value}>
//           {user_first_name} {user_last_name}
//         </Text>
//         <Text style={styles.label}>Amount</Text>
//         <Text style={styles.value}>💵 {amount}</Text>
//       </View>

//       <View style={styles.mapContainer}>
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: adminLocation.latitude,
//             longitude: adminLocation.longitude,
//             latitudeDelta: 0.1,
//             longitudeDelta: 0.1,
//           }}
//         >
//           <Marker
//             coordinate={userLocation}
//             title="User Location"
//             description="User's Address"
//           />
//           <Marker
//             coordinate={adminLocation}
//             title="Admin Location"
//             description="Admin's Address"
//           />
//         </MapView>
//       </View>
      

//       <Button
//           title="Open Admin Location in Google Maps"
//           onPress={() =>
//             openInGoogleMaps(adminLocation.latitude, adminLocation.longitude)
//           }
//         />
//       <View style={styles.buttons}>
        
//       </View>
//             {/* Admin Details Section */}
//             <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Admin Details</Text>
//         <Text>Name: {admin_first_name} {admin_last_name}</Text>
//         <Text>Email: {admin_email}</Text>
//         <Text>Mobile: {admin_mobile}</Text>
//         <Text>Location: {admin_house} ,{admin_area}, {admin_landmark},{admin_city},{admin_state}, {admin_pincode}</Text>
//       </View>



//       <View style={styles.mapContainer}>
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: userLocation.latitude,
//             longitude: userLocation.longitude,
//             latitudeDelta: 0.1,
//             longitudeDelta: 0.1,
//           }}
//         >
//           <Marker
//             coordinate={userLocation}
//             title="User Location"
//             description="User's Address"
//           />
//           <Marker
//             coordinate={adminLocation}
//             title="Admin Location"
//             description="Admin's Address"
//           />
//         </MapView>
//       </View>
//              <View style={styles.section}>
//              <Button
//           title="Open User Location in Google Maps"
//           onPress={() =>
//             openInGoogleMaps(userLocation.latitude, userLocation.longitude)
//           }
//         />
//         <Text style={styles.sectionTitle}>User Details</Text>
//         <Text>Email: {user_email}</Text>        <Text>Mobile: {user_mobile}</Text>
//         <Text>Location: {user_house} , {user_area}, {user_landmark},{user_city},{user_state},{user_pincode}</Text>
//       </View>


//             {/* Pick Order Button */}
//             <Button
//         title="Pick Order"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#F3F4F6",
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: "#FFF",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 14,
//     color: "#555",
//   },
//   value: {
//     fontSize: 16,
//     color: "#007BFF",
//     fontWeight: "bold",
//   },
//   mapContainer: {
//     flex: 1,
//     marginVertical: 16,
//   },
//   map: {
//     flex: 1,
//   },
//   buttons: {
//     marginVertical: 16,
//   },
//   section: {
//         backgroundColor: "#FFF",
//         padding: 16,
//         borderRadius: 8,
//         marginBottom: 16,
//       },
//       sectionTitle: {
//         fontSize: 16,
//         fontWeight: "bold",
//         marginBottom: 8,
//         color: "#FF6600",
//       },

//       button: {
//             backgroundColor: "#FF6600",
//             padding: 16,
//             borderRadius: 8,
//             alignItems: "center",
//           },
//           buttonText: {
//             fontSize: 16,
//             color: "#FFF",
//             fontWeight: "bold",
//           },
// });

// export default OrderDetailsScreen;


































































// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Button, Linking, ActivityIndicator } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import opencage from "opencage-api-client";
// import { useRoute } from "@react-navigation/native";

// const DEFAULT_COORDS = { latitude: 19.076, longitude: 72.8777 }; // Default to Mumbai, India

// const OrderDetailsScreen = () => {
//   const [userLocation, setUserLocation] = useState(null);
//   const [adminLocation, setAdminLocation] = useState(null);
//   const [loadingMap, setLoadingMap] = useState(true);
//   const route = useRoute();
//   const { order } = route.params;

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
//   } = order;

//   const getCoordinates = async (address) => {
//     try {
//       const response = await opencage.geocode({
//         q: address,
//         key: "60396870226f4ec1a575583b4fc610bf", // Your OpenCage API Key
//       });
//       if (response.results.length > 0) {
//         const { lat, lng } = response.results[0].geometry;
//         return { latitude: lat, longitude: lng };
//       } else {
//         console.warn(`No results found for address: ${address}`);
//         return DEFAULT_COORDS;
//       }
//     } catch (error) {
//       console.error("Error fetching coordinates:", error);
//       return DEFAULT_COORDS;
//     }
//   };

//   useEffect(() => {
//     const fetchLocations = async () => {
//       const userAddress = `${user_house}, ${user_area}, ${user_landmark}, ${user_city}, ${user_state}, ${user_pincode}`;
//       const adminAddress = `${admin_house}, ${admin_area}, ${admin_landmark}, ${admin_city}, ${admin_state}, ${admin_pincode}`;

//       const userCoords = await getCoordinates(userAddress);
//       const adminCoords = await getCoordinates(adminAddress);

//       setUserLocation(userCoords);
//       setAdminLocation(adminCoords);
//       setLoadingMap(false);
//     };

//     fetchLocations();
//   }, []);

//   const openInGoogleMaps = (latitude, longitude) => {
//     const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
//     Linking.openURL(url).catch((err) =>
//       console.error("Error opening Google Maps", err)
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Order Details</Text>
//       <View style={styles.card}>
//         <Text style={styles.label}>Client Name</Text>
//         <Text style={styles.value}>
//           {user_first_name} {user_last_name}
//         </Text>
//         <Text style={styles.label}>Amount</Text>
//         <Text style={styles.value}>💵 {amount}</Text>
//       </View>

//       <View style={styles.mapContainer}>
//         {loadingMap ? (
//           <ActivityIndicator size="large" color="#007BFF" />
//         ) : (
//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: adminLocation.latitude,
//               longitude: adminLocation.longitude,
//               latitudeDelta: 0.1,
//               longitudeDelta: 0.1,
//             }}
//           >
//             <Marker
//               coordinate={userLocation}
//               title="User Location"
//               description="User's Address"
//             />
//             <Marker
//               coordinate={adminLocation}
//               title="Admin Location"
//               description="Admin's Address"
//             />
//           </MapView>
//         )}
//       </View>

//       <Button
//         title="Open Admin Location in Google Maps"
//         onPress={() =>
//           openInGoogleMaps(adminLocation.latitude, adminLocation.longitude)
//         }
//       />
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Admin Details</Text>
//         <Text>Name: {admin_first_name} {admin_last_name}</Text>
//         <Text>Email: {admin_email}</Text>
//         <Text>Mobile: {admin_mobile}</Text>
//         <Text>Location: {admin_house}, {admin_area}, {admin_landmark}, {admin_city}, {admin_state}, {admin_pincode}</Text>
//       </View>



//       <View style={styles.mapContainer}>
//         {loadingMap ? (
//           <ActivityIndicator size="large" color="#007BFF" />
//         ) : (
//           <MapView
//             style={styles.map}
//             initialRegion={{
//               latitude: userLocation.latitude,
//               longitude: userLocation.longitude,
//               latitudeDelta: 0.1,
//               longitudeDelta: 0.1,
//             }}
//           >
//             <Marker
//               coordinate={userLocation}
//               title="User Location"
//               description="User's Address"
//             />
//             <Marker
//               coordinate={adminLocation}
//               title="Admin Location"
//               description="Admin's Address"
//             />
//           </MapView>
//         )}
//       </View>

//       <Button
//         title="Open User Location in Google Maps"
//         onPress={() =>
//           openInGoogleMaps(userLocation.latitude, userLocation.longitude)
//         }
//       />
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>User Details</Text>
//         <Text>Email: {user_email}</Text>
//         <Text>Mobile: {user_mobile}</Text>
//         <Text>Location: {user_house}, {user_area}, {user_landmark}, {user_city}, {user_state}, {user_pincode}</Text>
//       </View>

//       <Button title="Pick Order" onPress={() => console.log("Order picked")} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#F3F4F6",
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: "#FFF",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 14,
//     color: "#555",
//   },
//   value: {
//     fontSize: 16,
//     color: "#007BFF",
//     fontWeight: "bold",
//   },
//   mapContainer: {
//     flex: 1,
//     marginVertical: 16,
//   },
//   map: {
//     flex: 1,
//   },
//   section: {
//     backgroundColor: "#FFF",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 8,
//     color: "#FF6600",
//   },
// });

// export default OrderDetailsScreen;






















// 21-01-25


// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Linking, ActivityIndicator, Animated, TouchableOpacity, Dimensions } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import opencage from "opencage-api-client";
// import { useRoute } from "@react-navigation/native";
// import AsyncStorage from '@react-native-async-storage/async-storage';


// const DEFAULT_COORDS = { latitude: 19.076, longitude: 72.8777 };
// const TIMEOUT_DURATION = 1000; // 10 seconds timeout

// const OrderDetailsScreen = () => {
//   const [userLocation, setUserLocation] = useState(null);
//   const [adminLocation, setAdminLocation] = useState(null);
//   const [loadingMap, setLoadingMap] = useState(true);
//   const [mapError, setMapError] = useState(false);
//   const fadeAnim = new Animated.Value(0);
//   const slideAnim = new Animated.Value(-50);
//   const route = useRoute();
//   const { order } = route.params;


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
//   } = order;

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



  

//   const handlePickOrder = async () => {
//     try {
//         // Retrieve the logged-in user's ID from AsyncStorage
//         const user = await AsyncStorage.getItem('user');
//         if (!user) {
//             console.error('User not logged in');
//             return;
//         }
      
//         const { id: loggedInUserId } = JSON.parse(user); // Extract the user ID
//         console.log('Fetching data for ID:', loggedInUserId);

//         // Format the date to be compatible with MySQL format
//         const formattedDate = new Date(order.date).toISOString().slice(0, 19).replace('T', ' '); // Converts to YYYY-MM-DD HH:MM:SS

//         const response = await fetch('http://192.168.38.29:5000/api/orders/pick', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 order: {
//                     ...order, 
//                     date: formattedDate, // Use the formatted date
//                 },
//                 pickedBy: parseInt(loggedInUserId, 10),
//             }),
//         });

//         const data = await response.json();
//         if (response.ok) {
//             console.log('Order picked successfully:', data);
//         } else {
//             console.error('Failed to pick order:', data.error);
//         }
//     } catch (error) {
//         console.error('Error picking order:', error);
//     }
// };




  
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

//       <CustomButton
//         title="🚚 Pick Order"
//         onPress={() => handlePickOrder(order)}
        
//         style={styles.pickOrderButton}
//       />
//     </Animated.ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#FFF5EB",
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
//     height: 200,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: '#FFE0CC',
//   },
//   mapErrorContainer: {
//     height: 200,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: '#FFE0CC',
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
//     backgroundColor: '#FF6B00',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
//   retryButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '600',
//   },
// });

// export default OrderDetailsScreen;































import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, StyleSheet, Linking, ActivityIndicator, Animated, TouchableOpacity, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import opencage from "opencage-api-client";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

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
  accent: '#FF6B00'
};

const DEFAULT_COORDS = { latitude: 19.076, longitude: 72.8777 };
const TIMEOUT_DURATION = 1000;

const OrderDetailsScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [adminLocation, setAdminLocation] = useState(null);
  const [loadingMap, setLoadingMap] = useState(true);
  const [mapError, setMapError] = useState(false);
  const [isPickingOrder, setIsPickingOrder] = useState(false);
  const [mounted, setMounted] = useState(true);
   const navigation = useNavigation(); 

  // Use refs for animations to prevent memory leaks
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  const route = useRoute();
  const { order } = route.params;

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

      const userAddress = `${order.user_house}, ${order.user_area}, ${order.user_landmark}, ${order.user_city}`;
      const adminAddress = `${order.admin_house}, ${order.admin_area}, ${order.admin_landmark}, ${order.admin_city}`;

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
  }, [mounted, getCoordinates, order]);

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
      // Reset animations
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

  const handlePickOrder = async () => {
    if (!mounted) return;
    setIsPickingOrder(true);

    try {
      const user = await AsyncStorage.getItem('user');
      if (!user) throw new Error('User not logged in');

      const { id: loggedInUserId } = JSON.parse(user);
      const formattedDate = new Date(order.date).toISOString().slice(0, 19).replace('T', ' ');

      const response = await fetch('http://192.168.86.29:6000/api/orders/pick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          order: { ...order, date: formattedDate },
          pickedBy: parseInt(loggedInUserId, 10),
        }),
      });



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
        navigation.navigate('Order2'); // Replace 'UserDash' with the correct route name
      }, 1000);

      if (!response.ok) throw new Error('Failed to pick order');
    } 
    } finally {
      if (mounted) {
        setIsPickingOrder(false);
      }
    }
  };

  if (!order) {
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
                    {order.user_first_name} {order.user_last_name}
                  </Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.label}>Amount</Text>
                  <Text style={styles.valueAmount}>₹ {order.amount}</Text>
                </View>
              </View>
            </View>

      <LocationCard
        title="Pickup Location"
        address={`${order.admin_house}, ${order.admin_area}, ${order.admin_landmark}, ${order.admin_city}`}
        name={`${order.admin_first_name} ${order.admin_last_name}`}
        email={order.admin_email}
        mobile={order.admin_mobile}
        location={adminLocation}
        icon="store"
      />

      <LocationCard
        title="Delivery Location"
        address={`${order.user_house}, ${order.user_area}, ${order.user_landmark}, ${order.user_city}`}
        name={`${order.user_first_name} ${order.user_last_name}`}
        email={order.user_email}
        mobile={order.user_mobile}
        location={userLocation}
        icon="map-marker-alt"
      />

      <TouchableOpacity
        style={[styles.pickOrderButton, isPickingOrder && styles.pickOrderButtonDisabled]}
        onPress={handlePickOrder}
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
              <Icon name="truck" size={20} color={COLORS.white} />
              <Text style={styles.pickOrderText}>Accept Delivery</Text>
            </>
          )}
        </LinearGradient>
      </TouchableOpacity> 
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default OrderDetailsScreen;