
// // // // import React, { useEffect, useState, useCallback } from 'react';
// // // // import { 
// // // //   View, 
// // // //   Text, 
// // // //   FlatList, 
// // // //   TouchableOpacity, 
// // // //   StyleSheet, 
// // // //   ActivityIndicator,
// // // //   Animated,
// // // //   RefreshControl,
// // // //   Platform,
// // // //   StatusBar
// // // // } from 'react-native';
// // // // import { MaterialIcons } from '@expo/vector-icons';
// // // // import { useNavigation } from '@react-navigation/native';
// // // // import AsyncStorage from '@react-native-async-storage/async-storage';


// // // // const OrderCard = React.memo(({ item, onPress }) => {
// // // //   const scaleAnim = React.useRef(new Animated.Value(0.95)).current;
// // // //   const opacityAnim = React.useRef(new Animated.Value(0)).current;

// // // //   React.useEffect(() => {
// // // //     Animated.parallel([
// // // //       Animated.spring(scaleAnim, {
// // // //         toValue: 1,
// // // //         tension: 20,
// // // //         friction: 7,
// // // //         useNativeDriver: true,
// // // //       }),
// // // //       Animated.timing(opacityAnim, {
// // // //         toValue: 1,
// // // //         duration: 300,
// // // //         useNativeDriver: true,
// // // //       }),
// // // //     ]).start();
// // // //   }, []);

// // // //   return (
// // // //     <Animated.View
// // // //       style={[
// // // //         styles.orderCard,
// // // //         {
// // // //           opacity: opacityAnim,
// // // //           transform: [{ scale: scaleAnim }],
// // // //         },
// // // //       ]}
// // // //     >
// // // //       <View style={styles.cardHeader}>
// // // //         <View style={styles.statusIndicator} />
// // // //         <Text style={styles.statusText}>New Order</Text>
// // // //       </View>

// // // //       <View style={styles.addressSection}>
// // // //         <View style={styles.addressBlock}>
// // // //           <View style={styles.iconContainer}>
// // // //             <MaterialIcons name="location-on" size={24} color="#10B981" />
// // // //           </View>
// // // //           <View style={styles.addressDetails}>
// // // //             <Text style={styles.addressLabel}>Pickup Location</Text>
// // // //             <Text style={styles.addressText}>
// // // //               {item.admin_area || 'N/A'} {item.admin_landmark || ''}
// // // //             </Text>
// // // //           </View>
// // // //         </View>

// // // //         <View style={styles.routeLine}>
// // // //           <View style={styles.routeDot} />
// // // //           <View style={styles.routeDash} />
// // // //           <View style={[styles.routeDot, styles.routeDotBottom]} />
// // // //         </View>

// // // //         <View style={styles.addressBlock}>
// // // //           <View style={styles.iconContainer}>
// // // //             <MaterialIcons name="flag" size={24} color="#EF4444" />
// // // //           </View>
// // // //           <View style={styles.addressDetails}>
// // // //             <Text style={styles.addressLabel}>Delivery Location</Text>
// // // //             <Text style={styles.addressText}>
// // // //               {item.user_area || 'N/A'} {item.user_landmark || ''}
// // // //             </Text>
// // // //           </View>
// // // //         </View>
// // // //       </View>

// // // //       <TouchableOpacity
// // // //         style={styles.acceptButton}
// // // //         onPress={onPress}
// // // //         activeOpacity={0.9}
// // // //       >
// // // //         <Text style={styles.acceptButtonText}>see Order</Text>
// // // //         <MaterialIcons name="arrow-forward" size={20} color="#FFF" />
// // // //       </TouchableOpacity>
// // // //     </Animated.View>
// // // //   );
// // // // });

// // // // const OrdersScreen2 = () => {
// // // //   const [orders, setOrders] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [refreshing, setRefreshing] = useState(false);

// // // //   const navigation = useNavigation();

// // // //   const renderOrder = useCallback(({ item }) => (
// // // //     <OrderCard
// // // //       item={item}
// // // //       onPress={() => {
// // // //         navigation.navigate('orderdatails2', { order2: item }); // Pass the order details
// // // //       }}
// // // //     />
// // // //   ), []);

// // // //   const fetchOrders = async () => {
// // // //     try {
// // // //       const user = await AsyncStorage.getItem('user');
// // // //       if (!user) {
// // // //         console.error('User not logged in');
// // // //         return;
// // // //       }
// // // //       const { id: loggedInUserId } = JSON.parse(user); // Extract the user ID
// // // //       console.log('Fetching data for ID:', loggedInUserId);
  
// // // //       const response = await fetch(`http://192.168.86.29:6000/orders2?loggedInUserId=${loggedInUserId}`);
// // // //       const data = await response.json();
  
// // // //       console.log('Order details:', data);
// // // //       setOrders(data);
// // // //     } catch (error) {
// // // //       console.error('Error fetching orders:', error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //       setRefreshing(false);
// // // //     }
// // // //   };
  
  

// // // //   useEffect(() => {
// // // //     fetchOrders();
// // // //   }, []);

// // // //   const onRefresh = useCallback(() => {
// // // //     setRefreshing(true);
// // // //     fetchOrders();
// // // //   }, []);

 

// // // //   if (loading) {
// // // //     return (
// // // //       <View style={styles.loadingContainer}>
// // // //         <ActivityIndicator size="large" color="#10B981" />
// // // //         <Text style={styles.loadingText}>Loading available orders...</Text>
// // // //       </View>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      
// // // //       <View style={styles.header}>
// // // //         <Text style={styles.title}>Available Orders</Text>
// // // //         <Text style={styles.subtitle}>
// // // //           {orders.length} {orders.length === 1 ? 'order' : 'orders'} available
// // // //         </Text>
// // // //       </View>

// // // //       <FlatList
// // // //         data={orders}
// // // //         keyExtractor={(item) => item.subscription_id.toString()}
// // // //         renderItem={renderOrder}
// // // //         contentContainerStyle={styles.listContainer}
// // // //         showsVerticalScrollIndicator={false}
// // // //         refreshControl={
// // // //           <RefreshControl
// // // //             refreshing={refreshing}
// // // //             onRefresh={onRefresh}
// // // //             tintColor="#10B981"
// // // //             colors={['#10B981']}
// // // //           />
// // // //         }
// // // //       />
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#F9FAFB',
// // // //   },
// // // //   header: {
// // // //     padding: 20,
// // // //     paddingTop: Platform.OS === 'ios' ? 60 : 20,
// // // //     backgroundColor: '#F9FAFB',
// // // //   },
// // // //   title: {
// // // //     fontSize: 28,
// // // //     fontWeight: 'bold',
// // // //     color: '#111827',
// // // //     marginBottom: 8,
// // // //   },
// // // //   subtitle: {
// // // //     fontSize: 16,
// // // //     color: '#6B7280',
// // // //   },
// // // //   loadingContainer: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     backgroundColor: '#F9FAFB',
// // // //   },
// // // //   loadingText: {
// // // //     marginTop: 12,
// // // //     fontSize: 16,
// // // //     color: '#6B7280',
// // // //   },
// // // //   listContainer: {
// // // //     padding: 16,
// // // //   },
// // // //   orderCard: {
// // // //     backgroundColor: '#FFFFFF',
// // // //     borderRadius: 16,
// // // //     marginBottom: 16,
// // // //     padding: 16,
// // // //     ...Platform.select({
// // // //       ios: {
// // // //         shadowColor: '#000',
// // // //         shadowOffset: { width: 0, height: 2 },
// // // //         shadowOpacity: 0.1,
// // // //         shadowRadius: 8,
// // // //       },
// // // //       android: {
// // // //         elevation: 4,
// // // //       },
// // // //     }),
// // // //   },
// // // //   cardHeader: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     marginBottom: 16,
// // // //   },
// // // //   statusIndicator: {
// // // //     width: 8,
// // // //     height: 8,
// // // //     borderRadius: 4,
// // // //     backgroundColor: '#10B981',
// // // //     marginRight: 8,
// // // //   },
// // // //   statusText: {
// // // //     fontSize: 14,
// // // //     fontWeight: '600',
// // // //     color: '#10B981',
// // // //   },
// // // //   addressSection: {
// // // //     marginBottom: 16,
// // // //   },
// // // //   addressBlock: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'flex-start',
// // // //     paddingVertical: 8,
// // // //   },
// // // //   iconContainer: {
// // // //     width: 40,
// // // //     height: 40,
// // // //     borderRadius: 20,
// // // //     backgroundColor: '#F3F4F6',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     marginRight: 12,
// // // //   },
// // // //   addressDetails: {
// // // //     flex: 1,
// // // //   },
// // // //   addressLabel: {
// // // //     fontSize: 12,
// // // //     fontWeight: '600',
// // // //     color: '#6B7280',
// // // //     marginBottom: 4,
// // // //   },
// // // //   addressText: {
// // // //     fontSize: 15,
// // // //     color: '#111827',
// // // //     lineHeight: 20,
// // // //   },
// // // //   routeLine: {
// // // //     position: 'absolute',
// // // //     left: 19,
// // // //     top: 48,
// // // //     bottom: 48,
// // // //     width: 2,
// // // //     alignItems: 'center',
// // // //   },
// // // //   routeDot: {
// // // //     width: 4,
// // // //     height: 4,
// // // //     borderRadius: 2,
// // // //     backgroundColor: '#D1D5DB',
// // // //   },
// // // //   routeDash: {
// // // //     flex: 1,
// // // //     width: 2,
// // // //     backgroundColor: '#D1D5DB',
// // // //     marginVertical: 4,
// // // //   },
// // // //   routeDotBottom: {
// // // //     backgroundColor: '#D1D5DB',
// // // //   },
// // // //   acceptButton: {
// // // //     backgroundColor: 'orange',
// // // //     borderRadius: 12,
// // // //     paddingVertical: 14,
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //   },
// // // //   acceptButtonText: {
// // // //     color: '#FFFFFF',
// // // //     fontSize: 16,
// // // //     fontWeight: '600',
// // // //     marginRight: 8,
// // // //   },
// // // // });

// // // // export default OrdersScreen2;




























// // // import React, { useEffect, useState, useCallback } from 'react';
// // // import { 
// // //   View, 
// // //   Text, 
// // //   FlatList, 
// // //   TouchableOpacity, 
// // //   StyleSheet, 
// // //   ActivityIndicator,
// // //   Animated,
// // //   RefreshControl,
// // //   Platform,
// // //   StatusBar,
// // //   SafeAreaView,
// // // } from 'react-native';
// // // import { MaterialIcons } from '@expo/vector-icons';
// // // import { useNavigation } from '@react-navigation/native';
// // // import { LinearGradient } from 'expo-linear-gradient';
// // // import AsyncStorage from '@react-native-async-storage/async-storage';

// // // const COLORS = {
// // //   primary: '#6C63FF',
// // //   secondary: '#FF63A5',
// // //   gradient: {
// // //     start: '#8E2DE2',
// // //     end: '#4A00E0',
// // //   },
// // //   success: '#10B981',
// // //   danger: '#EF4444',
// // //   background: '#F8F9FF',
// // //   white: '#FFFFFF',
// // //   text: {
// // //     primary: '#2D3436',
// // //     secondary: '#636E72',
// // //   },
// // //   inactive: '#B2BEC3',
// // // };

// // // const OrderCard = React.memo(({ item, onPress }) => {
// // //   const scaleAnim = React.useRef(new Animated.Value(0.9)).current;
// // //   const opacityAnim = React.useRef(new Animated.Value(0)).current;

// // //   React.useEffect(() => {
// // //     Animated.parallel([
// // //       Animated.spring(scaleAnim, {
// // //         toValue: 1,
// // //         tension: 20,
// // //         friction: 7,
// // //         useNativeDriver: true,
// // //       }),
// // //       Animated.timing(opacityAnim, {
// // //         toValue: 1,
// // //         duration: 300,
// // //         useNativeDriver: true,
// // //       }),
// // //     ]).start();
// // //   }, []);

// // //   return (
// // //     <Animated.View
// // //       style={[
// // //         styles.orderCard,
// // //         {
// // //           opacity: opacityAnim,
// // //           transform: [{ scale: scaleAnim }],
// // //         },
// // //       ]}
// // //     >
// // //       <LinearGradient
// // //         colors={['rgba(108, 99, 255, 0.05)', 'rgba(108, 99, 255, 0.02)']}
// // //         style={styles.cardGradient}
// // //       >
// // //         <View style={styles.cardHeader}>
// // //           <View style={styles.statusContainer}>
// // //             <View style={styles.statusIndicator} />
// // //             <Text style={styles.statusText}>New Order</Text>
// // //           </View>
// // //           <View style={styles.orderIdContainer}>
// // //             <Text style={styles.orderId}>#{item.subscription_id}</Text>
// // //           </View>
// // //         </View>

// // //         <View style={styles.addressSection}>
// // //           <View style={styles.addressBlock}>
// // //             <View style={[styles.iconContainer, styles.pickupIcon]}>
// // //               <MaterialIcons name="location-on" size={24} color={COLORS.success} />
// // //             </View>
// // //             <View style={styles.addressDetails}>
// // //               <Text style={styles.addressLabel}>Pickup Location</Text>
// // //               <Text style={styles.addressText}>
// // //                 {item.admin_area || 'N/A'} {item.admin_landmark || ''}
// // //               </Text>
// // //             </View>
// // //           </View>

// // //           <View style={styles.routeLine}>
// // //             <View style={styles.routeDot} />
// // //             <View style={styles.routeDash} />
// // //             <View style={[styles.routeDot, styles.routeDotBottom]} />
// // //           </View>

// // //           <View style={styles.addressBlock}>
// // //             <View style={[styles.iconContainer, styles.deliveryIcon]}>
// // //               <MaterialIcons name="flag" size={24} color={COLORS.secondary} />
// // //             </View>
// // //             <View style={styles.addressDetails}>
// // //               <Text style={styles.addressLabel}>Delivery Location</Text>
// // //               <Text style={styles.addressText}>
// // //                 {item.user_area || 'N/A'} {item.user_landmark || ''}
// // //               </Text>
// // //             </View>
// // //           </View>
// // //         </View>

// // //         <TouchableOpacity
// // //           style={styles.acceptButton}
// // //           onPress={onPress}
// // //           activeOpacity={0.9}
// // //         >
// // //           <LinearGradient
// // //             colors={[COLORS.gradient.start, COLORS.gradient.end]}
// // //             start={{ x: 0, y: 0 }}
// // //             end={{ x: 1, y: 0 }}
// // //             style={styles.gradientButton}
// // //           >
// // //             <Text style={styles.acceptButtonText}>See Order</Text>
// // //             <MaterialIcons name="arrow-forward" size={20} color={COLORS.white} />
// // //           </LinearGradient>
// // //         </TouchableOpacity>
// // //       </LinearGradient>
// // //     </Animated.View>
// // //   );
// // // });

// // // const OrdersScreen2 = () => {
// // //   const [orders, setOrders] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [refreshing, setRefreshing] = useState(false);
// // //   const navigation = useNavigation();

// // //   const fetchOrders = async () => {
// // //     try {
// // //       const user = await AsyncStorage.getItem('user');
// // //       if (!user) {
// // //         console.error('User not logged in');
// // //         return;
// // //       }
// // //       const { id: loggedInUserId } = JSON.parse(user);
// // //       console.log('Fetching data for ID:', loggedInUserId);
  
// // //       const response = await fetch(`http://192.168.86.29:6000/orders2?loggedInUserId=${loggedInUserId}`);
// // //       const data = await response.json();
  
// // //       console.log('Order details:', data);
// // //       setOrders(data);
// // //     } catch (error) {
// // //       console.error('Error fetching orders:', error);
// // //     } finally {
// // //       setLoading(false);
// // //       setRefreshing(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchOrders();
// // //   }, []);

// // //   const onRefresh = useCallback(() => {
// // //     setRefreshing(true);
// // //     fetchOrders();
// // //   }, []);

// // //   if (loading) {
// // //     return (
// // //       <SafeAreaView style={styles.safeArea}>
// // //         <View style={styles.loadingContainer}>
// // //           <ActivityIndicator size="large" color={COLORS.primary} />
// // //           <Text style={styles.loadingText}>Loading orders...</Text>
// // //         </View>
// // //       </SafeAreaView>
// // //     );
// // //   }

// // //   return (
// // //     <SafeAreaView style={styles.safeArea}>
// // //       <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
// // //       <View style={styles.container}>
// // //         <View style={styles.headerContainer}>
// // //           <Text></Text>
// // //           <Text style={styles.headerTitle}>Available Orders</Text>
// // //           <Text style={styles.headerSubtitle}>
// // //             {orders.length} {orders.length === 1 ? 'order' : 'orders'} available
// // //           </Text>
// // //         </View>

// // //         <FlatList
// // //           data={orders}
// // //           keyExtractor={(item) => item.subscription_id.toString()}
// // //           renderItem={({ item }) => (
// // //             <OrderCard 
// // //               item={item}
// // //               onPress={() => navigation.navigate('orderdatails2', { order2: item })}
// // //             />
// // //           )}
// // //           contentContainerStyle={styles.listContent}
// // //           refreshControl={
// // //             <RefreshControl
// // //               refreshing={refreshing}
// // //               onRefresh={onRefresh}
// // //               colors={[COLORS.primary]}
// // //             />
// // //           }
// // //           ListEmptyComponent={
// // //             <View style={styles.emptyContainer}>
// // //               <Text style={styles.emptyText}>No orders available</Text>
// // //             </View>
// // //           }
// // //         />
// // //       </View>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   safeArea: {
// // //     flex: 1,
// // //     backgroundColor: COLORS.background,
// // //   },
// // //   container: {
// // //     flex: 1,
// // //   },
// // //   headerContainer: {
// // //     padding: 16,
// // //     backgroundColor: COLORS.background,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: 'rgba(108, 99, 255, 0.1)',
// // //   },
// // //   headerTitle: {
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
// // //     color: COLORS.text.primary,
// // //   },
// // //   headerSubtitle: {
// // //     fontSize: 14,
// // //     color: COLORS.text.secondary,
// // //     marginTop: 4,
// // //   },
// // //   loadingContainer: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   loadingText: {
// // //     marginTop: 12,
// // //     fontSize: 14,
// // //     color: COLORS.text.secondary,
// // //   },
// // //   listContent: {
// // //     padding: 16,
// // //   },
// // //   emptyContainer: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     paddingTop: 40,
// // //   },
// // //   emptyText: {
// // //     fontSize: 16,
// // //     color: COLORS.text.secondary,
// // //   },
// // //   orderCard: {
// // //     marginBottom: 16,
// // //     borderRadius: 16,
// // //     overflow: 'hidden',
// // //     ...Platform.select({
// // //       ios: {
// // //         shadowColor: COLORS.primary,
// // //         shadowOffset: { width: 0, height: 4 },
// // //         shadowOpacity: 0.1,
// // //         shadowRadius: 12,
// // //       },
// // //       android: {
// // //         elevation: 8,
// // //       },
// // //     }),
// // //   },
// // //   cardGradient: {
// // //     backgroundColor: COLORS.white,
// // //     padding: 16,
// // //   },
// // //   cardHeader: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     marginBottom: 16,
// // //   },
// // //   statusContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   statusIndicator: {
// // //     width: 8,
// // //     height: 8,
// // //     borderRadius: 4,
// // //     backgroundColor: COLORS.primary,
// // //     marginRight: 8,
// // //   },
// // //   statusText: {
// // //     fontSize: 14,
// // //     fontWeight: '600',
// // //     color: COLORS.primary,
// // //   },
// // //   orderIdContainer: {
// // //     backgroundColor: 'rgba(108, 99, 255, 0.1)',
// // //     paddingHorizontal: 12,
// // //     paddingVertical: 4,
// // //     borderRadius: 12,
// // //   },
// // //   orderId: {
// // //     color: COLORS.primary,
// // //     fontSize: 12,
// // //     fontWeight: '600',
// // //   },
// // //   addressSection: {
// // //     marginBottom: 16,
// // //     position: 'relative',
// // //   },
// // //   addressBlock: {
// // //     flexDirection: 'row',
// // //     alignItems: 'flex-start',
// // //     paddingVertical: 8,
// // //   },
// // //   iconContainer: {
// // //     width: 44,
// // //     height: 44,
// // //     borderRadius: 22,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginRight: 16,
// // //   },
// // //   pickupIcon: {
// // //     backgroundColor: 'rgba(16, 185, 129, 0.1)',
// // //   },
// // //   deliveryIcon: {
// // //     backgroundColor: 'rgba(255, 99, 165, 0.1)',
// // //   },
// // //   addressDetails: {
// // //     flex: 1,
// // //   },
// // //   addressLabel: {
// // //     fontSize: 13,
// // //     fontWeight: '600',
// // //     color: COLORS.text.secondary,
// // //     marginBottom: 4,
// // //   },
// // //   addressText: {
// // //     fontSize: 16,
// // //     color: COLORS.text.primary,
// // //     lineHeight: 22,
// // //     fontWeight: '500',
// // //   },
// // //   routeLine: {
// // //     position: 'absolute',
// // //     left: 21,
// // //     top: 52,
// // //     bottom: 52,
// // //     width: 2,
// // //     alignItems: 'center',
// // //   },
// // //   routeDot: {
// // //     width: 4,
// // //     height: 4,
// // //     borderRadius: 2,
// // //     backgroundColor: COLORS.primary,
// // //   },
// // //   routeDash: {
// // //     flex: 1,
// // //     width: 2,
// // //     backgroundColor: `${COLORS.primary}40`,
// // //     marginVertical: 4,
// // //   },
// // //   routeDotBottom: {
// // //     backgroundColor: COLORS.secondary,
// // //   },
// // //   acceptButton: {
// // //     borderRadius: 12,
// // //     overflow: 'hidden',
// // //   },
// // //   gradientButton: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     paddingVertical: 14,
// // //   },
// // //   acceptButtonText: {
// // //     color: COLORS.white,
// // //     fontSize: 16,
// // //     fontWeight: '600',
// // //     marginRight: 8,
// // //   },
// // // });

// // // export default OrdersScreen2;




// // import React, { useEffect, useState } from 'react';
// // import { View, Text, ActivityIndicator, Dimensions } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { LineChart, BarChart } from 'react-native-chart-kit';
// // import axios from 'axios';

// // const OrdersScreen2 = () => {
// //     const [quizData, setQuizData] = useState([]);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         const fetchQuizData = async () => {
// //             try {
// //               const user = await AsyncStorage.getItem('user');
// //               if (!user) throw new Error('User not logged in');

// //               const { id: userId} = JSON.parse(user);
// //                 console.log(userId);
// //                 if (!userId) {
// //                     setLoading(false);
// //                     return;
// //                 }
// //                 const response = await axios.get(`http://192.168.86.29:6000/quiz-results/${userId}`);
// //                 setQuizData(response.data);
// //             } catch (error) {
// //                 console.error("Error fetching quiz data:", error);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchQuizData();
// //     }, []);

// //     if (loading) {
// //         return <ActivityIndicator size="large" color="blue" />;
// //     }

// //     if (!quizData.length) {
// //         return <Text>No quiz data available</Text>;
// //     }

// //     // Calculate correct and incorrect counts
// //     const correctCount = quizData.filter(q => q.is_correct === 1).length;
// //     const incorrectCount = quizData.filter(q => q.is_correct === 0).length;

// //     return (
// //         <View>
// //             <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Quiz Performance</Text>
            
// //             {/* Bar Chart */}
// //             <BarChart
// //                 data={{
// //                     labels: ["Correct", "Incorrect"],
// //                     datasets: [{ data: [correctCount, incorrectCount] }]
// //                 }}
// //                 width={Dimensions.get("window").width - 20}
// //                 height={220}
// //                 yAxisLabel=""
// //                 chartConfig={{
// //                     backgroundColor: "#f4f4f4",
// //                     backgroundGradientFrom: "#1E2923",
// //                     backgroundGradientTo: "#08130D",
// //                     decimalPlaces: 0,
// //                     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
// //                     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
// //                 }}
// //                 style={{ marginVertical: 8, borderRadius: 10 }}
// //             />

// //             {/* Line Chart */}
// //             <LineChart
// //                 data={{
// //                     labels: ["Correct", "Incorrect"],
// //                     datasets: [{ data: [correctCount, incorrectCount] }]
// //                 }}
// //                 width={Dimensions.get("window").width - 20}
// //                 height={220}
// //                 yAxisLabel=""
// //                 chartConfig={{
// //                     backgroundColor: "#f4f4f4",
// //                     backgroundGradientFrom: "#ff9800",
// //                     backgroundGradientTo: "#f44336",
// //                     decimalPlaces: 0,
// //                     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
// //                     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
// //                 }}
// //                 style={{ marginVertical: 8, borderRadius: 10 }}
// //             />
// //         </View>
// //     );
// // };

// // export default OrdersScreen2;

// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
// import axios from 'axios';

// const OrdersScreen2 = () => {
//     const [quizData, setQuizData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchQuizData = async () => {
//             try {
//                 const user = await AsyncStorage.getItem('user');
//                 if (!user) throw new Error('User not logged in');

//                 const { id: userId } = JSON.parse(user);
//                 if (!userId) {
//                     setLoading(false);
//                     return;
//                 }
//                 const response = await axios.get(`http://192.168.86.29:6000/quiz-results/${userId}`);
//                 setQuizData(response.data);
//             } catch (error) {
//                 console.error("Error fetching quiz data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchQuizData();
//     }, []);

//     if (loading) {
//         return <ActivityIndicator size="large" color="blue" />;
//     }

//     if (!quizData.length) {
//         return <Text>No quiz data available</Text>;
//     }

//     // Process Data
//     const correctCount = quizData.filter(q => q.is_correct === 1).length;
//     const incorrectCount = quizData.filter(q => q.is_correct === 0).length;

//     // Extract timestamps and time taken
//     const timestamps = quizData.map(q => new Date(q.timestamp).toLocaleTimeString());
//     const timeTaken = quizData.map(q => q.time_taken);

//     // Split data into two frames
//     const first20 = quizData.slice(0, 20);
//     const remaining = quizData.slice(20);

//     const first20Timestamps = first20.map(q => new Date(q.timestamp).toLocaleTimeString());
//     const first20TimeTaken = first20.map(q => q.time_taken);

//     const remainingTimestamps = remaining.map(q => new Date(q.timestamp).toLocaleTimeString());
//     const remainingTimeTaken = remaining.map(q => q.time_taken);

//     return (
//         <ScrollView>
//             <View>
//                 <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Quiz Performance</Text>

//                 {/* Bar Chart: Correct vs Incorrect */}
//                 <BarChart
//                     data={{
//                         labels: ["Correct", "Incorrect"],
//                         datasets: [{ data: [correctCount, incorrectCount] }]
//                     }}
//                     width={Dimensions.get("window").width - 20}
//                     height={220}
//                     chartConfig={{
//                         backgroundColor: "#f4f4f4",
//                         backgroundGradientFrom: "#1E2923",
//                         backgroundGradientTo: "#08130D",
//                         decimalPlaces: 0,
//                         color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                         labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
//                     }}
//                     style={{ marginVertical: 8, borderRadius: 10 }}
//                 />

//                 {/* Line Chart: Time Taken Per Question (First 20 Questions) */}
//                 {first20.length > 0 && (
//                     <View style={{ alignItems: 'center' }}>
//                         <Text style={{ fontSize: 16, marginBottom: 5 }}>Time Taken (First 20 Questions)</Text>
//                         <LineChart
//                             data={{
//                                 labels: first20Timestamps,
//                                 datasets: [{ data: first20TimeTaken }]
//                             }}
//                             width={Dimensions.get("window").width - 20}
//                             height={220}
//                             yAxisLabel=""
//                             chartConfig={{
//                                 backgroundGradientFrom: "#ff9800",
//                                 backgroundGradientTo: "#f44336",
//                                 decimalPlaces: 0,
//                                 color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                                 labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
//                             }}
//                             style={{ marginVertical: 8, borderRadius: 10 }}
//                         />
//                     </View>
//                 )}

//                 {/* Line Chart: Time Taken Per Question (Remaining Questions) */}
//                 {remaining.length > 0 && (
//                     <View style={{ alignItems: 'center' }}>
//                         <Text style={{ fontSize: 16, marginBottom: 5 }}>Time Taken (Remaining Questions)</Text>
//                         <LineChart
//                             data={{
//                                 labels: remainingTimestamps,
//                                 datasets: [{ data: remainingTimeTaken }]
//                             }}
//                             width={Dimensions.get("window").width - 20}
//                             height={220}
//                             yAxisLabel=""
//                             chartConfig={{
//                                 backgroundGradientFrom: "#4CAF50",
//                                 backgroundGradientTo: "#087F23",
//                                 decimalPlaces: 0,
//                                 color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                                 labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
//                             }}
//                             style={{ marginVertical: 8, borderRadius: 10 }}
//                         />
//                     </View>
//                 )}

//                 {/* Pie Chart: Correct vs Incorrect Distribution */}
//                 <View style={{ alignItems: 'center', marginTop: 10 }}>
//                     <Text style={{ fontSize: 16, marginBottom: 5 }}>Correct vs Incorrect Distribution</Text>
//                     <PieChart
//                         data={[
//                             { name: "Correct", population: correctCount, color: "green", legendFontColor: "#7F7F7F", legendFontSize: 15 },
//                             { name: "Incorrect", population: incorrectCount, color: "red", legendFontColor: "#7F7F7F", legendFontSize: 15 }
//                         ]}
//                         width={Dimensions.get("window").width - 20}
//                         height={220}
//                         chartConfig={{
//                             backgroundColor: "#f4f4f4",
//                             backgroundGradientFrom: "#3E3E3E",
//                             backgroundGradientTo: "#1E1E1E",
//                             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
//                         }}
//                         accessor="population"
//                         backgroundColor="transparent"
//                         paddingLeft="15"
//                         absolute
//                     />
//                 </View>
//             </View>
//         </ScrollView>
//     );
// };
import React, { useEffect, useState, useRef } from 'react';
import { 
  View, 
  Text, 
  ActivityIndicator, 
  Dimensions, 
  ScrollView, 
  StyleSheet, 
  Animated, 
  Easing,
  TouchableOpacity,
  SafeAreaView,
  RefreshControl,
  Platform
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph } from 'react-native-chart-kit';
import axios from 'axios';

// Try importing optional packages, fallback gracefully if they're not available
let MaterialIcons, Ionicons, FontAwesome5, LinearGradient, LottieView;
try {
  // Import Expo Vector Icons if available
  const ExpoVectorIcons = require('@expo/vector-icons');
  MaterialIcons = ExpoVectorIcons.MaterialIcons;
  Ionicons = ExpoVectorIcons.Ionicons;
  FontAwesome5 = ExpoVectorIcons.FontAwesome5;
} catch (error) {
  // Fallback icons to null if not available
  MaterialIcons = ({ name, size, color }) => <Text style={{ color }}>⬤</Text>;
  Ionicons = ({ name, size, color }) => <Text style={{ color }}>⬤</Text>;
  FontAwesome5 = ({ name, size, color }) => <Text style={{ color }}>⬤</Text>;
  console.warn("Vector icons not available:", error.message);
}

try {
  // Import LinearGradient if available
  LinearGradient = require('expo-linear-gradient').LinearGradient;
} catch (error) {
  // Fallback component if LinearGradient is not available
  LinearGradient = ({ children, style, colors }) => (
    <View style={[style, { backgroundColor: colors[0] }]}>{children}</View>
  );
  console.warn("LinearGradient not available:", error.message);
}

try {
  // Import LottieView if available
  LottieView = require('lottie-react-native');
} catch (error) {
  // LottieView will be undefined, we'll handle this in the component
  console.warn("LottieView not available:", error.message);
}

const { width } = Dimensions.get('window');

const COLORS = {
  primary: '#6C63FF',
  secondary: '#FF63A5',
  tertiary: '#63FFD1',
  quaternary: '#FF9F63',
  gradient: { start: '#8E2DE2', end: '#4A00E0' },
  background: '#F0F3FF', // Lighter background
  card: '#FFFFFF',
  text: { 
    primary: '#2D3436', 
    secondary: '#636E72',
    light: '#FFFFFF' 
  },
  inactive: '#B2BEC3',
  success: '#00C853',
  error: '#FF5252',
  warning: '#FFD600',
  shadow: 'rgba(46, 49, 146, 0.1)',
};

// Custom Chart configuration
const chartConfig = {
  backgroundGradientFrom: COLORS.gradient.start,
  backgroundGradientTo: COLORS.gradient.end,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.6,
  useShadowColorFromDataset: false,
  decimalPlaces: 0,
  propsForDots: {
    r: '5',
    strokeWidth: '2',
    stroke: COLORS.secondary
  }
};

const QuizPerformanceDashboard = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  const loadingAnimation = useRef(null);
  const [stats, setStats] = useState({
    correctCount: 0,
    incorrectCount: 0,
    avgTime: 0,
    totalQuizzes: 0,
    streakDays: 0,
    improvement: 0,
    subjectPerformance: {}
  });



  // const loadTopics = async () => {
  //   try {
  //       const responses = await axios.post("http://192.168.86.29:11434/api/chat", {
  //           model: "mistral",
  //           messages: [{ role: "user", content: prompt }],
  //           stream: false,
  //       });
  //   } catch (error) {
  //     console.error("Error fetching topics:", error);
  //   }
  // };

  const fetchQuizData = async () => {
    
    try {
      setLoading(true);
      
      const user = await AsyncStorage.getItem('user');
      if (!user) throw new Error('User not logged in');

      const { id: userId } = JSON.parse(user);
      if (!userId) {
        setLoading(false);
        return;
      }

      // Note: In a production app, use a configurable API endpoint
      const response = await axios.get(`http://192.168.86.29:6000/quiz-results/${userId}`);
      
      // Process the data
      const data = response.data;
      setQuizData(data);
      
      // Calculate stats
      calculateStats(data);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data) => {
    if (!data.length) return;
    
    // Basic stats
    const correctCount = data.filter(q => q.is_correct === 1).length;
    const incorrectCount = data.filter(q => q.is_correct === 0).length;
    
    // Calculate average time
    const avgTime = data.reduce((sum, q) => sum + q.time_taken, 0) / data.length;
    
    // Count unique quiz sessions (estimate based on timestamps)
    const uniqueDates = new Set(data.map(q => new Date(q.timestamp).toDateString())).size;
    
    // Mock streak and improvement (in a real app, you'd calculate these properly)
    const streakDays = Math.min(uniqueDates, 7); 
    
    // Calculate improvement (comparing first half vs second half accuracy)
    const midpoint = Math.floor(data.length / 2);
    const firstHalfCorrect = data.slice(0, midpoint).filter(q => q.is_correct === 1).length / midpoint;
    const secondHalfCorrect = data.slice(midpoint).filter(q => q.is_correct === 1).length / (data.length - midpoint);
    const improvement = Math.round((secondHalfCorrect - firstHalfCorrect) * 100);
    
    // Extract subject performance (assuming a subject field; if not present, use mock data)
    const subjectPerformance = {};
    
    // Simulate subject data (in real app, use actual subject data from the API)
    const subjects = ['Math', 'Reasoning', 'English', 'Logical'];
    subjects.forEach(subject => {
      const subjectQuestions = Math.floor(Math.random() * data.length);
      const correctAnswers = Math.floor(Math.random() * subjectQuestions);
      subjectPerformance[subject] = {
        total: subjectQuestions,
        correct: correctAnswers,
        percentage: subjectQuestions > 0 ? (correctAnswers / subjectQuestions) * 100 : 0
      };
    });
    
    setStats({
      correctCount,
      incorrectCount,
      avgTime,
      totalQuizzes: uniqueDates,
      streakDays,
      improvement,
      subjectPerformance
    });
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchQuizData();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchQuizData();
    
    // Animation sequence
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  // Custom loading component that doesn't rely on Lottie
  const renderLoadingComponent = () => {
    // If LottieView is available, try to use it, but fallback if animation file is missing
    if (LottieView) {
      try {
        return (
          <LottieView
            ref={loadingAnimation}
            // We'll use a hardcoded animation that would need to be provided before implementation
            // Instead of requiring from a file path that might not exist
            source={require('@lottiefiles/lottie-interactivity')}
            autoPlay
            loop
            style={{ width: 150, height: 150 }}
          />
        );
      } catch (error) {
        // Silently fallback to ActivityIndicator
        console.warn("Could not load Lottie animation:", error.message);
      }
    }
    
    return <ActivityIndicator size="large" color={COLORS.primary} />;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Loading your quiz data...</Text>
      </View>
    );
  }

  if (!quizData.length) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyIconContainer}>
          <Text style={styles.emptyIcon}>📊</Text>
        </View>
        <Text style={styles.emptyTitle}>No Quiz Data Yet</Text>
        <Text style={styles.emptySubtitle}>Take your first quiz to see your performance!</Text>
        <TouchableOpacity style={styles.startButton}>
          <LinearGradient
            colors={[COLORS.gradient.start, COLORS.gradient.end]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton}
          >
            <Text style={styles.startButtonText}>Start a Quiz</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  // Prepare chart data
  const correctVsIncorrect = {
    labels: ["Correct", "Incorrect"],
    datasets: [{ 
      data: [stats.correctCount, stats.incorrectCount],
      colors: [
        (opacity = 1) => COLORS.success,
        (opacity = 1) => COLORS.error
      ]
    }]
  };

  const timeChartData = {
    labels: quizData.slice(-7).map(q => new Date(q.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
    datasets: [{ 
      data: quizData.slice(-7).map(q => q.time_taken),
      color: (opacity = 1) => COLORS.secondary,
      strokeWidth: 2
    }]
  };

  const progressData = {
    labels: ["Speed", "Accuracy", "Consistency"], 
    data: [
      Math.min(1, stats.avgTime < 30 ? 0.8 : (stats.avgTime < 60 ? 0.6 : 0.4)),
      stats.correctCount / (stats.correctCount + stats.incorrectCount),
      Math.min(0.95, stats.streakDays / 10)
    ]
  };

  // Mock data for the contribution graph
  const lastThreeMonths = [];
  const today = new Date();
  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateString = date.toISOString().split('T')[0];
    
    // Generate a random count - in a real app, this would be actual daily quiz counts
    const count = Math.floor(Math.random() * 5);
    lastThreeMonths.push({ date: dateString, count });
  }

  // Simple icon renderer as fallback for vector icons
  const renderIcon = (name, size = 24, color = COLORS.text.primary) => {
    // Map icon names to emoji or simple Unicode characters as fallback
    const iconMap = {
      'arrow-back': '←',
      'information-circle-outline': 'ℹ️',
      'check-circle': '✓',
      'timer': '⏱️',
      'school': '🎓',
      'arrow-up': '↑',
      'arrow-down': '↓',
      'file-download': '📥'
    };
    
    return <Text style={{ fontSize: size, color }}>{iconMap[name] || '•'}</Text>;
  };

  const renderOverviewTab = () => (
    <>
      <View style={styles.statsRow}>
        <StatsCard 
          title="Accuracy" 
          value={`${Math.round((stats.correctCount / (stats.correctCount + stats.incorrectCount)) * 100)}%`}
          icon="check-circle"
          color={COLORS.success}
        />
        <StatsCard 
          title="Avg. Time" 
          value={`${Math.round(stats.avgTime)}s`}
          icon="timer"
          color={COLORS.secondary}
        />
        <StatsCard 
          title="Quizzes" 
          value={stats.totalQuizzes.toString()}
          icon="school"
          color={COLORS.primary}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Performance Summary</Text>
        <BarChart
          data={correctVsIncorrect}
          width={width - 40}
          height={220}
          chartConfig={{
            ...chartConfig,
            barPercentage: 0.7,
          }}
          style={styles.chartStyle}
          fromZero
          showValuesOnTopOfBars
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Skills Radar</Text>
        <ProgressChart
          data={progressData}
          width={width - 40}
          height={220}
          chartConfig={{
            ...chartConfig,
            backgroundGradientFrom: COLORS.quaternary,
            backgroundGradientTo: COLORS.tertiary,
          }}
          style={styles.chartStyle}
          strokeWidth={10}
          radius={32}
          hideLegend={false}
        />
      </View>
    </>
  );

  const renderTrendsTab = () => (
    <>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Time Trends (Last 7 Quizzes)</Text>
        <LineChart
          data={timeChartData}
          width={width - 40}
          height={220}
          chartConfig={{
            ...chartConfig,
            backgroundGradientFrom: COLORS.secondary,
            backgroundGradientTo: COLORS.primary,
          }}
          style={styles.chartStyle}
          bezier
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Improvement Trend</Text>
        <View style={styles.improvementContainer}>
          <View style={styles.improvementIconContainer}>
            {FontAwesome5 ? (
              <FontAwesome5 
                name={stats.improvement >= 0 ? "arrow-up" : "arrow-down"} 
                size={24} 
                color={stats.improvement >= 0 ? COLORS.success : COLORS.error} 
              />
            ) : (
              <Text style={{ 
                fontSize: 24, 
                color: stats.improvement >= 0 ? COLORS.success : COLORS.error 
              }}>
                {stats.improvement >= 0 ? '▲' : '▼'}
              </Text>
            )}
          </View>
          <View style={styles.improvementTextContainer}>
            <Text style={styles.improvementValue}>
              {Math.abs(stats.improvement)}% {stats.improvement >= 0 ? "Improvement" : "Decline"}
            </Text>
            <Text style={styles.improvementSubtext}>
              comparing earlier vs. recent performance
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Quiz Activity</Text>
        <ContributionGraph
          values={lastThreeMonths}
          endDate={new Date()}
          numDays={90}
          width={width - 40}
          height={220}
          chartConfig={{
            ...chartConfig,
            backgroundGradientFrom: COLORS.primary,
            backgroundGradientTo: COLORS.tertiary,
          }}
          style={styles.chartStyle}
        />
        <Text style={styles.chartCaption}>Your quiz activity over the last 3 months</Text>
      </View>
    </>
  );

  const renderSubjectsTab = () => (
    <>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Subject Performance</Text>
        <PieChart
          data={Object.entries(stats.subjectPerformance).map(([subject, data], index) => ({
            name: subject,
            population: data.total,
            color: [COLORS.primary, COLORS.secondary, COLORS.tertiary, COLORS.quaternary][index % 4],
            legendFontColor: COLORS.text.primary,
            legendFontSize: 12
          }))}
          width={width - 40}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      <View style={styles.subjectCardContainer}>
        {Object.entries(stats.subjectPerformance).map(([subject, data], index) => (
          <View key={subject} style={styles.subjectCard}>
            <LinearGradient
              colors={[
                [COLORS.primary, COLORS.gradient.end],
                [COLORS.secondary, COLORS.quaternary],
                [COLORS.tertiary, COLORS.secondary],
                [COLORS.quaternary, COLORS.primary]
              ][index % 4]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.subjectGradient}
            >
              <Text style={styles.subjectName}>{subject}</Text>
              <View style={styles.subjectStats}>
                <Text style={styles.subjectPercentage}>{Math.round(data.percentage)}%</Text>
                <Text style={styles.subjectDetail}>
                  {data.correct} correct out of {data.total}
                </Text>
              </View>
            </LinearGradient>
          </View>
        ))}
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          {Ionicons ? (
            <Ionicons name="arrow-back" size={24} color={COLORS.text.primary} />
          ) : (
            renderIcon('arrow-back')
          )}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quiz Performance</Text>
        <TouchableOpacity style={styles.infoButton}>
          {Ionicons ? (
            <Ionicons name="information-circle-outline" size={24} color={COLORS.text.primary} />
          ) : (
            renderIcon('information-circle-outline')
          )}
        </TouchableOpacity>
      </View>

      <Animated.View style={[
        styles.tabContainer,
        { 
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }]
        }
      ]}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'overview' && styles.activeTab]}
          onPress={() => setActiveTab('overview')}
        >
          <Text style={[styles.tabText, activeTab === 'overview' && styles.activeTabText]}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'trends' && styles.activeTab]}
          onPress={() => setActiveTab('trends')}
        >
          <Text style={[styles.tabText, activeTab === 'trends' && styles.activeTabText]}>Trends</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'subjects' && styles.activeTab]}
          onPress={() => setActiveTab('subjects')}
        >
          <Text style={[styles.tabText, activeTab === 'subjects' && styles.activeTabText]}>Subjects</Text>
        </TouchableOpacity>
      </Animated.View>

      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[COLORS.primary]} />
        }
      >
        <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'trends' && renderTrendsTab()}
          {activeTab === 'subjects' && renderSubjectsTab()}
          
          <TouchableOpacity style={styles.exportButton}>
            {MaterialIcons ? (
              <MaterialIcons name="file-download" size={20} color={COLORS.text.light} />
            ) : (
              renderIcon('file-download', 20, COLORS.text.light)
            )}
            <Text style={styles.exportButtonText}>Export Performance Data</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, icon, color }) => {
  // Simple icon renderer as fallback
  const renderIcon = (name, size = 24, color) => {
    const iconMap = {
      'check-circle': '✓',
      'timer': '⏱️',
      'school': '🎓'
    };
    
    return <Text style={{ fontSize: size, color }}>{iconMap[name] || '•'}</Text>;
  };

  return (
    <View style={styles.statsCard}>
      <LinearGradient
        colors={[color, color + '99']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.statsCardGradient}
      >
        {MaterialIcons ? (
          <MaterialIcons name={icon} size={24} color={COLORS.text.light} />
        ) : (
          renderIcon(icon, 24, COLORS.text.light)
        )}
        <Text style={styles.statsCardValue}>{value}</Text>
        <Text style={styles.statsCardTitle}>{title}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  backButton: {
    padding: 8,
  },
  infoButton: {
    padding: 8,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    paddingHorizontal: 16,
    paddingBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    fontSize: 16,
    color: COLORS.text.secondary,
    fontWeight: '500',
  },
  activeTabText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 18,
    color: COLORS.text.secondary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: 12,
  },
  chartCaption: {
    fontSize: 12,
    color: COLORS.text.secondary,
    textAlign: 'center',
    marginTop: 8,
  },
  chartStyle: {
    borderRadius: 16,
    paddingRight: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 20,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginTop: 20,
  },
  emptySubtitle: {
    fontSize: 16,
    color: COLORS.text.secondary,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  startButton: {
    marginTop: 16,
    width: width * 0.7,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradientButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: COLORS.text.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statsCard: {
    width: (width - 56) / 3,
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
  },
  statsCardGradient: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsCardTitle: {
    color: COLORS.text.light,
    fontSize: 12,
    fontWeight: '500',
  },
  statsCardValue: {
    color: COLORS.text.light,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  improvementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  improvementIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  improvementTextContainer: {
    flex: 1,
  },
  improvementValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  improvementSubtext: {
    fontSize: 14,
    color: COLORS.text.secondary,
  },
  subjectCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  subjectCard: {
    width: (width - 48) / 2,
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  subjectGradient: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  subjectName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text.light,
  },
  subjectStats: {
    alignItems: 'flex-start',
  },
  subjectPercentage: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text.light,
  },
  subjectDetail: {
    fontSize: 12,
    color: COLORS.text.light,
    opacity: 0.9,
  },
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  exportButtonText: {
    color: COLORS.text.light,
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default QuizPerformanceDashboard;