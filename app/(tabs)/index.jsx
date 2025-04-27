import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, ThemeContext } from '@/app/Context/themeContext';
import { Homecom1, Homecom2, Homecom3 } from '@/components/Home/componentWrapper';

// Theme toggle button component
const ThemeToggleButton = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <TouchableOpacity 
          style={[
            styles.themeButton, 
            {backgroundColor: theme.colors.primary}
          ]} 
          onPress={theme.toggleTheme}
        >
          <Text style={{
            color: theme.isDarkMode ? '#000000' : '#FFFFFF',
            fontWeight: 'bold',
            marginLeft: 8
          }}>
            {theme.isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </Text>
          <Ionicons 
            name={theme.isDarkMode ? "sunny-outline" : "moon-outline"} 
            size={20} 
            color={theme.isDarkMode ? "#000000" : "#FFFFFF"} 
            style={{marginLeft: 6}}
          />
        </TouchableOpacity>
      )}
    </ThemeContext.Consumer>
  );
};

export class Index extends Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {theme => (
            <>
              <StatusBar barStyle={theme.colors.statusBar} />
              <ScrollView style={[styles.container, {backgroundColor: theme.colors.background}]}>
                <View style={styles.themeToggleContainer}>
                  <ThemeToggleButton />
                </View>
                <View style={styles.componentWrapper}>
                  <Homecom1 />
                </View>
                <View style={styles.componentWrapper}>
                  <Homecom2 />
                </View>
                <View style={styles.componentWrapper}>
                  <Homecom3 />
                </View>
              </ScrollView>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  componentWrapper: {
    marginBottom: 0,
  },
  themeToggleContainer: {
    position: 'absolute',
    top: 10,
    right: 16,
    zIndex: 100,
  },
  themeButton: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  }
});

export default Index;