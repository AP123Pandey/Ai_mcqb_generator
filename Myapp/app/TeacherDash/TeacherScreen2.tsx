// // import React, { useState, useEffect } from "react";
// // import { View, Button, Text, TextInput, Modal, FlatList } from "react-native";
// // import axios from "axios";
// // import Toast from "react-native-toast-message";
// // import * as Location from "expo-location";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import { Picker } from '@react-native-picker/picker';

// // const TeacherScreen2 = () => {
// //     const [attendanceActive, setAttendanceActive] = useState(false);
// //     const [modalVisible, setModalVisible] = useState(false);
// //     const [subject, setSubject] = useState("");
// //     const [startTime, setStartTime] = useState("08:00");
// //     const [endTime, setEndTime] = useState("09:00");
// //     const [lectures, setLectures] = useState([]);

// //     // Fetch lectures from API
// //     useEffect(() => {
// //         fetchLectures();
// //     }, []);

// //     const fetchLectures = async () => {
// //         try {
// //             const response = await axios.get("http://192.168.86.29:6000/get-lectures");
// //             setLectures(response.data);
// //         } catch (error) {
// //             console.error("Error fetching lectures:", error);
// //         }
// //     };

// //     const startAttendance = async () => {
// //         console.log("Start Attendance button clicked!");
// //         try {
// //             let { status } = await Location.requestForegroundPermissionsAsync();
// //             if (status !== "granted") {
// //                 Toast.show({ type: "error", text1: "Location permission denied" });
// //                 return;
// //             }

// //             let location = await Location.getCurrentPositionAsync({});
// //             const { latitude, longitude } = location.coords;

// //             const response = await axios.post("http://192.168.86.29:6000/start-attendance", {
// //                 latitude,
// //                 longitude
// //             });

// //             setAttendanceActive(true);
// //             Toast.show({ type: "success", text1: response.data.message });
// //         } catch (error) {
// //             console.error("Error:", error.response?.data || error.message);
// //             Toast.show({ type: "error", text1: "Error starting attendance" });
// //         }
// //     };

// //     // const addLecture = async () => {
// //     //     try {


// //     //         const storedUser = await AsyncStorage.getItem('user');
// //     //         const parsedUser = storedUser ? JSON.parse(storedUser) : null;
// //     //         console.log(storedUser);

// //     //         const teacherInfo = await AsyncStorage.getItem("teacherInfo");
// //     //         const { id, first_name } = JSON.parse(storedUser );

// //     //         let location = await Location.getCurrentPositionAsync({});
// //     //         const { latitude, longitude } = location.coords;

// //     //         const response = await axios.post("http://192.168.86.29:6000/add-lecture", {
// //     //             id,
// //     //             first_name,
// //     //             subject,
// //     //             start_time: startTime,
// //     //             end_time: endTime,
// //     //             latitude,
// //     //             longitude
// //     //         });

// //     //         Toast.show({ type: "success", text1: response.data.message });

// //     //         // Refresh lecture list
// //     //         fetchLectures();

// //     //         // Close modal
// //     //         setModalVisible(false);
// //     //         setSubject("");
// //     //         setStartTime("08:00");
// //     //         setEndTime("09:00");
// //     //     } catch (error) {
// //     //         console.error("Error:", error.response?.data || error.message);
// //     //         Toast.show({ type: "error", text1: "Error adding lecture" });
// //     //     }
// //     // };

// //     const addLecture = async () => {
// //         try {
// //             // Retrieve teacher information safely
// //             const storedUser = await AsyncStorage.getItem("user");
// //             if (!storedUser) {
// //                 Toast.show({ type: "error", text1: "User not found in storage" });
// //                 return;
// //             }
    
// //             const parsedUser = JSON.parse(storedUser);
// //             if (!parsedUser.id || !parsedUser.first_name) {
// //                 Toast.show({ type: "error", text1: "Invalid user data" });
// //                 return;
// //             }
    
// //             // Ensure subject is provided
// //             if (!subject.trim()) {
// //                 Toast.show({ type: "error", text1: "Subject cannot be empty" });
// //                 return;
// //             }
    
// //             // Get location
// //             let location = await Location.getCurrentPositionAsync({});
// //             const { latitude, longitude } = location.coords;
    
// //             // Send request to backend
// //             const response = await axios.post("http://192.168.86.29:6000/add-lecture", {
// //                 id: parsedUser.id,
// //                 first_name: parsedUser.first_name,
// //                 subject,
// //                 start_time: startTime,
// //                 end_time: endTime,
// //                 latitude,
// //                 longitude
// //             });
    
// //             Toast.show({ type: "success", text1: response.data.message });
    
// //             // Refresh lectures list
// //             fetchLectures();
    
// //             // Close modal and reset inputs
// //             setModalVisible(false);
// //             setSubject("");
// //             setStartTime("08:00");
// //             setEndTime("09:00");
// //         } catch (error) {
// //             console.error("Error:", error.response?.data || error.message);
// //             Toast.show({ type: "error", text1: "Error adding lecture" });
// //         }
// //     };
    

// //     return (
// //         <View style={{ padding: 20 }}>
// //             {/* Start Attendance Button */}
// //             <Button title="Start Attendance" onPress={startAttendance} disabled={attendanceActive} />
// //             {attendanceActive && <Text>Attendance is active for 10 minutes</Text>}

// //             {/* Add Lecture Button */}
// //             <Button title="Add Lecture" onPress={() => setModalVisible(true)} />

// //             {/* Lecture Form Modal */}
// //             <Modal visible={modalVisible} transparent={true} animationType="slide">
// //                 <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
// //                     <View style={{ width: 300, padding: 20, backgroundColor: "white", borderRadius: 10 }}>
// //                         <Text>Subject:</Text>
// //                         <TextInput value={subject} onChangeText={setSubject} style={{ borderBottomWidth: 1, marginBottom: 10 }} />

// //                         <Text>Start Time:</Text>
// //                         <Picker selectedValue={startTime} onValueChange={(itemValue) => setStartTime(itemValue)}>
// //                             {["08:00", "09:00", "10:00", "11:00", "12:00"].map((time) => (
// //                                 <Picker.Item key={time} label={time} value={time} />
// //                             ))}
// //                         </Picker>

// //                         <Text>End Time:</Text>
// //                         <Picker selectedValue={endTime} onValueChange={(itemValue) => setEndTime(itemValue)}>
// //                             {["09:00", "10:00", "11:00", "12:00", "13:00"].map((time) => (
// //                                 <Picker.Item key={time} label={time} value={time} />
// //                             ))}
// //                         </Picker>

// //                         <Button title="Add" onPress={addLecture} />
// //                         <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
// //                     </View>
// //                 </View>
// //             </Modal>

// //             {/* Display Lectures */}
// //             <Text style={{ fontSize: 18, marginTop: 20 }}>Scheduled Lectures:</Text>
// //             <FlatList
// //                 data={lectures}
// //                 keyExtractor={(item) => item.id.toString()}
// //                 renderItem={({ item }) => (
// //                     <View style={{ padding: 10, borderWidth: 1, marginTop: 5 }}>
// //                         <Text>{item.subject}</Text>
// //                         <Text>{item.start_time} - {item.end_time}</Text>
// //                         <Text>By: {item.teacher_name}</Text>
// //                     </View>
// //                 )}
// //             />

// //             <Toast />
// //         </View>
// //     );
// // };

// // export default TeacherScreen2;
// import React, { useState, useEffect } from "react";
// import { View, Button, Text, TextInput, Modal, FlatList } from "react-native";
// import axios from "axios";
// import Toast from "react-native-toast-message";
// import * as Location from "expo-location";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Picker } from "@react-native-picker/picker";

// const TeacherScreen2 = () => {
//     const [attendanceActive, setAttendanceActive] = useState(false);
//     const [modalVisible, setModalVisible] = useState(false);
//     const [subject, setSubject] = useState("");
//     const [className, setClassName] = useState("");  // Added Class State
//     const [division, setDivision] = useState("");   // Added Division State
//     const [startTime, setStartTime] = useState("08:00");
//     const [endTime, setEndTime] = useState("09:00");
//     const [lectures, setLectures] = useState([]);

//     // Fetch lectures from API
//     useEffect(() => {
//         fetchLectures();
//     }, []);
//     const startAttendance = async () => {
//         console.log("Start Attendance button clicked!");
    
//         try {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             console.log("Location Permission Status:", status); // Debugging
    
//             if (status !== "granted") {
//                 Toast.show({ type: "error", text1: "Location permission denied" });
//                 return;
//             }
    
//             let location = await Location.getCurrentPositionAsync({});
//             console.log("Location Data:", location); // Debugging
    
//             const { latitude, longitude } = location.coords;
//             console.log("Sending Location:", latitude, longitude); // Debugging
    
//             const response = await axios.post("http://192.168.86.29:6000/start-attendance", {
//                 latitude,
//                 longitude
//             });
    
//             console.log("Response from API:", response.data); // Debugging
    
//             setAttendanceActive(true);
//             Toast.show({ type: "success", text1: response.data.message });
//         } catch (error) {
//             console.error("Error:", error.response?.data || error.message);
//             Toast.show({ type: "error", text1: "Error starting attendance" });
//         }
//     };
    

//     const fetchLectures = async () => {
//         try {
//             const response = await axios.get("http://192.168.86.29:6000/get-lectures");
//             setLectures(response.data);
//         } catch (error) {
//             console.error("Error fetching lectures:", error);
//         }
//     };

//     const addLecture = async () => {
//         try {
//             const storedUser = await AsyncStorage.getItem("user");
    
//             if (!storedUser) {
//                 Toast.show({ type: "error", text1: "User not found in storage" });
//                 return;
//             }
    
//             const parsedUser = JSON.parse(storedUser);
    
//             // Ensure required fields are present
//             if (!parsedUser.id || !parsedUser.first_name || !subject.trim() || !className.trim() || !division.trim()) {
//                 Toast.show({ type: "error", text1: "All fields are required" });
//                 return;
//             }
    
//             // Get location
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== "granted") {
//                 Toast.show({ type: "error", text1: "Location permission denied" });
//                 return;
//             }
    
//             let location = await Location.getCurrentPositionAsync({});
//             if (!location || !location.coords) {
//                 Toast.show({ type: "error", text1: "Failed to get location" });
//                 return;
//             }
    
//             const { latitude, longitude } = location.coords;
    
//             console.log("Sending Data:", {
//                 id: parsedUser.id,
//                 first_name: parsedUser.first_name,
//                 last_name: parsedUser.last_name,
//                 subject_name: subject,  // Fix field name
//                 class_name: className,  // Add class name
//                 division,               // Add division
//                 start_time: startTime,
//                 end_time: endTime,
//                 latitude,
//                 longitude
//             });
    
//             // Send request to backend
//             const response = await axios.post("http://192.168.86.29:6000/add-lecture", {
//                 id: parsedUser.id,
//                 first_name: parsedUser.first_name,
//                 last_name: parsedUser.last_name,
//                 subject_name: subject,  // Fix field name
//                 class_name: className,  // Add class name
//                 division,               // Add division
//                 start_time: startTime,
//                 end_time: endTime
//             });
    
//             Toast.show({ type: "success", text1: response.data.message });
    
//             // Refresh lectures list
//             fetchLectures();
    
//             // Close modal and reset inputs
//             setModalVisible(false);
//             setSubject("");
//             setClassName("");  // Reset class name
//             setDivision("");    // Reset division
//             setStartTime("08:00");
//             setEndTime("09:00");
//         } catch (error) {
//             console.error("Error:", error.response?.data || error.message);
//             Toast.show({ type: "error", text1: "Error adding lecture" });
//         }
//     };
    
//     return (
//         <View style={{ padding: 20 }}>
//             <Button title="Start Attendance" onPress={startAttendance} disabled={attendanceActive} />
//             {attendanceActive && <Text>Attendance is active for 10 minutes</Text>}

//             <Button title="Add Lecture" onPress={() => setModalVisible(true)} />

//             <Modal visible={modalVisible} transparent={true} animationType="slide">
//                 <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
//                     <View style={{ width: 300, padding: 20, backgroundColor: "white", borderRadius: 10 }}>
//                         <Text>Subject:</Text>
//                         <TextInput value={subject} onChangeText={setSubject} style={{ borderBottomWidth: 1, marginBottom: 10 }} />

//                         <Text>Class:</Text>
//                         <TextInput value={className} onChangeText={setClassName} style={{ borderBottomWidth: 1, marginBottom: 10 }} />

//                         <Text>Division:</Text>
//                         <TextInput value={division} onChangeText={setDivision} style={{ borderBottomWidth: 1, marginBottom: 10 }} />

//                         <Text>Start Time:</Text>
//                         <Picker selectedValue={startTime} onValueChange={(itemValue) => setStartTime(itemValue)}>
//                             {["08:00", "09:00", "10:00", "11:00", "12:00"].map((time) => (
//                                 <Picker.Item key={time} label={time} value={time} />
//                             ))}
//                         </Picker>

//                         <Text>End Time:</Text>
//                         <Picker selectedValue={endTime} onValueChange={(itemValue) => setEndTime(itemValue)}>
//                             {["09:00", "10:00", "11:00", "12:00", "13:00"].map((time) => (
//                                 <Picker.Item key={time} label={time} value={time} />
//                             ))}
//                         </Picker>

//                         <Button title="Add" onPress={addLecture} />
//                         <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
//                     </View>
//                 </View>
//             </Modal>

//             <Text style={{ fontSize: 18, marginTop: 20 }}>Scheduled Lectures:</Text>
//             <FlatList
//                 data={lectures}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View style={{ padding: 10, borderWidth: 1, marginTop: 5 }}>
//                         <Text>Subject: {item.subject}</Text>
//                         <Text>Class: {item.className} | Division: {item.division}</Text>
//                         <Text>{item.start_time} - {item.end_time}</Text>
//                         <Text>By: {item.teacher_name}</Text>
//                     </View>
//                 )}
//             />

//             <Toast />
//         </View>
//     );
// };

// export default TeacherScreen2;


// changes at 17-03-25

import React, { useState, useEffect } from "react";
import { View, Button, Text, TextInput, Modal, FlatList } from "react-native";
import axios from "axios";
import Toast from "react-native-toast-message";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";

const TeacherScreen2 = () => {
    const [attendanceActive, setAttendanceActive] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [subject, setSubject] = useState("");
    const [className, setClassName] = useState("");
    const [division, setDivision] = useState("");
    const [startTime, setStartTime] = useState("08:00 AM");
    const [endTime, setEndTime] = useState("09:00 AM");
    const [forEveryday, setForEveryday] = useState(null);
    const [lectures, setLectures] = useState([]);
    const [teacherDepartment, setTeacherDepartment] = useState("");

    useEffect(() => {
        fetchLectures();
        getTeacherInfo();
    }, []);




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
    
    


    const getTeacherInfo = async () => {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setTeacherDepartment(parsedUser.teacher_department || "N/A");
        }
    };

    const formatTime = (time) => {
        const [hour, minute] = time.split(":");
        const formattedHour = hour % 12 || 12;
        const ampm = hour >= 12 ? "PM" : "AM";
        return `${formattedHour}:${minute} ${ampm}`;
    };

    const fetchLectures = async () => {
        try {
            const response = await axios.get("http://192.168.86.29:6000/get-lectures");
            setLectures(response.data);
        } catch (error) {
            console.error("Error fetching lectures:", error);
        }
    };

    const addLecture = async (type) => {
        setForEveryday(type);
        try {
            const storedUser = await AsyncStorage.getItem("user");
            console.log(storedUser);
            if (!storedUser) {
                Toast.show({ type: "error", text1: "User not found in storage" });
                return;
            }
    
            const parsedUser = JSON.parse(storedUser);
            if (!parsedUser.id || !parsedUser.first_name || !subject.trim() || !className.trim() || !division.trim()) {
                Toast.show({ type: "error", text1: "All fields are required" });
                return;
            }
    
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                Toast.show({ type: "error", text1: "Location permission denied" });
                return;
            }
    
            let location = await Location.getCurrentPositionAsync({});
            if (!location || !location.coords) {
                Toast.show({ type: "error", text1: "Failed to get location" });
                return;
            }
    
            const { latitude, longitude } = location.coords;
    
            const response = await axios.post("http://192.168.86.29:6000/add-lecture", {
                id: parsedUser.id,
                first_name: parsedUser.first_name,
                last_name: parsedUser.last_name,
                subject_name: subject,
                class_name: className,
                division,
                start_time: startTime,
                end_time: endTime,
                for_everyday: type,
                teacher_department: teacherDepartment,
                latitude,
                longitude
            });

            console.log( teacherDepartment);
    
            Toast.show({ type: "success", text1: response.data.message });
            fetchLectures();
    
            setModalVisible(false);
            setSubject("");
            setClassName("");
            setDivision("");
            setStartTime("08:00 AM");
            setEndTime("09:00 AM");
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            Toast.show({ type: "error", text1: "Error adding lecture" });
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Button title="Start Attendance" onPress={startAttendance} disabled={attendanceActive} />
            {attendanceActive && <Text>Attendance is active for 10 minutes</Text>}

            <Button title="Add Lecture" onPress={() => setModalVisible(true)} />

            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <View style={{ width: 300, padding: 20, backgroundColor: "white", borderRadius: 10 }}>
                        <Text>Subject:</Text>
                        <TextInput value={subject} onChangeText={setSubject} style={{ borderBottomWidth: 1, marginBottom: 10 }} />

                        <Text>Class:</Text>
                        <TextInput value={className} onChangeText={setClassName} style={{ borderBottomWidth: 1, marginBottom: 10 }} />

                        <Text>Division:</Text>
                        <TextInput value={division} onChangeText={setDivision} style={{ borderBottomWidth: 1, marginBottom: 10 }} />

                        <Text>Start Time:</Text>
                        <Picker selectedValue={startTime} onValueChange={setStartTime}>
                            {["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"].map((time) => (
                                <Picker.Item key={time} label={time} value={time} />
                            ))}
                        </Picker>

                        <Text>End Time:</Text>
                        <Picker selectedValue={endTime} onValueChange={setEndTime}>
                            {["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"].map((time) => (
                                <Picker.Item key={time} label={time} value={time} />
                            ))}
                        </Picker>

                        <Button title="Permanent" onPress={() => addLecture(1)} />
                        <Button title="Temporary" onPress={() => addLecture(0)} color="orange" />
                        <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
                    </View>
                </View>
            </Modal>

            <Text style={{ fontSize: 18, marginTop: 20 }}>Scheduled Lectures:</Text>
            <FlatList
                data={lectures}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, borderWidth: 1, marginTop: 5 }}>
                        <Text>Subject: {item.subject}</Text>
                        <Text>Class: {item.className} | Division: {item.division}</Text>
                        <Text>{formatTime(item.start_time)} - {formatTime(item.end_time)}</Text>
                        <Text>By: {item.teacher_name}</Text>
                        <Text>Type: {item.for_everyday ? "Permanent" : "Temporary"}</Text>
                    </View>
                )}
            />

            <Toast />
        </View>
    );
};

export default TeacherScreen2;
