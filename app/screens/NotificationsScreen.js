import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/theme';

const NotificationsScreen = () => {
  // Sample notification data
  const notifications = [
    {
      id: '1',
      type: 'booking_confirmed',
      title: 'Booking Confirmed',
      message: 'Your booking with David Michel has been confirmed for tomorrow at 10:00 AM.',
      time: '2 hours ago',
      read: false,
      icon: 'checkmark-circle',
      color: '#4CAF50',
    },
    {
      id: '2',
      type: 'service_completed',
      title: 'Service Completed',
      message: 'Julian Marcu Elian has completed the painting service. Please rate your experience.',
      time: 'Yesterday',
      read: false,
      icon: 'star',
      color: '#FFC107',
    },
    {
      id: '3',
      type: 'payment_success',
      title: 'Payment Successful',
      message: 'Your payment of ₹1,745 for plumbing services has been processed successfully.',
      time: '2 days ago',
      read: true,
      icon: 'card',
      color: COLORS.primary,
    },
    {
      id: '4',
      type: 'special_offer',
      title: 'Special Offer',
      message: 'Get 15% off on your next booking. Valid for the next 7 days.',
      time: '1 week ago',
      read: true,
      icon: 'gift',
      color: '#E91E63',
    },
    {
      id: '5',
      type: 'service_reminder',
      title: 'Service Reminder',
      message: 'Your cleaning service is scheduled for tomorrow at 9:00 AM.',
      time: '1 week ago',
      read: true,
      icon: 'alarm',
      color: '#2196F3',
    },
  ];

  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity style={[styles.notificationItem, item.read ? styles.readNotification : null]}>
      {!item.read && <View style={styles.unreadDot} />}
      <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
        <Icon name={item.icon} size={24} color={item.color} />
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="settings-outline" size={22} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={styles.activeFilterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Payments</Text>
        </TouchableOpacity>
      </View>

      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderNotificationItem}
          contentContainerStyle={styles.notificationsList}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Icon name="notifications-off-outline" size={60} color={COLORS.gray} />
          <Text style={styles.emptyText}>No notifications yet</Text>
          <Text style={styles.emptySubText}>
            You'll receive notifications about your bookings, services, and special offers here.
          </Text>
        </View>
      )}
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
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
  },
  activeFilter: {
    backgroundColor: COLORS.primary,
  },
  filterText: {
    color: COLORS.gray,
    fontSize: 14,
  },
  activeFilterText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '500',
  },
  notificationsList: {
    paddingVertical: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
  },
  readNotification: {
    opacity: 0.8,
  },
  unreadDot: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 5,
    lineHeight: 20,
  },
  notificationTime: {
    fontSize: 12,
    color: '#9E9E9E',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 20,
    marginBottom: 10,
  },
  emptySubText: {
    fontSize: 14,
    color: COLORS.gray,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default NotificationsScreen; 