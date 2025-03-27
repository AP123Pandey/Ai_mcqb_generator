// // import { View, Text } from 'react-native'
// // import Mybutton from '@/components/Mybutton';
// // import { useRouter } from 'expo-router';
// // import React from 'react'

// // const Login = () => {
// //     const router = useRouter();
// // const onContinue = ()=>{
// //      router.navigate("/Login");
// // };
// //   return (
// //     <View>
// //       <Text>Login</Text>
// //       <Mybutton title={"Resister"} onPress={onContinue}></Mybutton>
// //     </View>
// //   )
// // }

// // export default Login;

// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
// import { useRouter } from 'expo-router';

// const Login = () => {
//   const router = useRouter();
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const buttonScale = new Animated.Value(1);

//   const handleLogin = () => {
//     // Navigate to the dashboard or handle login logic
//     router.push('/DeliveryManDashboard');
//   };

//   const handlePressIn = () => {
//     Animated.timing(buttonScale, {
//       toValue: 0.9,
//       duration: 200,
//       easing: Easing.inOut(Easing.ease),
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = () => {
//     Animated.timing(buttonScale, {
//       toValue: 1,
//       duration: 200,
//       easing: Easing.inOut(Easing.ease),
//       useNativeDriver: true,
//     }).start(() => handleLogin());
//   };

//   const animatedStyle = { transform: [{ scale: buttonScale }] };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>DeliveryMan Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your mobile number"
//         placeholderTextColor="#ccc"
//         keyboardType="phone-pad"
//         value={mobile}
//         onChangeText={(text) => setMobile(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         placeholderTextColor="#ccc"
//         secureTextEntry
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <Animated.View style={[styles.buttonContainer, animatedStyle]}>
//         <TouchableOpacity
//           onPressIn={handlePressIn}
//           onPressOut={handlePressOut}
//           activeOpacity={0.8}
//         >
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//       </Animated.View>
//       <Text
//         style={styles.footer}
//         onPress={() => router.push('/Singup')}
//       >
//         Register as a new user
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   logo: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginBottom: 20,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   buttonContainer: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#ffcc00',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   footer: {
//     marginTop: 20,
//     color: '#555',
//     textDecorationLine: 'underline',
//     fontSize: 14,
//   },
// });

// export default Login;






// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { useRouter } from 'expo-router';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Login = () => {
//   const router = useRouter();
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);

//   const handleSendOtp = async () => {
//     try {
//       const response = await axios.post('http://192.168.38.29:5000/send-otp', { mobile });
//       Alert.alert('Success', response.data.message);
//       setIsOtpSent(true);
//     } catch (error) {
//       Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   const handleVerifyOtp = async () => {
//     try {
//       const response = await axios.post('http://192.168.38.29:5000/verify-otp', { mobile, otp });
//       Alert.alert('Success', 'Login successful');


//       // Save user data in AsyncStorage
//     await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    
//       // Navigate to dashboard with user details
//       router.push({
//         pathname: '/DeliveryManDashboard',
//         params: { user: JSON.stringify(response.data.user) },
//       });
//     } catch (error) {
//       Alert.alert('Error', error.response?.data?.message || 'Invalid OTP');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>DeliveryMan Login</Text>
//       {!isOtpSent ? (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your mobile number"
//             placeholderTextColor="#ccc"
//             keyboardType="phone-pad"
//             value={mobile}
//             onChangeText={(text) => setMobile(text)}
//           />
//           <TouchableOpacity style={styles.buttonContainer} onPress={handleSendOtp}>
//             <Text style={styles.buttonText}>Send OTP</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter OTP"
//             placeholderTextColor="#ccc"
//             keyboardType="number-pad"
//             value={otp}
//             onChangeText={(text) => setOtp(text)}
//           />
//           <TouchableOpacity style={styles.buttonContainer} onPress={handleVerifyOtp}>
//             <Text style={styles.buttonText}>Verify OTP</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   logo: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginBottom: 20,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   buttonContainer: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#ffcc00',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   footer: {
//     marginTop: 20,
//     color: '#555',
//     textDecorationLine: 'underline',
//     fontSize: 14,
//   },
// });


// export default Login;



// changea at 18-01-25  00:59


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { useRouter } from 'expo-router';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Login = () => {
//   const router = useRouter();
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);

//   // Check if user is already logged in by checking AsyncStorage
//   useEffect(() => {
//     const checkUserLogin = async () => {
//       const user = await AsyncStorage.getItem('user');
//       if (user) {
//         router.push('/DeliveryManDashboard'); // Navigate to dashboard if user is already logged in
//       }
//     };
//     checkUserLogin();
//   }, []);

//   const handleSendOtp = async () => {
//     try {
//       const response = await axios.post('http://192.168.38.29:5000/send-otp', { mobile });
//       Alert.alert('Success', response.data.message);
//       setIsOtpSent(true);
//     } catch (error) {
//       Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   const handleVerifyOtp = async () => {
//     try {
//       const response = await axios.post('http://192.168.38.29:5000/verify-otp', { mobile, otp });
//       Alert.alert('Success', 'Login successful');

//       // Save user data in AsyncStorage
//       await AsyncStorage.setItem('user', JSON.stringify(response.data.user));

//       // Navigate to dashboard with user details
//       router.push({
//         pathname: '/DeliveryManDashboard',
//         params: { user: JSON.stringify(response.data.user) },
//       });
//     } catch (error) {
//       Alert.alert('Error', error.response?.data?.message || 'Invalid OTP');
//     }
//   };

  

//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>DeliveryMan Login</Text>
//       {!isOtpSent ? (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your mobile number"
//             placeholderTextColor="#ccc"
//             keyboardType="phone-pad"
//             value={mobile}
//             onChangeText={(text) => setMobile(text)}
//           />
//           <TouchableOpacity style={styles.buttonContainer} onPress={handleSendOtp}>
//             <Text style={styles.buttonText}>Send OTP</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter OTP"
//             placeholderTextColor="#ccc"
//             keyboardType="number-pad"
//             value={otp}
//             onChangeText={(text) => setOtp(text)}
//           />
//           <TouchableOpacity style={styles.buttonContainer} onPress={handleVerifyOtp}>
//             <Text style={styles.buttonText}>Verify OTP</Text>
//           </TouchableOpacity>
//         </>
//       )}


        
          
//       <Text
//         style={styles.footer}
//         onPress={() => router.push('/Singup')}
//       >
//         Register as a new user
//       </Text>
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   logo: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginBottom: 20,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   buttonContainer: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#ffcc00',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   footer: {
//         marginTop: 20,
//         color: '#555',
//         textDecorationLine: 'underline',
//         fontSize: 14,
//       },
// });

// export default Login;




// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Animated, Image } from 'react-native';
// import { useRouter } from 'expo-router';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Login = () => {
//   const router = useRouter();
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const fadeAnim = new Animated.Value(0);

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();

//     const checkUserLogin = async () => {
//       const user = await AsyncStorage.getItem('user');
//       if (user) {
//         router.push('/DeliveryManDashboard');
//       }
//     };
//     checkUserLogin();
//   }, []);

//   const handleSendOtp = async () => {
//     try {
//       const response = await axios.post('http://192.168.38.29:5000/send-otp', { mobile });
//       Alert.alert('Success', response.data.message);
//       setIsOtpSent(true);
//     } catch (error) {
//       Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   const handleVerifyOtp = async () => {
//     try {
//       const response = await axios.post('http://192.168.38.29:5000/verify-otp', { mobile, otp });
//       Alert.alert('Success', 'Login successful');
//       await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
//       router.push('/DeliveryManDashboard');
//     } catch (error) {
//       Alert.alert('Error', error.response?.data?.message || 'Invalid OTP');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
//         <Image
//           source={require('../assets/images/img1.jpg')}
//           style={styles.image}
//         />
//         <Text style={styles.title}>Be a EatFit Partner</Text>
//         <Text style={styles.subtitle}>Get a stable monthly income</Text>

//         {!isOtpSent ? (
//           <View style={styles.formContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Mobile Number"
//               placeholderTextColor="#F9F871"
//               keyboardType="phone-pad"
//               value={mobile}
//               onChangeText={setMobile}
//             />
//             <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
//               <Text style={styles.buttonText}>Send OTP</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <View style={styles.formContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter 6-digit OTP"
//               placeholderTextColor="#F9F871"
//               keyboardType="number-pad"
//               value={otp}
//               onChangeText={setOtp}
//               maxLength={6}
//             />
//             <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
//               <Text style={styles.buttonText}>Verify & Login</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFE6CC',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   card: {
//     width: '100%',
//     maxWidth: 400,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 20,
//     padding: 20,
//     alignItems: 'center',
//     elevation: 5,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#FF6F00',
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#FFA726',
//     marginBottom: 24,
//     textAlign: 'center',
//   },
//   formContainer: {
//     width: '100%',
//     marginBottom: 16,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#FFCC80',
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     fontSize: 16,
//     color: '#FFFFFF',
//     marginBottom: 16,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#FF6F00',
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default Login;



import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Animated, Image } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // const checkUserLogin = async () => {
    //   const user = await AsyncStorage.getItem('user');
      
    //   if (user) {
    //     router.push('/LowerNavbar');
    //   }
    // };
    // checkUserLogin();
    
    const checkUserLogin = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        const parsedUser = storedUser ? JSON.parse(storedUser) : null;
        
        const role = await AsyncStorage.getItem('role');
        
        if (storedUser && parsedUser?.role) {
          switch (parseInt(parsedUser?.role)) {
            case 1:
              router.push('/StudentDash/SLowerNavbar');
              break;
            case 2:
              router.push('/TeacherDash/TLowerNavbar');
              break;
            case 3:
              router.push('/ParentDash/PLowerNavbar');
              break;
            
          }
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };
    checkUserLogin();
  }, []);

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://192.168.86.29:6000/send-otp', { mobile });
      Alert.alert('Success', response.data.message);
      setIsOtpSent(true);
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://192.168.86.29:6000/verify-otp', { mobile, otp });
      Alert.alert('Success', 'Login successful');
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      router.push('/LowerNavbar');
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Invalid OTP');
    }
  };

  return (
    <View >
      <Animated.View style={styles.loginForm}>
        <Image
          source={require('../assets/images/img1.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>Be a EatFit Partner</Text>
        <Text style={styles.subtitle}>Get a stable monthly income</Text>

        {!isOtpSent ? (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile Number"
              placeholderTextColor="black"
              keyboardType="phone-pad"
              value={mobile}
              onChangeText={setMobile}
            />
            <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter 6-digit OTP"
              placeholderTextColor="black"
              keyboardType="number-pad"
              value={otp}
              onChangeText={setOtp}
              maxLength={6}
            />
            <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
              <Text style={styles.buttonText}>Verify & Login</Text>
            </TouchableOpacity>
          </View>
          
        )}
        <Text
        style={styles.footer}
        onPress={() => router.push('/Singup')}
      >
        Register as a new user
      </Text>
      </Animated.View>

            
          
      
    </View>
  );
};

const styles = StyleSheet.create({
  
  loginForm: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    height:'100%',
  },
  image: {
    width: 280,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'orange',
    marginBottom: 30,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFCCBC',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF7043',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
    footer: {
      
        color: '#555',
        textDecorationLine: 'underline',
        fontSize: 14,
      },
});

export default Login;
