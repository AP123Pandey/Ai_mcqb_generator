
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import TeacherScreen from './TeacherScreen';

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

const TDeliveryManDashboard = () => {
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
              <Text style={styles.greeting}>Hello , {user.first_name} , Sir</Text>
              <Text style={styles.subGreeting}>Welocome to All in One</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationIcon}>
            <Icon name="bell" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.contentContainer}>
        <TeacherScreen/>
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

export default TDeliveryManDashboard;