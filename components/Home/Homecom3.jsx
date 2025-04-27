import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '@/app/Context/themeContext';

const DayTab = ({ day, date, month, isActive }) => {
  const theme = useTheme();
  
  return (
    <TouchableOpacity 
      style={[
        styles.dayTab, 
        isActive && [styles.activeDayTab, { backgroundColor: theme.colors.primary }]
      ]}
    >
      <View style={[
        styles.dayTabContent, 
        { backgroundColor: isActive ? theme.colors.primary : theme.isDarkMode ? '#2A2A2A' : '#DDDDDD' }
      ]}>
        <Text style={[
          styles.monthText, 
          { color: isActive ? (theme.isDarkMode ? '#000000' : '#FFFFFF') : theme.colors.text }
        ]}>{month}</Text>
        <Text style={[
          styles.dayNumber, 
          { color: isActive ? (theme.isDarkMode ? '#000000' : '#FFFFFF') : theme.colors.text }
        ]}>{day}</Text>
        <Text style={[
          styles.dateText, 
          { color: isActive ? (theme.isDarkMode ? '#000000' : '#FFFFFF') : theme.colors.text }
        ]}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ActivityCard = ({ image, title, subtitle, timing, duration, pickup }) => {
  const theme = useTheme();
  
  return (
    <View style={[styles.activityCard, { backgroundColor: theme.isDarkMode ? '#2A2A2A' : '#FFFFFF' }]}>
      <Image 
        source={{ uri: image }} 
        style={styles.activityImage} 
        resizeMode="cover"
      />
      <View style={styles.activityDetails}>
        {title && <Text style={[styles.activityTitle, { color: theme.colors.text }]}>{title}</Text>}
        {subtitle && <Text style={[styles.activitySubtitle, { color: theme.colors.text }]}>{subtitle}</Text>}
        
        <View style={styles.infoSection}>
          <View style={styles.activityInfo}>
            <Text style={[styles.infoLabel, { color: theme.colors.subText }]}>Timing:</Text>
            <Text style={[styles.infoValue, { color: theme.colors.text }]}>{timing}</Text>
          </View>
          <View style={styles.activityInfo}>
            <Text style={[styles.infoLabel, { color: theme.colors.subText }]}>Duration:</Text>
            <Text style={[styles.infoValue, { color: theme.colors.text }]}>{duration}</Text>
          </View>
          <View style={styles.activityInfo}>
            <Text style={[styles.infoLabel, { color: theme.colors.subText }]}>Pick up:</Text>
            <Text style={[styles.infoValue, { color: theme.colors.text }]}>{pickup}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Homecom3 = () => {
  const theme = useTheme();
  
  // Unsplash image links
  const sensojiImage = 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=600&auto=format&fit=crop';
  const skyTreeImage = 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=600&auto=format&fit=crop';
  const kimonoImage = 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=600&auto=format&fit=crop';

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Activities</Text>
          <TouchableOpacity>
            <Text style={[styles.seeAllText, { color: theme.colors.primary }]}>See all</Text>
          </TouchableOpacity>
        </View>
        
        <View style={[styles.planCard, { backgroundColor: theme.colors.cardBackground }]}>
          <View style={styles.planHeader}>
            <TouchableOpacity style={[styles.dayPlanBadge, { backgroundColor: theme.colors.primary }]}>
              <Text style={[styles.dayPlanText, { color: theme.isDarkMode ? '#000000' : '#FFFFFF' }]}>Day Plan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.activitiesBadge, {
              backgroundColor: theme.isDarkMode ? 'rgba(35, 35, 35, 0.8)' : 'rgba(240, 240, 240, 0.8)',
              borderColor: theme.colors.primary
            }]}>
              <Text style={[styles.activitiesText, { color: theme.colors.primary }]}>14 Activities</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.daysContainer}>
            <DayTab day="27" date="MON" month="JAN" isActive={true} />
            <DayTab day="28" date="TUE" month="JAN" isActive={false} />
            <DayTab day="29" date="WED" month="JAN" isActive={false} />
            <DayTab day="30" date="THU" month="JAN" isActive={false} />
            <DayTab day="31" date="FRI" month="JAN" isActive={false} />
            <DayTab day="1" date="SAT" month="FEB" isActive={false} />
          </ScrollView>
        </View>
        
        <View style={styles.daySection}>
          <TouchableOpacity style={[styles.dayBadge, { backgroundColor: theme.colors.primary }]}>
            <Text style={[styles.dayText, { color: theme.isDarkMode ? '#000000' : '#FFFFFF' }]}>Day 1   27.01.2025</Text>
          </TouchableOpacity>
          <View style={styles.activitiesCountBadge}>
            <Text style={[styles.personIcon, { color: theme.colors.primary }]}>🧍</Text>
            <Text style={[styles.activitiesCountText, { color: theme.colors.primary }]}>3 Activities</Text>
          </View>
        </View>
        
        <View style={[styles.cardContainer, { borderColor: theme.colors.primary }]}>
          <ActivityCard
            image={sensojiImage}
            title="Senso-ji Temple &"
            subtitle="Nakamise Shopping Street Senso-ji"
            timing="8:15 am Morning"
            duration="3 hours"
            pickup="From Hotel"
          />
          
          <ActivityCard
            image={skyTreeImage}
            title="Tokyo Sky Tree"
            timing="1:00 pm Afteroon"
            duration="3 hours"
            pickup="From Nakamise Street"
          />
          
          <ActivityCard
            image={kimonoImage}
            title="Kimono Wearing"
            timing="5:00 pm Evening"
            duration="2 hours"
            pickup="From Tokyo Sky Tree"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContent: {
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    seeAllText: {
      fontSize: 14,
      fontWeight: '600',
    },
    planCard: {
      borderRadius: 16,
      padding: 16,
      marginBottom: 20,
    },
    planHeader: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    dayPlanBadge: {
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginRight: 10,
    },
    dayPlanText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    activitiesBadge: {
      backgroundColor: 'rgba(35, 35, 35, 0.8)',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
    },
    activitiesText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    daysContainer: {
      flexDirection: 'row',
    },
    dayTab: {
      width: 60,
      height: 80,
      marginRight: 10,
      overflow: 'hidden',
    },
    dayTabContent: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeDayTab: {
      backgroundColor: '#C4FF4D',
    },
    monthText: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    dayNumber: {
      fontSize: 22,
      fontWeight: 'bold',
      marginVertical: 4,
    },
    dateText: {
      fontSize: 12,
    },
    activeText: {
      color: '#000000',
    },
    daySection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    dayBadge: {
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginRight: 12,
    },
    dayText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    activitiesCountBadge: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    personIcon: {
      fontSize: 16,
      marginRight: 4,
    },
    activitiesCountText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    cardContainer: {
      borderWidth: 1,
      borderRadius: 16,
      padding: 10,
      backgroundColor: 'transparent',
    },
    activityCard: {
      borderRadius: 12,
      marginBottom: 10,
      overflow: 'hidden',
    },
    activityImage: {
      width: '100%',
      height: 180,
      backgroundColor: '#333333', // Placeholder color while image loads
    },
    activityDetails: {
      padding: 16,
    },
    activityTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    activitySubtitle: {
      fontSize: 16,
      marginBottom: 8,
    },
    infoSection: {
      marginTop: 8,
    },
    activityInfo: {
      flexDirection: 'row',
      marginVertical: 4,
    },
    infoLabel: {
      fontSize: 14,
      width: 80,
      opacity: 0.8,
    },
    infoValue: {
      fontSize: 14,
      flex: 1,
    },
  });
  
  export default Homecom3;