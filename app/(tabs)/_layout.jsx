// app/(tabs)/_layout.js
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { usePathname } from 'expo-router';

// Custom Tab component with haptic feedback
const HapticTab = ({ children, onPress, ...props }) => {
  const handlePress = () => {
    // Add haptic feedback
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable 
      {...props}
      onPress={handlePress}
      style={styles.tabButton}
    >
      {children}
    </Pressable>
  );
};

// Custom TabBar component for complete control
const CustomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();
  const pathname = usePathname(); // Get current path

  // Check if the current route is profile
  // If we're on the profile page, don't render the tab bar
  if (pathname === '/profile') {
    return null;
  }
  
  // The active tab color - bright lime green from the image
  const activeColor = '#c1ff00';
  // Inactive tab color - light gray
  const inactiveColor = '#8a8a8a';

  return (
    <View style={[
      styles.tabBar,
      { paddingBottom: insets.bottom > 0 ? insets.bottom : 10 }
    ]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        // Get icon based on route name
        const getIcon = () => {
          switch (route.name) {
            case 'index':
              return 'home';
            case 'search':
              return 'search';
            case 'create':
              return 'plus';
            case 'favorites':
              return 'heart';
            case 'profile':
              return 'user';
            default:
              return 'circle';
          }
        };

        const iconName = getIcon();
        
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <HapticTab
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
          >
            <View style={[
              styles.tabIconContainer,
              // Apply the dark olive background to the active home tab as shown in the image
              isFocused && route.name === 'index' && styles.activeHomeBackground
            ]}>
              <Feather 
                name={iconName} 
                size={route.name === 'create' ? 28 : 24} 
                color={isFocused ? activeColor : inactiveColor}
              />
            </View>
          </HapticTab>
        );
      })}
    </View>
  );
};

export default function TabLayout() {
  const pathname = usePathname(); // Get current path to conditionally render navbar

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: 'Search' }}
      />
      <Tabs.Screen
        name="create"
        options={{ title: 'Create' }}
      />
      <Tabs.Screen
        name="favorites"
        options={{ title: 'Favorites' }}
      />
      <Tabs.Screen
        name="profile"
        options={{ 
          title: 'Profile',
          // Alternative approach: Hide the tab bar specifically for profile
          // If the CustomTabBar approach doesn't work consistently
          tabBarStyle: { display: 'none' }
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1c', // Darker background as shown in the image
    borderTopWidth: 0,
    height: 60,
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  activeHomeBackground: {
    backgroundColor: '#4b5320', // Dark olive green background for the home icon
    borderRadius: 23, // Fully rounded
  },
});