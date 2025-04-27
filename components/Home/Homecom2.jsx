import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/app/Context/themeContext';

export default function Homecom2() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={theme.colors.statusBar} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Flight Details Section */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Flight Details</Text>
          <Text style={[styles.seeAllText, { color: theme.colors.primary }]}>See all</Text>
        </View>

        <View style={[styles.blueCard, { backgroundColor: theme.colors.secondary }]}>
          <View style={styles.flightDetailsContent}>
            <Text style={styles.flightDate}>26.01.2025, 10:50 am</Text>
            
            <View style={styles.flightRoute}>
              <View style={styles.airport}>
                <Text style={styles.airportCode}>DEL</Text>
                <Text style={styles.airportName}>Delhi, India</Text>
              </View>
              
              <View style={styles.arrowContainer}>
                <Ionicons name="arrow-forward" size={20} color="white" />
              </View>
              
              <View style={styles.airport}>
                <Text style={styles.airportCode}>NRT</Text>
                <Text style={styles.airportName}>Narita, Tokyo</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.planeImageContainer}>
            <Image 
              source={{ uri: 'https://unsplash.com/photos/a-blue-and-white-airplane-flying-in-the-sky-7EpPehZxP6E' }} 
              style={styles.planeImage}
            />
          </View>
        </View>

        {/* Accommodation Section */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Accomodation</Text>
          <Text style={[styles.seeAllText, { color: theme.colors.primary }]}>See all</Text>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.hotelCardsContainer}
          contentContainerStyle={styles.hotelCardsContent}
        >
          {/* First Hotel Card */}
          <View style={[styles.hotelCard, { backgroundColor: theme.colors.secondaryBackground }]}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=750&auto=format&fit=crop' }} 
              style={styles.hotelImage}
            />
            
            <View style={[styles.ratingBadge, { backgroundColor: theme.colors.secondary }]}>
              <Ionicons name="star" size={14} color="white" />
              <Text style={styles.ratingText}>4.0 Very Good</Text>
            </View>
            
            <View style={styles.hotelDetails}>
              <Text style={[styles.hotelName, { color: theme.colors.text }]}>Shinagawa Prince Hotel</Text>
              
              <View style={styles.checkDetails}>
                <Text style={[styles.checkLabel, { color: theme.isDarkMode ? '#BBBBBB' : '#666666' }]}>Check in: </Text>
                <Text style={[styles.checkValue, { color: theme.colors.text }]}>26.01.2025, 11:15 pm</Text>
              </View>
              
              <View style={styles.checkDetails}>
                <Text style={[styles.checkLabel, { color: theme.isDarkMode ? '#BBBBBB' : '#666666' }]}>Check out: </Text>
                <Text style={[styles.checkValue, { color: theme.colors.text }]}>28.01.2025, 11:15 am</Text>
              </View>
              
              <View style={styles.stayInfoRow}>
                <Text style={[styles.nightsText, { color: theme.colors.text }]}>2 Nights</Text>
                <View style={styles.confirmedBadge}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <Text style={styles.confirmedText}>Confirmed</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Second Hotel Card */}
          <View style={[styles.hotelCard, { backgroundColor: theme.colors.secondaryBackground }]}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=750&auto=format&fit=crop' }} 
              style={styles.hotelImage}
            />
            
            <View style={[styles.ratingBadge, { backgroundColor: theme.colors.secondary }]}>
              <Ionicons name="star" size={14} color="white" />
              <Text style={styles.ratingText}>4.1 Very Good</Text>
            </View>
            
            <View style={styles.hotelDetails}>
              <Text style={[styles.hotelName, { color: theme.colors.text }]}>Mercure Tokyo Hotel</Text>
              
              <View style={styles.checkDetails}>
                <Text style={[styles.checkLabel, { color: theme.isDarkMode ? '#BBBBBB' : '#666666' }]}>Check in: </Text>
                <Text style={[styles.checkValue, { color: theme.colors.text }]}>28.01.2025, 6:00 pm</Text>
              </View>
              
              <View style={styles.checkDetails}>
                <Text style={[styles.checkLabel, { color: theme.isDarkMode ? '#BBBBBB' : '#666666' }]}>Check out: </Text>
                <Text style={[styles.checkValue, { color: theme.colors.text }]}>30.01.2025, 11:15 am</Text>
              </View>
              
              <View style={styles.stayInfoRow}>
                <Text style={[styles.nightsText, { color: theme.colors.text }]}>2 Nights</Text>
                <View style={styles.pendingBadge}>
                  <Ionicons name="time-outline" size={16} color="#FF9800" />
                  <Text style={styles.pendingText}>Pending</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '500',
  },
  blueCard: {
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginBottom: 24,
  },
  flightDetailsContent: {
    flex: 1,
  },
  flightDate: {
    color: 'white',
    fontSize: 14,
    marginBottom: 20,
  },
  flightRoute: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  airport: {
    alignItems: 'flex-start',
  },
  airportCode: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  airportName: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
  },
  arrowContainer: {
    paddingHorizontal: 16,
  },
  planeImageContainer: {
    position: 'absolute',
    right: 16,
    top: 16,
    width: 80,
    height: 80,
    opacity: 0.6,
  },
  planeImage: {
    width: '100%',
    height: '100%',
    tintColor: 'white',
    opacity: 0.7,
  },
  hotelCardsContainer: {
    flexDirection: 'row',
  },
  hotelCardsContent: {
    paddingRight: 16,
    paddingBottom: 20,
  },
  hotelCard: {
    width: 300,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
    elevation: 4,
  },
  hotelImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  ratingBadge: {
    position: 'absolute',
    top: 130,
    left: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  ratingText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '500',
  },
  hotelDetails: {
    padding: 16,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  checkDetails: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  checkLabel: {
    fontSize: 14,
  },
  checkValue: {
    fontSize: 14,
  },
  stayInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  nightsText: {
    fontSize: 14,
    fontWeight: '500',
  },
  confirmedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmedText: {
    color: '#4CAF50',
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  pendingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pendingText: {
    color: '#FF9800',
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
  },
});