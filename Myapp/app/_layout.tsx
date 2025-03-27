

// // change at 07-03-25  at 23:06

// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect, useState } from 'react';
// import 'react-native-reanimated';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { View, StyleSheet } from 'react-native';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

//   useEffect(() => {
//     const checkUserStatus = async () => {
//       try {
//         const storedUser = await AsyncStorage.getItem('user');
//         setIsLoggedIn(!!storedUser);
//       } catch (error) {
//         console.error('Error checking user status', error);
//         setIsLoggedIn(false);
//       }
//     };
//     checkUserStatus();
//   }, []);

//   useEffect(() => {
//     if (loaded && isLoggedIn !== null) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded, isLoggedIn]);

//   if (!loaded) {
//     return null; // Show nothing while fonts are loading
//   }

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         <Stack screenOptions={{ headerShown: false }}>
//           {isLoggedIn ? (
//             <>
//               <Stack.Screen name="LowerNavbar" />
//               <Stack.Screen name="userdash" />
//               <Stack.Screen name="Order" />
//               <Stack.Screen name="Order2" />
//               <Stack.Screen name="Orderdetails" />
//               <Stack.Screen name="orderdatails2" />
//               <Stack.Screen name="EditProfileScreen" />
//               <Stack.Screen name="DeliveryManDashboard" />
//               <Stack.Screen name="Fordash" />
//               <Stack.Screen name="MathsScreen" />
//               <Stack.Screen name="Mathscreen/ASVABMathScreen" />
//               <Stack.Screen name="Mathscreen/FunctionIntroScreen" />
//               <Stack.Screen name="Mathscreen/Flashcards" />
//               <Stack.Screen name="Mathscreen/Learning" />
//               <Stack.Screen name="Mathscreen/MatchingGame" />
//               <Stack.Screen name="Mathscreen/TestScreen" />
//               <Stack.Screen name="MCQTestScreen" />
//               <Stack.Screen name="MCQLoadingScreen" />
//               <Stack.Screen name="TestScreenAptitude" />
//               <Stack.Screen name="HistoryPage" />
//               <Stack.Screen name="CheatingScreen" />
//               <Stack.Screen name="ParentDash\PLowerNavbar" />
//               <Stack.Screen name="StudentDash\SLowerNavbar" />
//               <Stack.Screen name="TeacherDash\TLowerNavbar" />

//             </>
//           ) : (
//             <>
//               <Stack.Screen name="index" />
//               <Stack.Screen name="Login" />
//               <Stack.Screen name="Signup" />
//             </>
//           )}
//         </Stack>
//         <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
//       </ThemeProvider>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });



// chnage today 14-03-25

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        const parsedUser = storedUser ? JSON.parse(storedUser) : null;
        console.log('Stored User:', parsedUser);
        console.log('Extracted Role:', parsedUser?.role?.trim());
  
        if (parsedUser) {
          setIsLoggedIn(true);
          setUserRole(parsedUser.role?.toString().trim() || null);  // Ensuring clean string role
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking user status:', error);
        setIsLoggedIn(false);
      }
    };
    checkUserStatus();
  }, []);

  useEffect(() => {
    if (loaded && isLoggedIn !== null) {
      SplashScreen.hideAsync();
    }
  }, [loaded, isLoggedIn]);

  if (!loaded) {
    return null; // Show nothing while fonts are loading
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          {isLoggedIn ? (
            userRole === '1' ? (
              <>
                <Stack.Screen name="StudentDash\SLowerNavbar" />
                {/* <Stack.Screen name="LowerNavbar" /> */}
                <Stack.Screen name="userdash" />
                <Stack.Screen name="Order" />
                <Stack.Screen name="Order2" />
                <Stack.Screen name="Orderdetails" />
                <Stack.Screen name="orderdatails2" />
                <Stack.Screen name="EditProfileScreen" />
                <Stack.Screen name="DeliveryManDashboard" />
                <Stack.Screen name="Fordash" />
                <Stack.Screen name="MathsScreen" />
                <Stack.Screen name="Mathscreen/ASVABMathScreen" />
                <Stack.Screen name="Mathscreen/FunctionIntroScreen" />
                <Stack.Screen name="Mathscreen/Flashcards" />
                <Stack.Screen name="Mathscreen/Learning" />
                <Stack.Screen name="Mathscreen/MatchingGame" />
                <Stack.Screen name="Mathscreen/TestScreen" />
                <Stack.Screen name="MCQTestScreen" />
                <Stack.Screen name="MCQLoadingScreen" />
                <Stack.Screen name="TestScreenAptitude" />
                <Stack.Screen name="HistoryPage" />
                <Stack.Screen name="CheatingScreen" />
              </>
            ) : userRole === '2' ? (
              <>
              <Stack.Screen name="TeacherDash/TLowerNavbar" />
              <Stack.Screen name="userdash" />
              <Stack.Screen name="TeacherDash/TDeliveryManDashboard" />
              </>
            ) : userRole === '3' ? (
              <Stack.Screen name="ParentDash/PLowerNavbar" />
            ) : null
          ) : (
            <>
              <Stack.Screen name="index" />
              <Stack.Screen name="Login" />
              <Stack.Screen name="Signup" />
            </>
          )}
        </Stack>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
