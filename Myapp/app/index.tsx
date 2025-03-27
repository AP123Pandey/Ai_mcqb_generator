// import Mybutton from '@/components/Mybutton';
// import { useRouter } from 'expo-router';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';


// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // import LowerNavbar from '@/components/LowerNavbar';

// const Home = () =>{
// const router = useRouter();
// const onContinue = ()=>{
//      router.navigate("/Login");
// };


// const checkUserLogin = async () => {
//   const user = await AsyncStorage.getItem('user');
//   if (user) {
//     router.push('/LowerNavbar');
//   }
// };
// checkUserLogin();


//     return (
//       <>
// <View style={styles.container}>
//     <Mybutton title={"Continue"} onPress={onContinue}></Mybutton>

// </View>
// {/* <View><LowerNavbar></LowerNavbar></View> */}
// </>
//     );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#4CAF50',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     backgroundColor: '#fff',
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#4CAF50',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });




// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// // import { useRouter } from 'expo-router';
// // import axios from 'axios';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const Login = () => {
// //   const router = useRouter();
// //   const [mobile, setMobile] = useState('');
// //   const [otp, setOtp] = useState('');
// //   const [isOtpSent, setIsOtpSent] = useState(false);

// //   // Check if user is already logged in by checking AsyncStorage
// //   useEffect(() => {
// //     const checkUserLogin = async () => {
// //       const user = await AsyncStorage.getItem('user');
// //       if (user) {
// //         router.push('/DeliveryManDashboard'); // Navigate to dashboard if user is already logged in
// //       }
// //     };
// //     checkUserLogin();
// //   }, []);

// //   const handleSendOtp = async () => {
// //     try {
// //       const response = await axios.post('http://192.168.38.29:5000/send-otp', { mobile });
// //       Alert.alert('Success', response.data.message);
// //       setIsOtpSent(true);
// //     } catch (error) {
// //       Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
// //     }
// //   };

// //   const handleVerifyOtp = async () => {
// //     try {
// //       const response = await axios.post('http://192.168.38.29:5000/verify-otp', { mobile, otp });
// //       Alert.alert('Success', 'Login successful');

// //       // Save user data in AsyncStorage
// //       await AsyncStorage.setItem('user', JSON.stringify(response.data.user));

// //       // Navigate to dashboard with user details
// //       router.push({
// //         pathname: '/DeliveryManDashboard',
// //         params: { user: JSON.stringify(response.data.user) },
// //       });
// //     } catch (error) {
// //       Alert.alert('Error', error.response?.data?.message || 'Invalid OTP');
// //     }
// //   };

// //   const handleLogout = async () => {
// //     await AsyncStorage.removeItem('user'); // Remove user data from AsyncStorage
// //     Alert.alert('Logged out', 'You have been logged out successfully');
// //     router.push('/Login'); // Navigate to the login screen
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.logo}>DeliveryMan Login</Text>
// //       {!isOtpSent ? (
// //         <>
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Enter your mobile number"
// //             placeholderTextColor="#ccc"
// //             keyboardType="phone-pad"
// //             value={mobile}
// //             onChangeText={(text) => setMobile(text)}
// //           />
// //           <TouchableOpacity style={styles.buttonContainer} onPress={handleSendOtp}>
// //             <Text style={styles.buttonText}>Send OTP</Text>
// //           </TouchableOpacity>
// //         </>
// //       ) : (
// //         <>
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Enter OTP"
// //             placeholderTextColor="#ccc"
// //             keyboardType="number-pad"
// //             value={otp}
// //             onChangeText={(text) => setOtp(text)}
// //           />
// //           <TouchableOpacity style={styles.buttonContainer} onPress={handleVerifyOtp}>
// //             <Text style={styles.buttonText}>Verify OTP</Text>
// //           </TouchableOpacity>
// //         </>
// //       )}

// //       {/* Logout Button */}
// //       <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
// //         <Text style={styles.buttonText}>Logout</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     padding: 20,
// //   },
// //   logo: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     marginBottom: 40,
// //     color: '#333',
// //   },
// //   input: {
// //     width: '100%',
// //     height: 50,
// //     borderColor: '#ddd',
// //     borderWidth: 1,
// //     borderRadius: 10,
// //     marginBottom: 20,
// //     paddingHorizontal: 15,
// //     backgroundColor: '#fff',
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowOffset: { width: 0, height: 3 },
// //   },
// //   buttonContainer: {
// //     width: '100%',
// //     height: 50,
// //     backgroundColor: '#ffcc00',
// //     borderRadius: 10,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOpacity: 0.2,
// //     shadowOffset: { width: 0, height: 3 },
// //   },
// //   buttonText: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#333',
// //   },
// // });

// // export default Login;




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
      // router.push('/LowerNavbar');
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
































































































// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   View, 
//   Text, 
//   TextInput, 
//   StyleSheet, 
//   TouchableOpacity, 
//   Alert, 
//   Animated, 
//   Image,
//   Dimensions,
//   StatusBar,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView
// } from 'react-native';
// import { useRouter } from 'expo-router';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';

// const COLORS = { 
//   primary: '#6C63FF', 
//   secondary: '#FF63A5', 
//   gradient: { 
//     start: '#8E2DE2', 
//     end: '#4A00E0'
//   }, 
//   background: '#F8F9FF', 
//   white: '#FFFFFF', 
//   text: { 
//     primary: '#2D3436', 
//     secondary: '#636E72'
//   }, 
//   inactive: '#B2BEC3'
// };

// const { width, height } = Dimensions.get('window');

// const Login = () => {
//   const router = useRouter();
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [countdown, setCountdown] = useState(0);
//   const [focusedInput, setFocusedInput] = useState(null);
  
//   // Animation refs
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const slideAnim = useRef(new Animated.Value(50)).current;
//   const otpRefs = useRef([...Array(6)].map(() => React.createRef()));

//   useEffect(() => {
//     // Start entry animations
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 800,
//         useNativeDriver: true,
//       })
//     ]).start();

//     // Check if user is already logged in
//     // const checkUserLogin = async () => {
//     //   try {
//     //     const user = await AsyncStorage.getItem('user');
//     //     if (user) {
//     //       router.push('/LowerNavbar');
//     //     }
//     //   } catch (error) {
//     //     console.error('Error checking login status:', error);
//     //   }
//     // };
//     // checkUserLogin();

 
//       const checkUserLogin = async () => {
//         try {
//           const user = await AsyncStorage.getItem('user');
//           const role = await AsyncStorage.getItem('role');
          
//           if (user && role) {
//             switch (parseInt(role, 10)) {
//               case 1:
//                 router.push('/StudentDash/SLowerNavbar');
//                 break;
//               case 2:
//                 router.push('/TeacherDash/TLowerNavbar');
//                 break;
//               case 3:
//                 router.push('/ParentDash/PLowerNavbar');
//                 break;
//               default:
//                 router.push('/LowerNavbar');
//             }
//           }
//         } catch (error) {
//           console.error('Error checking login status:', error);
//         }
//       };
//       checkUserLogin();
 

//   }, []);

  

//   // Countdown timer for OTP resend
//   useEffect(() => {
//     let timer;
//     if (countdown > 0) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown]);

//   const handleSendOtp = async () => {
//     if (!mobile || mobile.length < 10) {
//       Alert.alert('Error', 'Please enter a valid mobile number');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await axios.post('http://192.168.86.29:6000/send-otp', { mobile });
//       setIsOtpSent(true);
//       setCountdown(30); // Start 30 second countdown for resend
      
//       // Animation for transitioning to OTP screen
//       Animated.sequence([
//         Animated.parallel([
//           Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
//           Animated.timing(slideAnim, { toValue: -30, duration: 300, useNativeDriver: true })
//         ]),
//         Animated.parallel([
//           Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
//           Animated.timing(slideAnim, { toValue: 0, duration: 300, useNativeDriver: true })
//         ])
//       ]).start();
      
//       // Focus on first OTP input
//       setTimeout(() => {
//         if (otpRefs.current[0]?.current) {
//           otpRefs.current[0].current.focus();
//         }
//       }, 600);
//     } catch (error) {
//       Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const otpString = otp.join('');
//     if (otpString.length !== 6) {
//       Alert.alert('Error', 'Please enter a valid 6-digit OTP');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await axios.post('http://192.168.86.29:6000/verify-otp', { 
//         mobile, 
//         otp: otpString 
//       });
      
//       await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      
//       // Success animation before navigation
//       Animated.sequence([
//         Animated.spring(fadeAnim, { 
//           toValue: 0.8, 
//           friction: 3,
//           tension: 40,
//           useNativeDriver: true 
//         }),
//         Animated.timing(fadeAnim, { 
//           toValue: 1, 
//           duration: 200,
//           useNativeDriver: true 
//         })
//       ]).start(() => {
//         router.push('/LowerNavbar');
//       });
//     } catch (error) {
//       Alert.alert('Error', error.response?.data?.message || 'Invalid OTP');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (text, index) => {
//     const newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);
    
//     // Auto-focus to next input when a digit is entered
//     if (text && index < 5) {
//       otpRefs.current[index + 1].current.focus();
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     // Handle backspace - move to previous input when current is empty
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpRefs.current[index - 1].current.focus();
//     }
//   };

//   const handleInputFocus = (index) => {
//     setFocusedInput(index);
//   };

//   const handleInputBlur = () => {
//     setFocusedInput(null);
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
//       <LinearGradient
//         colors={[COLORS.gradient.start, COLORS.gradient.end]}
//         style={styles.gradientHeader}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//       >
//         <Animated.View 
//           style={[
//             styles.headerContent,
//             { opacity: fadeAnim }
//           ]}
//         >
//           <Text style={styles.appName}>MCQB Generator</Text>
//           <Text style={styles.appTagline}>Create questions. Generate knowledge.</Text>
//         </Animated.View>
//       </LinearGradient>

//       <ScrollView 
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <Animated.View 
//           style={[
//             styles.loginCard,
//             {
//               opacity: fadeAnim,
//               transform: [{ translateY: slideAnim }]
//             }
//           ]}
//         >
//           <Image
//             source={require('../assets/images/img1.jpg')}
//             style={styles.image}
//           />
//           <Text style={styles.title}>Be a MCQB Partner</Text>
//           <Text style={styles.subtitle}>Transform learning with intelligent questions</Text>

//           {!isOtpSent ? (
//             <View style={styles.formContainer}>
//               <View style={styles.inputWrapper}>
//                 <Ionicons 
//                   name="call-outline" 
//                   size={20} 
//                   color={focusedInput === 'mobile' ? COLORS.primary : COLORS.inactive} 
//                   style={styles.inputIcon}
//                 />
//                 <TextInput
//                   style={[
//                     styles.input, 
//                     focusedInput === 'mobile' && styles.inputFocused
//                   ]}
//                   placeholder="Enter Mobile Number"
//                   placeholderTextColor={COLORS.inactive}
//                   keyboardType="phone-pad"
//                   value={mobile}
//                   onChangeText={setMobile}
//                   maxLength={10}
//                   onFocus={() => handleInputFocus('mobile')}
//                   onBlur={handleInputBlur}
//                 />
//               </View>

//               <TouchableOpacity 
//                 style={[styles.button, isLoading && styles.buttonDisabled]}
//                 onPress={handleSendOtp}
//                 disabled={isLoading}
//               >
//                 <LinearGradient
//                   colors={[COLORS.primary, COLORS.secondary]}
//                   style={styles.gradientButton}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                 >
//                   {isLoading ? (
//                     <Text style={styles.buttonText}>Sending...</Text>
//                   ) : (
//                     <Text style={styles.buttonText}>Send OTP</Text>
//                   )}
//                 </LinearGradient>
//               </TouchableOpacity>
//             </View>
//           ) : (
//             <View style={styles.formContainer}>
//               <Text style={styles.otpInfoText}>
//                 We've sent a verification code to {mobile}
//               </Text>
              
//               <View style={styles.otpContainer}>
//                 {otp.map((digit, index) => (
//                   <TextInput
//                     key={index}
//                     ref={otpRefs.current[index]}
//                     style={[
//                       styles.otpInput,
//                       focusedInput === index && styles.otpInputFocused,
//                       digit && styles.otpInputFilled
//                     ]}
//                     keyboardType="number-pad"
//                     maxLength={1}
//                     value={digit}
//                     onChangeText={(text) => handleOtpChange(text, index)}
//                     onKeyPress={(e) => handleKeyPress(e, index)}
//                     onFocus={() => handleInputFocus(index)}
//                     onBlur={handleInputBlur}
//                   />
//                 ))}
//               </View>
              
//               <TouchableOpacity 
//                 style={[styles.button, isLoading && styles.buttonDisabled]}
//                 onPress={handleVerifyOtp}
//                 disabled={isLoading}
//               >
//                 <LinearGradient
//                   colors={[COLORS.primary, COLORS.secondary]}
//                   style={styles.gradientButton}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                 >
//                   {isLoading ? (
//                     <Text style={styles.buttonText}>Verifying...</Text>
//                   ) : (
//                     <Text style={styles.buttonText}>Verify & Login</Text>
//                   )}
//                 </LinearGradient>
//               </TouchableOpacity>
              
//               <View style={styles.resendContainer}>
//                 {countdown > 0 ? (
//                   <Text style={styles.countdownText}>
//                     Resend code in {countdown}s
//                   </Text>
//                 ) : (
//                   <TouchableOpacity onPress={handleSendOtp} disabled={isLoading}>
//                     <Text style={styles.resendText}>Resend OTP</Text>
//                   </TouchableOpacity>
//                 )}
                
//                 <TouchableOpacity onPress={() => setIsOtpSent(false)}>
//                   <Text style={styles.changeNumberText}>Change number</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.divider}>
//             <View style={styles.dividerLine} />
//             <Text style={styles.dividerText}>OR</Text>
//             <View style={styles.dividerLine} />
//           </View>
          
//           <TouchableOpacity 
//             style={styles.registerButton}
//             onPress={() => router.push('/Singup')}
//           >
//             <Text style={styles.registerText}>Register as a new user</Text>
//             <Ionicons name="arrow-forward" size={16} color={COLORS.primary} />
//           </TouchableOpacity>
//         </Animated.View>
//       </ScrollView>
      
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>
//           By continuing, you agree to our Terms of Service & Privacy Policy
//         </Text>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//   },
//   gradientHeader: {
//     height: height * 0.15,
//     width: '100%',
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//   },
//   headerContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   appName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: COLORS.white,
//     letterSpacing: 1,
//   },
//   appTagline: {
//     fontSize: 14,
//     color: COLORS.white,
//     opacity: 0.9,
//     marginTop: 5,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     alignItems: 'center',
//     paddingBottom: 30,
//   },
//   loginCard: {
//     width: width * 0.9,
//     maxWidth: 400,
//     backgroundColor: COLORS.white,
//     borderRadius: 20,
//     padding: 25,
//     alignItems: 'center',
//     elevation: 8,
//     shadowColor: COLORS.primary,
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 15,
//     marginTop: -height * 0.03,
//     marginBottom: 20,
//   },
//   image: {
//     width: width * 0.5,
//     height: height * 0.2,
//     resizeMode: 'contain',
//     marginBottom: 15,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: COLORS.text.primary,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: COLORS.secondary,
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   formContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     height: 55,
//     backgroundColor: COLORS.background,
//     borderRadius: 12,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: 'transparent',
//   },
//   inputIcon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: '100%',
//     fontSize: 16,
//     color: COLORS.text.primary,
//   },
//   inputFocused: {
//     color: COLORS.primary,
//   },
//   otpInfoText: {
//     fontSize: 14,
//     color: COLORS.text.secondary,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 25,
//   },
//   otpInput: {
//     width: 45,
//     height: 55,
//     borderRadius: 10,
//     backgroundColor: COLORS.background,
//     fontSize: 18,
//     textAlign: 'center',
//     color: COLORS.text.primary,
//     borderWidth: 1,
//     borderColor: COLORS.inactive,
//   },
//   otpInputFocused: {
//     borderColor: COLORS.primary,
//     backgroundColor: `${COLORS.primary}10`,
//   },
//   otpInputFilled: {
//     borderColor: COLORS.primary,
//     backgroundColor: `${COLORS.primary}10`,
//   },
//   button: {
//     width: '100%',
//     height: 55,
//     borderRadius: 12,
//     overflow: 'hidden',
//     marginBottom: 15,
//   },
//   buttonDisabled: {
//     opacity: 0.7,
//   },
//   gradientButton: {
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: COLORS.white,
//     fontSize: 16,
//     fontWeight: '600',
//     letterSpacing: 0.5,
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   countdownText: {
//     fontSize: 14,
//     color: COLORS.text.secondary,
//   },
//   resendText: {
//     fontSize: 14,
//     color: COLORS.primary,
//     fontWeight: '500',
//   },
//   changeNumberText: {
//     fontSize: 14,
//     color: COLORS.secondary,
//     fontWeight: '500',
//   },
//   divider: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     marginVertical: 20,
//   },
//   dividerLine: {
//     flex: 1,
//     height: 1,
//     backgroundColor: COLORS.inactive,
//   },
//   dividerText: {
//     fontSize: 14,
//     color: COLORS.text.secondary,
//     marginHorizontal: 10,
//   },
//   registerButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 10,
//   },
//   registerText: {
//     fontSize: 15,
//     color: COLORS.primary,
//     fontWeight: '500',
//     marginRight: 5,
//   },
//   footer: {
//     paddingVertical: 15,
//     alignItems: 'center',
//   },
//   footerText: {
//     fontSize: 12,
//     color: COLORS.text.secondary,
//     textAlign: 'center',
//   }
// });

// export default Login;