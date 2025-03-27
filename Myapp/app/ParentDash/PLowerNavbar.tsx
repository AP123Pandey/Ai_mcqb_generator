
// export default Navbar;
import React, { useCallback, useState, useEffect, memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';
import DeliveryManDashboard from '../DeliveryManDashboard';
import ProfileScreen from '../userdash';

import OrdersScreen from '../Order';
import OrdersScreen2 from '../Order2';
import FlashcardScreen from '../FlashcardScreen';




// Theme constants extracted for better maintainability
const THEME = {
  COLORS: {
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
  },
  SHADOWS: Platform.select({
    ios: {
      normal: {
        shadowColor: '#6C63FF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      active: {
        shadowColor: '#8E2DE2',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
      },
      navbar: {
        shadowColor: '#6C63FF',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      }
    },
    android: {
      normal: { elevation: 4 },
      active: { elevation: 8 },
      navbar: { elevation: 20 }
    }
  }),
};

const { width } = Dimensions.get('window');

// Memoize the NavItem to prevent unnecessary re-renders
const NavItem = memo(({ name, icon, label, selectedTab, onTabSelect }) => {
  const isSelected = selectedTab === name;
  const itemScale = new Animated.Value(1);
  const rotateAnim = new Animated.Value(0);

  useEffect(() => {
    if (isSelected) {
      Animated.parallel([
        Animated.sequence([
          Animated.timing(itemScale, {
            toValue: 0.85,
            duration: 150,
            useNativeDriver: true,
          }),
          Animated.spring(itemScale, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.timing(rotateAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isSelected]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <TouchableOpacity
      style={styles.navItem}
      onPress={() => onTabSelect(name)}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={`${label} tab`}
      accessibilityState={{ selected: isSelected }}
    >
      <Animated.View
        style={[
          styles.iconContainer,
          isSelected && styles.selectedIconContainer,
          {
            transform: [{ scale: itemScale }, { rotate: spin }],
          },
        ]}
      >
        {isSelected ? (
          <LinearGradient
            colors={[THEME.COLORS.gradient.start, THEME.COLORS.gradient.end]}
            style={styles.gradientContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Icon name={icon} size={24} color={THEME.COLORS.white} />
          </LinearGradient>
        ) : (
          <Icon name={icon} size={22} color={THEME.COLORS.inactive} />
        )}
        <Animated.View
          style={[
            styles.indicator,
            isSelected && styles.activeIndicator,
          ]}
        />
      </Animated.View>
      <Text
        style={[
          styles.navText,
          isSelected && styles.selectedNavText,
        ]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
});

const Navbar = ({ onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState('home');
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleTabSelect = useCallback((tabName) => {
    setSelectedTab(tabName);
    setRefreshKey((prevKey) => prevKey + 1); // Force refresh
  }, []);

  const refreshData = useCallback(async () => {
    setIsRefreshing(true);
    try {
      console.log('Refreshing data...');
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a refresh
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      refreshData(); // Trigger refresh when the screen is focused
      return () => {
        // Cleanup when screen loses focus if needed
      };
    }, [refreshData])
  );

  useEffect(() => {
    if (onTabChange) onTabChange(setSelectedTab);
  }, [onTabChange]);

  const renderContent = () => {
    switch (selectedTab) {
      case 'home':
        return <DeliveryManDashboard key={refreshKey} isRefreshing={isRefreshing} onRefresh={refreshData} />;
      case 'profile':
        return <ProfileScreen key={refreshKey} isRefreshing={isRefreshing} onRefresh={refreshData} />;
      case 'Add':
        return <FlashcardScreen key={refreshKey} isRefreshing={isRefreshing} onRefresh={refreshData} />;
      case 'orders':
        return <OrdersScreen key={refreshKey} isRefreshing={isRefreshing} onRefresh={refreshData} />;
      case 'analytics':
        return <OrdersScreen2 key={refreshKey} isRefreshing={isRefreshing} onRefresh={refreshData} />;
      default:
        return null;
    }
  };

  const tabs = [
    { name: 'home', icon: 'home', label: 'Home' },
    { name: 'orders', icon: 'shopping-bag', label: 'AI MCQ' },
    { name: 'Add', icon: 'plus-circle', label: 'Add_p' },
    { name: 'analytics', icon: 'chart-bar', label: 'Analytics' },
    { name: 'profile', icon: 'user-alt', label: 'Profile' }
  ];

  return (
    <View style={styles.container}>
      <Animated.View style={styles.content}>{renderContent()}</Animated.View>
      <View style={styles.navbarWrapper}>
        <View style={styles.navbarBackground}>
          <View style={styles.navbar}>
            {tabs.map(tab => (
              <NavItem
                key={tab.name}
                name={tab.name}
                icon={tab.icon}
                label={tab.label}
                selectedTab={selectedTab}
                onTabSelect={handleTabSelect}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.background,
  },
  content: {
    flex: 1,
  },
  navbarWrapper: {
    backgroundColor: 'transparent',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10, // Adjust for iOS safe area
  },
  navbarBackground: {
    backgroundColor: THEME.COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    ...THEME.SHADOWS.navbar,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: width / 6,
    maxWidth: width / 4,
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.white,
    marginBottom: 6,
    ...THEME.SHADOWS.normal,
  },
  selectedIconContainer: {
    ...THEME.SHADOWS.active,
  },
  gradientContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    position: 'absolute',
    bottom: -2,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'transparent',
  },
  activeIndicator: {
    width: 20,
    height: 4,
    borderRadius: 2,
    backgroundColor: THEME.COLORS.secondary,
  },
  navText: {
    fontSize: 12,
    color: THEME.COLORS.text.secondary,
    fontWeight: '600',
    opacity: 0.8,
    textAlign: 'center',
  },
  selectedNavText: {
    color: THEME.COLORS.text.primary,
    fontWeight: '700',
    opacity: 1,
  },
});

export default Navbar;