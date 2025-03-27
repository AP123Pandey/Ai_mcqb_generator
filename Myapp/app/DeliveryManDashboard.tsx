// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';

// // const DeliveryManDashboard = () => {
// //   const [orders, setOrders] = useState([
// //     { id: '1', customerName: 'John Doe', address: '123 Street, City', status: 'Pending' },
// //     { id: '2', customerName: 'Jane Smith', address: '456 Avenue, City', status: 'Pending' },
// //   ]);

// //   const handleUpdateStatus = (id, newStatus) => {
// //     const updatedOrders = orders.map((order) =>
// //       order.id === id ? { ...order, status: newStatus } : order
// //     );
// //     setOrders(updatedOrders);
// //     Alert.alert('Success', `Order marked as ${newStatus}`);
// //   };

// //   const renderOrderItem = ({ item }) => (
// //     <View style={styles.orderCard}>
// //       <Text style={styles.customerName}>{item.customerName}</Text>
// //       <Text style={styles.address}>{item.address}</Text>
// //       <Text style={styles.status}>Status: {item.status}</Text>
// //       <View style={styles.buttonRow}>
// //         {item.status === 'Pending' && (
// //           <TouchableOpacity
// //             style={styles.pickupButton}
// //             onPress={() => handleUpdateStatus(item.id, 'Picked Up')}
// //           >
// //             <Text style={styles.buttonText}>Picked Up</Text>
// //           </TouchableOpacity>
// //         )}
// //         {item.status === 'Picked Up' && (
// //           <TouchableOpacity
// //             style={styles.deliveredButton}
// //             onPress={() => handleUpdateStatus(item.id, 'Delivered')}
// //           >
// //             <Text style={styles.buttonText}>Delivered</Text>
// //           </TouchableOpacity>
// //         )}
// //       </View>
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.heading}>Delivery Dashboard</Text>
// //       <FlatList
// //         data={orders}
// //         keyExtractor={(item) => item.id}
// //         renderItem={renderOrderItem}
// //         contentContainerStyle={styles.orderList}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //     padding: 20,
// //   },
// //   heading: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //     color: '#333',
// //     textAlign: 'center',
// //   },
// //   orderList: {
// //     paddingBottom: 20,
// //   },
// //   orderCard: {
// //     backgroundColor: '#fff',
// //     borderRadius: 10,
// //     padding: 15,
// //     marginBottom: 15,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowOffset: { width: 0, height: 3 },
// //     shadowRadius: 5,
// //   },
// //   customerName: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#333',
// //   },
// //   address: {
// //     fontSize: 14,
// //     color: '#555',
// //     marginVertical: 5,
// //   },
// //   status: {
// //     fontSize: 14,
// //     color: '#777',
// //     marginBottom: 10,
// //   },
// //   buttonRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   pickupButton: {
// //     backgroundColor: '#ffcc00',
// //     borderRadius: 5,
// //     padding: 10,
// //     alignItems: 'center',
// //     flex: 1,
// //     marginRight: 5,
// //   },
// //   deliveredButton: {
// //     backgroundColor: '#4caf50',
// //     borderRadius: 5,
// //     padding: 10,
// //     alignItems: 'center',
// //     flex: 1,
// //     marginLeft: 5,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //     fontSize: 14,
// //   },
// // });

// // export default DeliveryManDashboard;









// // import React, { useState, useEffect } from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
// // import { useRouter } from 'expo-router'; // Import useRouter for navigation
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const DeliveryManDashboard = () => {
// //   const [user, setUser] = useState(null);
// //   const [orders, setOrders] = useState([
// //     { id: '1', customerName: 'John Doe', address: '123 Street, City', status: 'Pending' },
// //     { id: '2', customerName: 'Jane Smith', address: '456 Avenue, City', status: 'Pending' },
// //   ]);
  
// //   const router = useRouter(); // Initialize the router

// //   useEffect(() => {
// //     // Check if user is logged in by reading from AsyncStorage
// //     const checkUser = async () => {
// //       const storedUser = await AsyncStorage.getItem('user');
// //       if (!storedUser) {
// //         // If no user is found, redirect to login page
// //         router.push('/Login');
// //       } else {
// //         setUser(JSON.parse(storedUser));
// //       }
// //     };

// //     checkUser();
// //   }, []); // Empty dependency array to run only once on mount

// //   const handleLogout = async () => {
// //     await AsyncStorage.removeItem('user'); // Clear session data
// //     router.push('/Login'); // Redirect to login page
// //   };

// //   const handleUpdateStatus = (id, newStatus) => {
// //     const updatedOrders = orders.map((order) =>
// //       order.id === id ? { ...order, status: newStatus } : order
// //     );
// //     setOrders(updatedOrders);
// //     Alert.alert('Success', `Order marked as ${newStatus}`);
// //   };

// //   const renderOrderItem = ({ item }) => (
// //     <View style={styles.orderCard}>
// //       <Text style={styles.customerName}>{item.customerName}</Text>
// //       <Text style={styles.address}>{item.address}</Text>
// //       <Text style={styles.status}>Status: {item.status}</Text>
// //       <View style={styles.buttonRow}>
// //         {item.status === 'Pending' && (
// //           <TouchableOpacity
// //             style={styles.pickupButton}
// //             onPress={() => handleUpdateStatus(item.id, 'Picked Up')}
// //           >
// //             <Text style={styles.buttonText}>Picked Up</Text>
// //           </TouchableOpacity>
// //         )}
// //         {item.status === 'Picked Up' && (
// //           <TouchableOpacity
// //             style={styles.deliveredButton}
// //             onPress={() => handleUpdateStatus(item.id, 'Delivered')}
// //           >
// //             <Text style={styles.buttonText}>Delivered</Text>
// //           </TouchableOpacity>
// //         )}
// //       </View>
// //     </View>
// //   );

// //   if (!user) {
// //     return null; // or a loading spinner
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.heading}>Delivery Dashboard</Text>
// //       <Text style={styles.userInfo}>Hello, {user.first_name}</Text>
// //       <FlatList
// //         data={orders}
// //         keyExtractor={(item) => item.id}
// //         renderItem={renderOrderItem}
// //         contentContainerStyle={styles.orderList}
// //       />
// //       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
// //         <Text style={styles.buttonText}>Logout</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   // Same styles as before
// // });

// // export default DeliveryManDashboard;





// // edit at 17-01-25  at 14:50



// // import React, { useState, useEffect } from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
// // import { useRouter } from 'expo-router';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const DeliveryManDashboard = () => {
// //   const [user, setUser] = useState(null);
// //   const [orders, setOrders] = useState([
// //     { id: '1', amount: '2,500 RWF', from: 'Kicukiro', to: 'Kimironko', status: 'Pending' },
// //     { id: '2', amount: '2,500 RWF', from: 'Kicukiro', to: 'Kimironko', status: 'Completed' },
// //   ]);

// //   const router = useRouter();

// //   useEffect(() => {
// //     const checkUser = async () => {
// //       const storedUser = await AsyncStorage.getItem('user');
// //       if (!storedUser) {
// //         router.push('/Login');
// //       } else {
// //         setUser(JSON.parse(storedUser));
// //       }
// //     };

// //     checkUser();
// //   }, []);

// //   const handleUpdateStatus = (id, newStatus) => {
// //     const updatedOrders = orders.map((order) =>
// //       order.id === id ? { ...order, status: newStatus } : order
// //     );
// //     setOrders(updatedOrders);
// //     Alert.alert('Success', `Order marked as ${newStatus}`);
// //   };

// //   const renderOrderItem = ({ item }) => (
    
// //     <View style={styles.orderCard}>
// //       <Text style={styles.amount}>{item.amount}</Text>
// //       <Text style={styles.location}>{item.from} - {item.to}</Text>
// //       <View style={styles.buttonRow}>
// //         {item.status === 'Pending' && (
// //           <TouchableOpacity
// //             style={styles.pickButton}
// //             onPress={() => handleUpdateStatus(item.id, 'Picked Up')}
// //           >
// //             <Text style={styles.buttonText}>Pick order</Text>
// //           </TouchableOpacity>
// //         )}
// //         {item.status === 'Picked Up' && (
// //           <TouchableOpacity
// //             style={styles.deliveredButton}
// //             onPress={() => handleUpdateStatus(item.id, 'Delivered')}
// //           >
// //             <Text style={styles.buttonText}>Delivered</Text>
// //           </TouchableOpacity>
          
// //         )}
// //       </View>
// //     </View>
// //   );

// //   if (!user) {
// //     return null;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profilePic} />
// //         <Text style={styles.greeting}>Hi, {user.first_name}</Text>
// //       </View>
// //       <Text style={styles.sectionTitle}>Recent Orders</Text>
// //       <FlatList
// //         data={orders.filter(order => order.status === 'Completed')}
// //         keyExtractor={(item) => item.id}
// //         renderItem={renderOrderItem}
// //         horizontal
// //         contentContainerStyle={styles.orderList}
// //       />
// //       <Text style={styles.sectionTitle}>Available Orders</Text>
// //       <FlatList
// //         data={orders.filter(order => order.status === 'Pending')}
// //         keyExtractor={(item) => item.id}
// //         renderItem={renderOrderItem}
// //         numColumns={2}
// //         contentContainerStyle={styles.orderGrid}
// //       />
// //     </View>
    
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F4F6F8',
// //     padding: 20,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   profilePic: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //   },
// //   greeting: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginLeft: 10,
// //   },
// //   sectionTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginVertical: 10,
// //   },
// //   orderCard: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 10,
// //     padding: 15,
// //     margin: 10,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowRadius: 5,
// //   },
// //   amount: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   location: {
// //     fontSize: 14,
// //     color: '#888',
// //     marginVertical: 5,
// //   },
// //   buttonRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   pickButton: {
// //     backgroundColor: '#FFA500',
// //     padding: 10,
// //     borderRadius: 5,
// //   },
// //   deliveredButton: {
// //     backgroundColor: '#4CAF50',
// //     padding: 10,
// //     borderRadius: 5,
// //   },
// //   buttonText: {
// //     color: '#FFFFFF',
// //     fontWeight: 'bold',
// //   },
// //   orderList: {
// //     marginBottom: 20,
// //   },
// //   orderGrid: {
// //     marginBottom: 20,
// //     justifyContent: 'space-between',
// //   },
// // });

// // export default DeliveryManDashboard;

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
// import { useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import App from './Fordash';
// const baseURL = 'http://192.168.86.29:6000'; 


// const DeliveryManDashboard = () => {
//   const [user, setUser] = useState(null);
  

//   const router = useRouter();

//   useEffect(() => {
//     const checkUser = async () => {
//       const storedUser = await AsyncStorage.getItem('user');
//       if (!storedUser) {
//         router.push('/Login');
//       } else {
//         setUser(JSON.parse(storedUser));
//       }
//     };

//     checkUser();
//   }, []);

//   const handleUpdateStatus = (id, newStatus) => {
//     const updatedOrders = orders.map((order) =>
//       order.id === id ? { ...order, status: newStatus } : order
//     );
//     setOrders(updatedOrders);
//     Alert.alert('Success', `Order marked as ${newStatus}`);
//   };

 

//   if (!user) {
//     return null;
//   }

//   return (
//     <>
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image source={{ uri: `${baseURL}${user.profile_picture_url}` }} style={styles.profilePic} />
//         <TouchableOpacity onPress={() => router.push('/userdash')}>
//           <Text style={styles.greeting}>Hi, {user.first_name}</Text>
//         </TouchableOpacity>
       
//       </View>
      
//       <App></App>

//     </View>
//     <View>
    
//     </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F4F6F8',
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   profilePic: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   greeting: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   orderCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 15,
//     margin: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   amount: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   location: {
//     fontSize: 14,
//     color: '#888',
//     marginVertical: 5,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   pickButton: {
//     backgroundColor: '#FFA500',
//     padding: 10,
//     borderRadius: 5,
//   },
//   deliveredButton: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
//   orderList: {
//     marginBottom: 20,
//   },
//   orderGrid: {
//     marginBottom: 20,
//     justifyContent: 'space-between',
//   },
// });
// export default DeliveryManDashboard;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import App from './Fordash';
import StudentScreen from './StudentScreen';

const COLORS = {
  primary: '#6C63FF',
  secondary: '#FF63A5',
  background: '#F8F9FF',
  text: {
    primary: '#2D3436',
    secondary: '#636E72',
  },
  white: '#FFFFFF',
  gradient: {
    start: '#8E2DE2',
    end: '#4A00E0',
  }
};

const baseURL = 'http://192.168.86.29:6000';

const DeliveryManDashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (!storedUser) {
        router.push('/Login');
      } else {
        setUser(JSON.parse(storedUser));
      }
    };

    checkUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[COLORS.gradient.start, COLORS.gradient.end]}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity 
            onPress={() => router.push('/userdash')}
            style={styles.profileSection}
          >
            <Image 
              source={{ uri: `${baseURL}${user.profile_picture_url}` }} 
              style={styles.profilePic} 
            />
            <View>
              <Text style={styles.greeting}>Hi, {user.first_name}</Text>
              <Text style={styles.subGreeting}>Welocome to All in One</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationIcon}>
            <Icon name="bell" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.contentContainer}>
        
        
        <StudentScreen />
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingTop: 70,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  subGreeting: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.8,
  },
  notificationIcon: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 25,
  },
  contentContainer: {
    flex: 1,
    
  },
});

export default DeliveryManDashboard;