import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
  }
};

const EditProfileScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    primary_mobile: '',
    city: '',
    blood_group: '',
    complete_address: '',
  });

  const baseURL = 'http://192.168.86.29:6000';

  useEffect(() => {
    fetchCurrentData();
  }, []);

  const fetchCurrentData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const { id } = JSON.parse(user);
        const response = await axios.get(`${baseURL}/delivery-partner/${id}`);
        if (response.data.success) {
          setFormData(response.data.data);
        } else {
          Alert.alert('Error', 'Failed to fetch user data.');
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSave = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const { id } = JSON.parse(user);
        const response = await axios.put(`${baseURL}/delivery-partnerr/${id}`, formData);
        if (response.data.success) {
          Alert.alert('Success', 'Profile updated successfully.');
          router.push('/userdash'); // Redirect back to the profile screen
        } else {
          Alert.alert('Error', response.data.message || 'Failed to update profile.');
        }
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Unable to save changes.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={[COLORS.gradient.start, COLORS.gradient.end]} style={styles.header}>
        <Text style={styles.headerText}>Edit Profile</Text>
      </LinearGradient>

      <View style={styles.form}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={formData.first_name}
          onChangeText={(value) => setFormData({ ...formData, first_name: value })}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={formData.last_name}
          onChangeText={(value) => setFormData({ ...formData, last_name: value })}
        />

        <Text style={styles.label}>Mobile</Text>
        <TextInput
          style={styles.input}
          value={formData.primary_mobile}
          onChangeText={(value) => setFormData({ ...formData, primary_mobile: value })}
        />

        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          value={formData.city}
          onChangeText={(value) => setFormData({ ...formData, city: value })}
        />

        <Text style={styles.label}>Blood Group</Text>
        <TextInput
          style={styles.input}
          value={formData.blood_group}
          onChangeText={(value) => setFormData({ ...formData, blood_group: value })}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={formData.complete_address}
          onChangeText={(value) => setFormData({ ...formData, complete_address: value })}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <LinearGradient colors={[COLORS.primary, COLORS.secondary]} style={styles.saveGradient}>
          <Icon name="save" size={20} color={COLORS.white} />
          <Text style={styles.saveText}>Save Changes</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    padding: 20,
  },
  label: {
    color: COLORS.text.primary,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: COLORS.text.primary,
    marginBottom: 15,
    elevation: 3,
  },
  saveButton: {
    margin: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  saveGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  saveText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default EditProfileScreen;
