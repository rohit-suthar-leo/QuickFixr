import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/theme';

const ProfileScreen = () => {
  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    profilePic: require('../../assets/user-profile.png'),
    bookingsCount: 8,
    favoriteExperts: 4,
  };

  // Recent bookings data
  const recentBookings = [
    {
      id: '1',
      service: 'House Painting',
      expert: 'Julian Marcu Elian',
      date: 'Mar 15, 2023',
      status: 'completed',
      amount: 3490,
    },
    {
      id: '2',
      service: 'Plumbing Repair',
      expert: 'Alex Smith',
      date: 'Feb 28, 2023',
      status: 'completed',
      amount: 1200,
    },
    {
      id: '3',
      service: 'Cleaning Service',
      expert: 'Maria Garcia',
      date: 'Jan 12, 2023',
      status: 'cancelled',
      amount: 1800,
    },
  ];

  // Settings options
  const settingsOptions = [
    { id: '1', icon: 'person-outline', title: 'Edit Profile', chevron: true },
    { id: '2', icon: 'card-outline', title: 'Payment Methods', chevron: true },
    { id: '3', icon: 'location-outline', title: 'Addresses', chevron: true },
    { id: '4', icon: 'notifications-outline', title: 'Notifications', chevron: true },
    { id: '5', icon: 'language-outline', title: 'Language', value: 'English', chevron: true },
    { id: '6', icon: 'help-circle-outline', title: 'Help & Support', chevron: true },
    { id: '7', icon: 'log-out-outline', title: 'Log Out', color: '#FF5252', chevron: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Icon name="settings-outline" size={24} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image source={user.profilePic} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{user.name}</Text>
            <Text style={styles.profileEmail}>{user.email}</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Icon name="create-outline" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Icon name="calendar-outline" size={24} color={COLORS.primary} />
            <Text style={styles.statValue}>{user.bookingsCount}</Text>
            <Text style={styles.statLabel}>Bookings</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statCard}>
            <Icon name="heart-outline" size={24} color={COLORS.primary} />
            <Text style={styles.statValue}>{user.favoriteExperts}</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
        </View>

        {/* Bookings Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Bookings</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          {recentBookings.map((booking) => (
            <View key={booking.id} style={styles.bookingCard}>
              <View style={styles.bookingInfo}>
                <Text style={styles.bookingService}>{booking.service}</Text>
                <Text style={styles.bookingExpert}>by {booking.expert}</Text>
                <View style={styles.bookingDetails}>
                  <Icon name="calendar-outline" size={14} color={COLORS.gray} />
                  <Text style={styles.bookingDate}>{booking.date}</Text>
                  <View 
                    style={[
                      styles.statusBadge, 
                      { 
                        backgroundColor: booking.status === 'completed' 
                          ? 'rgba(76, 175, 80, 0.1)' 
                          : 'rgba(255, 82, 82, 0.1)' 
                      }
                    ]}
                  >
                    <Text 
                      style={[
                        styles.statusText, 
                        { 
                          color: booking.status === 'completed' 
                            ? '#4CAF50' 
                            : '#FF5252' 
                        }
                      ]}
                    >
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.bookingAmount}>₹{booking.amount}</Text>
            </View>
          ))}
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          {settingsOptions.map((option) => (
            <TouchableOpacity key={option.id} style={styles.settingOption}>
              <View style={styles.settingLeft}>
                <Icon 
                  name={option.icon} 
                  size={22} 
                  color={option.color || COLORS.text} 
                />
                <Text 
                  style={[
                    styles.settingTitle, 
                    option.color ? { color: option.color } : null
                  ]}
                >
                  {option.title}
                </Text>
              </View>
              
              <View style={styles.settingRight}>
                {option.value && (
                  <Text style={styles.settingValue}>{option.value}</Text>
                )}
                {option.chevron && (
                  <Icon name="chevron-forward" size={18} color={COLORS.gray} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* App Version */}
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.white,
    marginBottom: 15,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: COLORS.gray,
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    marginBottom: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statCard: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#EEEEEE',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 5,
  },
  section: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 15,
  },
  seeAllText: {
    fontSize: 14,
    color: COLORS.primary,
  },
  bookingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  bookingInfo: {
    flex: 1,
  },
  bookingService: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 5,
  },
  bookingExpert: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 5,
  },
  bookingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookingDate: {
    fontSize: 13,
    color: COLORS.gray,
    marginLeft: 5,
    marginRight: 10,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  bookingAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingTitle: {
    fontSize: 16,
    color: COLORS.text,
    marginLeft: 15,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: 14,
    color: COLORS.gray,
    marginRight: 10,
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.gray,
    marginVertical: 20,
  },
});

export default ProfileScreen; 