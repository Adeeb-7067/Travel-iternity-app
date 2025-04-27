import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useTheme } from '@/app/Context/themeContext';

export default function Homecom1() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={theme.colors.statusBar} />
      
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, { color: theme.colors.text }]}>Hello Chhavi!</Text>
          <Text style={[styles.subGreeting, { color: theme.colors.subText }]}>Ready for the trip?</Text>
        </View>
        <View style={[styles.profileCircle, { backgroundColor: theme.colors.accent }]}>
          <Text style={styles.profileLetter}>C</Text>
        </View>
      </View>
      
      {/* Trip Section Title */}
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Your Upcoming Trip</Text>
      
      {/* Trip Card */}
      <View style={styles.tripCard}>
        <ImageBackground 
          source={{ uri: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' }}
          style={styles.tripImage}
          imageStyle={styles.tripImageStyle}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.15)', 'rgba(0,0,0,0.5)']}
            style={styles.overlay}
          >
            {/* Destination */}
            <View style={styles.destinationContainer}>
              <Text style={styles.destinationText}>TOKYO</Text>
              <Feather name="arrow-up-right" size={24} color="white" style={styles.arrowIcon} />
            </View>
            
            {/* Date */}
            <Text style={styles.dateText}>27.01.2025 - 02.02.2025</Text>
            
            {/* Trip Details */}
            <View style={styles.tripDetails}>
              {/* Duration */}
              <View style={styles.detailItem}>
                <View style={styles.iconContainer}>
                  <Ionicons name="time-outline" size={22} color={theme.colors.primary} />
                </View>
                <View style={styles.detailTextContainer}>
                  <Text style={styles.detailNumber}>8 Days</Text>
                  <Text style={styles.detailLabel}>Duration</Text>
                </View>
              </View>
              
              {/* Group Size */}
              <View style={styles.detailItem}>
                <View style={styles.iconContainer}>
                  <Ionicons name="people-outline" size={22} color={theme.colors.primary} />
                </View>
                <View style={styles.detailTextContainer}>
                  <Text style={styles.detailNumber}>4 (2M,2F)</Text>
                  <Text style={styles.detailLabel}>Group Size</Text>
                </View>
              </View>
              
              {/* Activities */}
              <View style={styles.detailItem}>
                <View style={styles.iconContainer}>
                  <Ionicons name="list-outline" size={22} color={theme.colors.primary} />
                </View>
                <View style={styles.detailTextContainer}>
                  <Text style={styles.detailNumber}>14</Text>
                  <Text style={styles.detailLabel}>Activities</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
  },
  subGreeting: {
    fontSize: 18,
    opacity: 0.8,
    marginTop: 4,
  },
  profileCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileLetter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 32,
    marginBottom: 16,
  },
  tripCard: {
    borderRadius: 20,
    overflow: 'hidden',
    height: 450,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  tripImage: {
    width: '100%',
    height: '100%',
  },
  tripImageStyle: {
    borderRadius: 20,
  },
  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  destinationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  destinationText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
  arrowIcon: {
    marginLeft: 8,
    marginTop: 10,
  },
  dateText: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
    marginTop: -120,
  },
  tripDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  detailTextContainer: {
    flexDirection: 'column',
  },
  detailNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  detailLabel: {
    fontSize: 12,
    color: 'white',
    opacity: 0.8,
  },
});