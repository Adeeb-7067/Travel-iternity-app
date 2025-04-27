import React, { useState } from 'react';
import { Link } from 'expo-router';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StatusBar, 
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Dimensions
} from 'react-native';
import { 
  MaterialIcons, 
  FontAwesome, 
  Ionicons,
  MaterialCommunityIcons,
  AntDesign
} from '@expo/vector-icons';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [duration, setDuration] = useState(false);
  const [travelerType, setTravelerType] = useState(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleDuration = () => {
    setDuration(!duration);
  };

  const selectTravelerType = (type) => {
    setTravelerType(type);
  };

  // Define colors based on theme
  const theme = {
    background: darkMode ? '#1c1c1e' : '#f2f2f7',
    cardBackground: darkMode ? '#2c2c2e' : '#ffffff',
    text: darkMode ? '#ffffff' : '#000000',
    placeholder: darkMode ? '#8e8e93' : '#8e8e93',
    primary: '#4e5dff', // Blue for both themes
    buttonText: '#ffffff',
    borderColor: darkMode ? '#3a3a3c' : '#d1d1d6',
  };

  // Get the screen height to properly calculate the scroll view
  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
      
      {/* Theme Toggle Button */}
      <TouchableOpacity 
        style={[styles.themeToggle, { backgroundColor: theme.cardBackground }]} 
        onPress={toggleTheme}
      >
        {darkMode ? 
          <Ionicons name="sunny" size={22} color="white" /> : 
          <Ionicons name="moon" size={22} color="black" />
        }
      </TouchableOpacity>
      
      <ScrollView 
        contentContainerStyle={{ minHeight: screenHeight - (StatusBar.currentHeight || 0) }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.contentContainer}>
          {/* Header */}
          <Text style={[styles.header, { color: theme.text }]}>Plan Your Journey, Your Way!</Text>
          <Text style={[styles.subHeader, { color: theme.text }]}>Let's create your personalised travel experience</Text>
          
          {/* Destination Input */}
          <Text style={[styles.label, { color: theme.text }]}>Where would you like to go?</Text>
          <View style={[styles.inputContainer, { backgroundColor: theme.cardBackground, borderColor: theme.borderColor }]}>
            <MaterialIcons name="location-on" size={24} color={theme.placeholder} style={styles.inputIcon} />
            <TextInput
              style={[styles.input, { color: theme.text }]}
              placeholder="Enter Destination"
              placeholderTextColor={theme.placeholder}
            />
          </View>
          
          {/* Duration Dropdown */}
          <Text style={[styles.label, { color: theme.text }]}>How long will you stay?</Text>
          <TouchableOpacity 
            style={[styles.dropdown, { backgroundColor: theme.cardBackground, borderColor: theme.borderColor }]}
            onPress={toggleDuration}
          >
            <MaterialIcons name="date-range" size={24} color={theme.placeholder} style={styles.inputIcon} />
            <Text style={[styles.dropdownText, { color: theme.placeholder }]}>Select Duration</Text>
            <MaterialIcons 
              name={duration ? "keyboard-arrow-up" : "keyboard-arrow-down"} 
              size={24} 
              color={theme.placeholder} 
              style={styles.dropdownIcon} 
            />
          </TouchableOpacity>
          
          {/* Traveler Type */}
          <Text style={[styles.label, { color: theme.text }]}>Who are you traveling with?</Text>
          <View style={styles.optionsGrid}>
            <TouchableOpacity 
              style={[
                styles.optionButton, 
                { 
                  backgroundColor: travelerType === 'solo' ? theme.primary : theme.cardBackground,
                  borderColor: theme.borderColor 
                }
              ]}
              onPress={() => selectTravelerType('solo')}
            >
              <MaterialCommunityIcons 
                name="account" 
                size={24} 
                color={travelerType === 'solo' ? theme.buttonText : theme.placeholder} 
              />
              <Text 
                style={[
                  styles.optionText, 
                  { color: travelerType === 'solo' ? theme.buttonText : theme.text }
                ]}
              >
                Solo
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.optionButton, 
                { 
                  backgroundColor: travelerType === 'couple' ? theme.primary : theme.cardBackground,
                  borderColor: theme.borderColor 
                }
              ]}
              onPress={() => selectTravelerType('couple')}
            >
              <Ionicons 
                name="people" 
                size={24} 
                color={travelerType === 'couple' ? theme.buttonText : theme.placeholder} 
              />
              <Text 
                style={[
                  styles.optionText, 
                  { color: travelerType === 'couple' ? theme.buttonText : theme.text }
                ]}
              >
                Couple
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.optionButton, 
                { 
                  backgroundColor: travelerType === 'family' ? theme.primary : theme.cardBackground,
                  borderColor: theme.borderColor 
                }
              ]}
              onPress={() => selectTravelerType('family')}
            >
              <MaterialIcons 
                name="family-restroom" 
                size={24} 
                color={travelerType === 'family' ? theme.buttonText : theme.placeholder} 
              />
              <Text 
                style={[
                  styles.optionText, 
                  { color: travelerType === 'family' ? theme.buttonText : theme.text }
                ]}
              >
                Family
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.optionButton, 
                { 
                  backgroundColor: travelerType === 'friends' ? theme.primary : theme.cardBackground,
                  borderColor: theme.borderColor 
                }
              ]}
              onPress={() => selectTravelerType('friends')}
            >
              <FontAwesome 
                name="users" 
                size={24} 
                color={travelerType === 'friends' ? theme.buttonText : theme.placeholder} 
              />
              <Text 
                style={[
                  styles.optionText, 
                  { color: travelerType === 'friends' ? theme.buttonText : theme.text }
                ]}
              >
                Friends
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* Continue Button */}
          <TouchableOpacity style={styles.continueButton}>
            <Link href="/(tabs)/" >
            <Text style={styles.continueButtonText}>Continue</Text>
            </Link>
          </TouchableOpacity> 
        </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 40,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 16,
  },
  themeToggle: {
    position: 'absolute',
    top: StatusBar.currentHeight || 40,
    right: 16,
    padding: 8,
    borderRadius: 20,
    zIndex: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
    marginTop: 10,
  },
  subHeader: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    height: 46,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    height: 46,
  },
  dropdownText: {
    flex: 1,
    fontSize: 14,
  },
  dropdownIcon: {
    marginLeft: 'auto',
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  optionButton: {
    width: '48%',
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 6,
  },
  continueButton: {
    backgroundColor: '#4e5dff',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 16,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});