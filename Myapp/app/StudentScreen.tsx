// import React, { useState, useEffect } from "react";
// import { View, Button, Text } from "react-native";
// import axios from "axios";
// import Toast from "react-native-toast-message";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const StudentScreen = () => {
//     const [attendanceActive, setAttendanceActive] = useState(false);

//     useEffect(() => {
       
//         const checkAttendanceStatus = async () => {
//             try {
               
//                 const response = await axios.get("http://192.168.86.29:6000/attendance-status");
//                 setAttendanceActive(response.data.attendanceActive);
//             } catch (error) {
//                 console.error("Error fetching attendance status");
//             }
//         };

//         checkAttendanceStatus();
//         const interval = setInterval(checkAttendanceStatus, 5000); // Check every 5 seconds
//         return () => clearInterval(interval);
//     }, []);

//     const markAttendance = async () => {
//         try {
//             const storedUser = await AsyncStorage.getItem('user');
//             const parsedUser = storedUser ? JSON.parse(storedUser) : null;
            
//             const userId = parsedUser?.id;  // Extracting user id
//             const response = await axios.post("http://192.168.86.29:6000/mark-attendance", { partner_id: userId });
//             Toast.show({ type: "success", text1: response.data.message });
//         } catch (error) {
//             Toast.show({ type: "error", text1: "Error marking attendance" });
//         }
//     };

//     return (
//         <View>
//             {attendanceActive ? (
//                 <Button title="Mark Attendance" onPress={markAttendance} />
//             ) : (
//                 <Text>Attendance is not active</Text>
//             )}
//             <Toast />
//         </View>
//     );
// };

// export default StudentScreen;




import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import axios from "axios";
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from "expo-location";

const StudentScreen = () => {
    const [attendanceActive, setAttendanceActive] = useState(false);
    const [isNearTeacher, setIsNearTeacher] = useState(false);
    
    useEffect(() => {
        const checkAttendanceStatus = async () => {
            try {
                const response = await axios.get("http://192.168.86.29:6000/attendance-status");
                setAttendanceActive(response.data.attendanceActive);
                
                if (response.data.attendanceActive) {
                    await checkProximity(response.data.teacherLocation);
                }
            } catch (error) {
                console.error("Error fetching attendance status");
            }
        };

        checkAttendanceStatus();
        const interval = setInterval(checkAttendanceStatus, 5000); // Check every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const checkProximity = async (teacherLocation) => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            Toast.show({ type: "error", text1: "Location permission denied" });
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        const distance = getDistance(latitude, longitude, teacherLocation.latitude, teacherLocation.longitude);
        
        if (distance <= 3) {
            setIsNearTeacher(true);
        } else {
            setIsNearTeacher(false);
        }
    };

    const getDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371e3; // Earth’s radius in meters
        const φ1 = (lat1 * Math.PI) / 180;
        const φ2 = (lat2 * Math.PI) / 180;
        const Δφ = ((lat2 - lat1) * Math.PI) / 180;
        const Δλ = ((lon2 - lon1) * Math.PI) / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                  Math.cos(φ1) * Math.cos(φ2) *
                  Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in meters
    };

    const markAttendance = async () => {
        try {
            const storedUser = await AsyncStorage.getItem('user');
            const parsedUser = storedUser ? JSON.parse(storedUser) : null;
            const userId = parsedUser?.id;

            const response = await axios.post("http://192.168.86.29:6000/mark-attendance", {
                partner_id: userId
            });

            Toast.show({ type: "success", text1: response.data.message });
        } catch (error) {
            Toast.show({ type: "error", text1: "Error marking attendance" });
        }
    };

    return (
        <View>
            {attendanceActive ? (
                <Button title="Mark Attendance" onPress={markAttendance} disabled={!isNearTeacher} />
            ) : (
                <Text>Attendance is not active</Text>
            )}
            {isNearTeacher ? <Text>You are near the teacher</Text> : <Text>You are too far from the teacher</Text>}
            <Toast />
        </View>
    );
};

export default StudentScreen;
