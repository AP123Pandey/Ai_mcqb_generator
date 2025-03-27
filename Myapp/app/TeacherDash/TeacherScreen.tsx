// import React, { useState } from "react";
// import { View, Button, Text } from "react-native";
// import axios from "axios";
// import Toast from "react-native-toast-message";

// const TeacherScreen = () => {
//     const [attendanceActive, setAttendanceActive] = useState(false);

//     const startAttendance = async () => {
//         try {
//             const response = await axios.post("http://192.168.86.29:6000/start-attendance");
//             setAttendanceActive(true);
//             Toast.show({ type: "success", text1: response.data.message });
//         } catch (error) {
//             Toast.show({ type: "error", text1: "Error starting attendance" });
//         }
//     };

//     return (
//         <View>
//             <Button title="Start Attendance" onPress={startAttendance} disabled={attendanceActive} />
//             {attendanceActive && <Text>Attendance is active for 10 minutes</Text>}
//             <Toast />
//         </View>
//     );
// };

// export default TeacherScreen;




















import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import axios from "axios";
import Toast from "react-native-toast-message";
import * as Location from "expo-location";

const TeacherScreen = () => {
    const [attendanceActive, setAttendanceActive] = useState(false);

    const startAttendance = async () => {
        console.log("Start Attendance button clicked!");
    
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            console.log("Location Permission Status:", status); // Debugging
    
            if (status !== "granted") {
                Toast.show({ type: "error", text1: "Location permission denied" });
                return;
            }
    
            let location = await Location.getCurrentPositionAsync({});
            console.log("Location Data:", location); // Debugging
    
            const { latitude, longitude } = location.coords;
            console.log("Sending Location:", latitude, longitude); // Debugging
    
            const response = await axios.post("http://192.168.86.29:6000/start-attendance", {
                latitude,
                longitude
            });
    
            console.log("Response from API:", response.data); // Debugging
    
            setAttendanceActive(true);
            Toast.show({ type: "success", text1: response.data.message });
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            Toast.show({ type: "error", text1: "Error starting attendance" });
        }
    };
    
    
    

    return (
        <View>
        <Button title="Start Attendance" onPress={() => { 
            console.log("Button Pressed!"); // Debugging
            startAttendance(); 
        }} disabled={attendanceActive} />
        {attendanceActive && <Text>Attendance is active for 10 minutes</Text>}
        <Toast />
    </View>
    );
};

export default TeacherScreen;
``