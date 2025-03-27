
// // import React, { useState, useEffect } from 'react';
// // import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import axios from 'axios';
// // import { useRouter } from 'expo-router';


// // const ProfileScreen = () => {
// //    const router = useRouter();
// //   const [partnerData, setPartnerData] = useState(null);
// //   const [isDarkMode, setIsDarkMode] = useState(false);
// //   const baseURL = 'http://192.168.38.29:5000'; 

 

// //   useEffect(() => {
// //     const fetchPartnerData = async () => {
// //       try {
// //         const user = await AsyncStorage.getItem('user');
// //         if (user) {
// //           const { id } = JSON.parse(user); // Extract the user ID
// //           console.log('Fetching data for ID:', id);
  
// //           const response = await axios.get(`http://192.168.38.29:5000/delivery-partner/${id}`);
// //           console.log('API Response:', response.data);
  
// //           const { success, data } = response.data;
  
// //           if (success) {
// //             setPartnerData(data);
// //           } else {
// //             Alert.alert('Error', 'Delivery partner not found.');
// //           }
// //         }
// //       } catch (error) {
// //         Alert.alert('Error', 'Unable to fetch profile data.');
// //         console.error('API Fetch Error:', error);
// //       }
// //     };
  
// //     fetchPartnerData();
// //   }, []);
  
  


// // const handleLogout = async () => {
// //     await AsyncStorage.removeItem('user'); // Remove user data from AsyncStorage
// //     Alert.alert('Logged out', 'You have been logged out successfully');
// //     router.push('/Login'); // Navigate to the login screen
// //   };


// //   const toggleSwitch = () => {
// //     setIsDarkMode((prevState) => !prevState);
// //   };

// //   if (!partnerData) {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.loadingText}>Loading...</Text>
// //       </View>
// //     );
// //   }

// //   const { first_name, last_name, profile_picture_url, primary_mobile, email, city, blood_group } = partnerData;

// //   return (
// //     <View style={isDarkMode ? styles.containerDark : styles.container}>
// //       <Text style={styles.title}>Profile</Text>

// //       {/* Profile Section */}
// //       <View style={styles.profileSection}>
// //         <Image
// //           style={styles.profileImage}
// //           source={{ uri: `${baseURL}${profile_picture_url}` }}
// //         />
// //         <View style={styles.profileDetails}>
// //           <Text style={styles.name}>{`${first_name} ${last_name}`}</Text>
// //           <Text style={styles.email}>{email || primary_mobile}</Text>
// //           <Text style={styles.city}>{`City: ${city}`}</Text>
// //           <Text style={styles.bloodGroup}>{`Blood Group: ${blood_group || 'N/A'}`}</Text>
// //         </View>
// //       </View>

// //       {/* Account Section */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>Account</Text>
// //         <OptionItem label="Edit Profile" />
// //         <OptionItem label="Change Password" />
// //         <OptionItem label="My Orders" />
// //         <OptionItem label="Payment Setting" />
// //       </View>

// //       {/* Logout Button */}
// //       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
// //         <Text style={styles.logoutButtonText}>Log Out</Text>
// //       </TouchableOpacity>

      
// //     </View>
// //   );
// // };

// // // Reusable Option Component
// // const OptionItem = ({ label }) => (
// //   <TouchableOpacity style={styles.option}>
// //     <Text style={styles.optionText}>{label}</Text>
// //     <Text style={styles.optionArrow}>›</Text>
// //   </TouchableOpacity>
// // );

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#E8EDF5',
// //     padding: 20,
// //   },
// //   containerDark: {
// //     flex: 1,
// //     backgroundColor: '#333',
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginVertical: 20,
// //     color: '#000',
// //   },
// //   nav: {
// // marginBottom: 15,
// //   },
// //   loadingText: {
// //     fontSize: 16,
// //     textAlign: 'center',
// //     color: '#999',
// //   },
// //   profileSection: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#F9F9F9',
// //     padding: 20,
// //     borderRadius: 10,
// //     marginBottom: 20,
// //   },
// //   profileImage: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     marginRight: 15,
// //   },
// //   profileDetails: {
// //     flex: 1,
// //   },
// //   name: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#000',
// //   },
// //   email: {
// //     fontSize: 14,
// //     color: '#666',
// //   },
// //   city: {
// //     fontSize: 14,
// //     color: '#333',
// //   },
// //   bloodGroup: {
// //     fontSize: 14,
// //     color: '#FF4500',
// //   },
// //   section: {
// //     backgroundColor: '#F9F9F9',
// //     borderRadius: 10,
// //     marginBottom: 20,
// //     paddingVertical: 10,
// //   },
// //   sectionTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     marginLeft: 15,
// //     color: '#000',
// //   },
// //   option: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: 15,
// //     paddingVertical: 10,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#E0E0E0',
// //   },
// //   optionText: {
// //     fontSize: 14,
// //     color: '#000',
// //   },
// //   optionArrow: {
// //     fontSize: 18,
// //     color: '#FF9500',
// //   },
// //   logoutButton: {
// //     backgroundColor: '#FF4500',
// //     padding: 15,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //   },
// //   logoutButtonText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#FFF',
// //   },
// // });

// // export default ProfileScreen;




// // change at 22-01-25

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Animated } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { useRouter } from 'expo-router';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const COLORS = {
//   primary: '#6C63FF',
//   secondary: '#FF63A5',
//   gradient: {
//     start: '#8E2DE2',
//     end: '#4A00E0',
//   },
//   background: '#F8F9FF',
//   white: '#FFFFFF',
//   text: {
//     primary: '#2D3436',
//     secondary: '#636E72',
//   }
// };

// const ProfileScreen = () => {
//   const router = useRouter();
//   const [partnerData, setPartnerData] = useState(null);
//   const [animation] = useState(new Animated.Value(0));
//   const baseURL = 'http://192.168.86.29:6000';

//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
    
//     fetchPartnerData();
//   }, []);

//   const fetchPartnerData = async () => {
//     try {
//       const user = await AsyncStorage.getItem('user');
//       if (user) {
//         const { id } = JSON.parse(user);
//         const response = await axios.get(`${baseURL}/delivery-partner/${id}`);
//         const { success, data } = response.data;
//         if (success) setPartnerData(data);
//         else Alert.alert('Error', 'Delivery partner not found.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Unable to fetch profile data.');
//       console.error('API Fetch Error:', error);
//     }
//   };

//   const handleLogout = async () => {
//     await AsyncStorage.removeItem('user');
//     Alert.alert('Logged out', 'You have been logged out successfully');
//     router.push('/Login');
//   };

//   if (!partnerData) {
//     return (
//       <View style={styles.loadingContainer}>
//         <LinearGradient
//           colors={[COLORS.gradient.start, COLORS.gradient.end]}
//           style={styles.loadingGradient}
//         >
//           <Text style={styles.loadingText}>Loading...</Text>
//         </LinearGradient>
//       </View>
//     );
//   }

//   const { first_name, last_name, profile_picture_url, primary_mobile, email, city, blood_group } = partnerData;

//   const ProfileOptionItem = ({ icon, label, onPress }) => (
//     <TouchableOpacity style={styles.option} onPress={onPress}>
//       <View style={styles.optionIconContainer}>
//         <Icon name={icon} size={20} color={COLORS.primary} />
//       </View>
//       <Text style={styles.optionText}>{label}</Text>
//       <Icon name="chevron-right" size={16} color={COLORS.text.secondary} />
//     </TouchableOpacity>
//   );

//   return (
//     <Animated.View 
//       style={[
//         styles.container,
//         {
//           opacity: animation,
//           transform: [{
//             translateY: animation.interpolate({
//               inputRange: [0, 1],
//               outputRange: [50, 0],
//             }),
//           }],
//         },
//       ]}
//     >
//       <LinearGradient
//         colors={[COLORS.gradient.start, COLORS.gradient.end]}
//         style={styles.header}
//       >
//         <View style={styles.profileSection}>
//           <Image
//             style={styles.profileImage}
//             source={{ uri: `${baseURL}${profile_picture_url}` }}
//           />
//           <View style={styles.profileInfo}>
//             <Text style={styles.name}>{`${first_name} ${last_name}`}</Text>
//             <Text style={styles.subtitle}>{email || primary_mobile}</Text>
//             <View style={styles.badge}>
//               <Icon name="map-marker-alt" size={12} color={COLORS.white} />
//               <Text style={styles.badgeText}>{city}</Text>
//             </View>
//           </View>
//         </View>
//       </LinearGradient>

//       <View style={styles.content}>
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>Account Settings</Text>
//           <ProfileOptionItem icon="user-edit" label="Edit Profile"
//           onPress={() => router.push('/EditProfileScreen')} />
//           <ProfileOptionItem icon="lock" label="Change Password" 
//           />
//           <ProfileOptionItem icon="shopping-bag" label="My History" 
//           onPress={() => router.push('/HistoryPage')}/>
//           <ProfileOptionItem icon="credit-card" label="Payment Settings" />
//         </View>

//         <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//           <LinearGradient
//             colors={['#FF6B6B', '#FF4757']}
//             style={styles.logoutGradient}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//           >
//             <Icon name="sign-out-alt" size={20} color={COLORS.white} />
//             <Text style={styles.logoutText}>Log Out</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//   },
//   header: {
//     paddingTop: 60,
//     paddingBottom: 30,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingGradient: {
//     padding: 20,
//     borderRadius: 10,
//   },
//   loadingText: {
//     color: COLORS.white,
//     fontSize: 16,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderWidth: 3,
//     borderColor: COLORS.white,
//   },
//   profileInfo: {
//     marginLeft: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: COLORS.white,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: COLORS.white,
//     opacity: 0.8,
//     marginTop: 4,
//   },
//   badge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.2)',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 15,
//     marginTop: 8,
//   },
//   badgeText: {
//     color: COLORS.white,
//     marginLeft: 5,
//     fontSize: 12,
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//     marginTop: -30,
//   },
//   card: {
//     backgroundColor: COLORS.white,
//     borderRadius: 20,
//     padding: 20,
//     shadowColor: COLORS.primary,
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 5,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: COLORS.text.primary,
//     marginBottom: 20,
//   },
//   option: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   optionIconContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: `${COLORS.primary}15`,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   optionText: {
//     flex: 1,
//     fontSize: 16,
//     color: COLORS.text.primary,
//   },
//   logoutButton: {
//     marginTop: 20,
//     borderRadius: 15,
//     overflow: 'hidden',
//   },
//   logoutGradient: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 15,
//   },
//   logoutText: {
//     color: COLORS.white,
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
// });

// export default ProfileScreen;





















import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  Alert, 
  Animated, 
  ScrollView,
  Dimensions,
  StatusBar,
  Easing
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BlurView } from 'expo-blur';
import LottieView from 'lottie-react-native';
import { SharedElement } from 'react-navigation-shared-element';

const { width } = Dimensions.get('window');

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

const ProfileScreen = () => {
  const router = useRouter();
  const [partnerData, setPartnerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  
  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  
  const baseURL = 'http://192.168.86.29:6000';

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    fetchPartnerData();
    
    // Start animations
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
    ]).start();

    // Pulse animation for the avatar
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Continuous rotation animation for loading indicator
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const fetchPartnerData = async () => {
    setLoading(true);
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const { id } = JSON.parse(user);
        const response = await axios.get(`${baseURL}/delivery-partner/${id}`);
        const { success, data } = response.data;
        if (success) {
          setPartnerData(data);
          // Delay to show loading animation
          setTimeout(() => setLoading(false), 1000);
        } else {
          Alert.alert('Error', 'Delivery partner not found.');
          setLoading(false);
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to fetch profile data.');
      console.error('API Fetch Error:', error);
      setLoading(false);
    }
  };



  const logAllAsyncStorageData = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys(); // Get all keys
        const entries = await AsyncStorage.multiGet(keys); // Retrieve all key-value pairs
        
        console.log('All AsyncStorage Data:', entries);
        
        // Optionally, format the output for better readability
        entries.forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
    } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
    }
};

logAllAsyncStorageData();


  const handleLogout = async () => {
    // Start fade out animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 30,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(async () => {
      await AsyncStorage.removeItem('user');
      Alert.alert('Logged out', 'You have been logged out successfully');
      router.push('/Login');
    });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <LinearGradient
          colors={[COLORS.gradient.start, COLORS.gradient.end]}
          style={styles.loadingGradientContainer}
        >
          <Animated.View 
            style={[
              styles.loadingIconContainer,
              {
                transform: [
                  {
                    rotate: rotateAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
              },
            ]}
          >
            <Icon name="spinner" size={40} color={COLORS.white} />
          </Animated.View>
          <Text style={styles.loadingText}>Loading your profile...</Text>
          <View style={styles.loadingBar}>
            <Animated.View 
              style={[
                styles.loadingProgress,
                {
                  width: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }

  const { first_name, last_name, profile_picture_url, primary_mobile, email, city, blood_group } = partnerData;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Account Settings</Text>
            <ProfileOptionItem 
              icon="user-edit" 
              label="Edit Profile"
              description="Update your personal information"
              onPress={() => router.push('/EditProfileScreen')} 
            />
            <ProfileOptionItem 
              icon="lock" 
              label="Change Password" 
              description="Secure your account"
            />
            <ProfileOptionItem 
              icon="shopping-bag" 
              label="My History" 
              description="View your past deliveries"
              onPress={() => router.push('/HistoryPage')}
            />
            <ProfileOptionItem 
              icon="credit-card" 
              label="Payment Settings" 
              description="Manage your payment methods"
            />
            <ProfileOptionItem 
              icon="bell" 
              label="Notifications" 
              description="Control your notification preferences"
            />
            <ProfileOptionItem 
              icon="shield-alt" 
              label="Privacy & Security" 
              description="Update your privacy settings"
            />
          </View>
        );
      case 'stats':
        return (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Your Statistics</Text>
            <View style={styles.statsContainer}>
              <StatItem value="98%" label="Delivery Success" icon="check-circle" color="#4CAF50" />
              <StatItem value="4.9" label="Rating" icon="star" color="#FFC107" />
              <StatItem value="127" label="Deliveries" icon="truck" color={COLORS.primary} />
              <StatItem value="30km" label="Today's Distance" icon="route" color="#2196F3" />
            </View>
          </View>
        );
      case 'help':
        return (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Help & Support</Text>
            <ProfileOptionItem 
              icon="question-circle" 
              label="FAQs" 
              description="Frequently asked questions"
            />
            <ProfileOptionItem 
              icon="headset" 
              label="Contact Support" 
              description="Get help from our team"
            />
            <ProfileOptionItem 
              icon="exclamation-circle" 
              label="Report an Issue" 
              description="Let us know about problems"
            />
            <ProfileOptionItem 
              icon="file-alt" 
              label="Terms & Conditions" 
              description="Read our terms of service"
            />
            <ProfileOptionItem 
              icon="shield-alt" 
              label="Privacy Policy" 
              description="Understand your privacy rights"
            />
          </View>
        );
      default:
        return null;
    }
  };

  const ProfileOptionItem = ({ icon, label, description, onPress }) => (
    <TouchableOpacity 
      style={styles.option}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.optionIconContainer}>
        <Icon name={icon} size={20} color={COLORS.primary} />
      </View>
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionText}>{label}</Text>
        <Text style={styles.optionDescription}>{description}</Text>
      </View>
      <View style={styles.optionArrow}>
        <Icon name="chevron-right" size={16} color={COLORS.text.secondary} />
      </View>
    </TouchableOpacity>
  );

  const StatItem = ({ value, label, icon, color }) => (
    <View style={styles.statItem}>
      <View style={[styles.statIconContainer, { backgroundColor: `${color}15` }]}>
        <Icon name={icon} size={20} color={color} />
      </View>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  const TabButton = ({ name, label, isActive, onPress }) => (
    <TouchableOpacity
      style={[styles.tabButton, isActive && styles.activeTabButton]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Icon name={name} size={18} color={isActive ? COLORS.white : COLORS.inactive} />
      <Text style={[styles.tabButtonText, isActive && styles.activeTabButtonText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Animated.View 
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [
            { translateY: slideAnim },
            { scale: scaleAnim },
          ],
        },
      ]}
    >
      <StatusBar backgroundColor={COLORS.gradient.start} barStyle="light-content" />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <LinearGradient
          colors={[COLORS.gradient.start, COLORS.gradient.end]}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.headerContent}>
            <View style={styles.profileSection}>
              <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                <SharedElement id={`profile.avatar`}>
                  <Image
                    style={styles.profileImage}
                    source={{ uri: `${baseURL}${profile_picture_url}` }}
                  />
                </SharedElement>
                <View style={styles.statusBadge} />
              </Animated.View>
              
              <View style={styles.profileInfo}>
                <Text style={styles.name}>{`${first_name} ${last_name}`}</Text>
                <Text style={styles.subtitle}>{email || primary_mobile}</Text>
                <View style={styles.badgeContainer}>
                  <View style={styles.badge}>
                    <Icon name="map-marker-alt" size={12} color={COLORS.white} />
                    <Text style={styles.badgeText}>{city}</Text>
                  </View>
                  {blood_group && (
                    <View style={[styles.badge, styles.bloodBadge]}>
                      <Icon name="tint" size={12} color={COLORS.white} />
                      <Text style={styles.badgeText}>{blood_group}</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
            
            <BlurView intensity={20} tint="light" style={styles.quickStats}>
              <View style={styles.statColumn}>
                <Text style={styles.statNumber}>03</Text>
                <Text style={styles.statTitle}>No Test</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statColumn}>
                <Text style={styles.statNumber}>10%</Text>
                <Text style={styles.statTitle}>Accuracy</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statColumn}>
                <Text style={styles.statNumber}>1</Text>
                <Text style={styles.statTitle}>Quizz</Text>
              </View>
            </BlurView>
          </View>
        </LinearGradient>

        <View style={styles.tabContainer}>
          <TabButton 
            name="user" 
            label="Profile" 
            isActive={activeTab === 'profile'} 
            onPress={() => setActiveTab('profile')}
          />
          <TabButton 
            name="chart-bar" 
            label="Stats" 
            isActive={activeTab === 'stats'} 
            onPress={() => setActiveTab('stats')}
          />
          <TabButton 
            name="question-circle" 
            label="Help" 
            isActive={activeTab === 'help'} 
            onPress={() => setActiveTab('help')}
          />
        </View>

        <View style={styles.content}>
          {renderTabContent()}

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.8}>
            <LinearGradient
              colors={['#FF6B6B', '#FF4757']}
              style={styles.logoutGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View style={styles.logoutContent}>
                <Icon name="sign-out-alt" size={20} color={COLORS.white} />
                <Text style={styles.logoutText}>Log Out</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      <View style={styles.floatingActionButton}>
        <LinearGradient
          colors={[COLORS.secondary, COLORS.primary]}
          style={styles.fabGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            style={styles.fabButton}
            onPress={() => Alert.alert('New Delivery', 'Start a new delivery?')}
          >
            <Icon name="plus" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  headerContent: {
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  loadingGradientContainer: {
    width: width * 0.8,
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  loadingIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loadingText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  loadingBar: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  loadingProgress: {
    height: '100%',
    backgroundColor: COLORS.white,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  statusBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    borderWidth: 3,
    borderColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  profileInfo: {
    marginLeft: 20,
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.8,
    marginTop: 4,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 10,
  },
  bloodBadge: {
    backgroundColor: 'rgba(255,99,99,0.3)',
  },
  badgeText: {
    color: COLORS.white,
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '500',
  },
  quickStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    borderRadius: 20,
    overflow: 'hidden',
    paddingVertical: 15,
  },
  statColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statDivider: {
    width: 1,
    height: '60%',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  statTitle: {
    fontSize: 12,
    color: COLORS.white,
    opacity: 0.8,
    marginTop: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -20,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tabButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: COLORS.text.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  activeTabButton: {
    backgroundColor: COLORS.primary,
  },
  tabButtonText: {
    color: COLORS.text.primary,
    marginLeft: 6,
    fontWeight: '500',
  },
  activeTabButtonText: {
    color: COLORS.white,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: `${COLORS.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.text.primary,
  },
  optionDescription: {
    fontSize: 12,
    color: COLORS.text.secondary,
    marginTop: 2,
  },
  optionArrow: {
    paddingHorizontal: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
  statItem: {
    width: '50%',
    paddingHorizontal: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  statIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.text.secondary,
    marginTop: 2,
  },
  logoutButton: {
    marginTop: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  logoutGradient: {
    borderRadius: 15,
  },
  logoutContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  logoutText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  floatingActionButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    zIndex: 999,
  },
  fabGradient: {
    borderRadius: 30,
    padding: 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;