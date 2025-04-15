import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants/theme';

const TABS = ['About', 'Availability', 'Experience', 'Reviews'];

const ExpertProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState('About');
  
  // Sample expert data - in real app, would come from route.params or API
  const expert = {
    id: '1',
    name: 'Julian Marcu Elian',
    profession: 'Painter',
    additionalRole: 'Builder',
    hourlyRate: 349,
    teamRate: 1049,
    teamHours: '4 - 5hrs',
    rating: 4.8,
    reviews: 5000,
    experience: 13,
    customers: 2000,
    image: require('../../assets/expert1.png'),
    description: 'Julian Marcu Elian is a highly skilled, professional painter with over 13 years of experience in residential and commercial painting. His expertise includes interior and exterior finishing techniques, color consulting, and surface preparation.',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color={COLORS.text} />
          </TouchableOpacity>
          
          <View style={styles.searchContainer}>
            <Icon name="search" size={20} color={COLORS.gray} />
            <Text style={styles.searchText}>Search...</Text>
          </View>

          <View style={styles.headerRight}>
            <View style={styles.categoryContainer}>
              <Icon name="brush" size={20} color={COLORS.primary} />
              <Text style={styles.categoryText}>Painter</Text>
            </View>

            <TouchableOpacity style={styles.shareButton}>
              <Icon name="share-social-outline" size={20} color={COLORS.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Expert Badge */}
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Best Top Painter</Text>
        </View>

        {/* Expert Info */}
        <View style={styles.expertInfoContainer}>
          <Text style={styles.expertName}>{expert.name}</Text>
          <View style={styles.professionContainer}>
            <Text style={styles.profession}>{expert.profession} • {expert.additionalRole}</Text>
          </View>
        </View>

        {/* Rate Section */}
        <View style={styles.rateContainer}>
          <Text style={styles.rateSymbol}>₹</Text>
          <Text style={styles.rateValue}>{expert.hourlyRate}</Text>
          <Text style={styles.rateUnit}>/hrs</Text>
        </View>

        {/* Reviews */}
        <View style={styles.reviewsContainer}>
          <View style={styles.avatarGroup}>
            {/* This would be multiple avatars in a real app */}
            <Image source={require('../../assets/expert1.png')} style={styles.reviewAvatar} />
            <Image source={require('../../assets/expert1.png')} style={[styles.reviewAvatar, { marginLeft: -15 }]} />
            <Image source={require('../../assets/expert1.png')} style={[styles.reviewAvatar, { marginLeft: -15 }]} />
          </View>
          <Text style={styles.reviewsText}>{expert.reviews.toLocaleString()}+ Reviews</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Icon name="briefcase-outline" size={24} color={COLORS.primary} />
            <Text style={styles.statValue}>{expert.experience} yrs</Text>
            <Text style={styles.statLabel}>Experience</Text>
          </View>

          <View style={styles.statCard}>
            <Icon name="star" size={24} color="#FFC107" />
            <Text style={styles.statValue}>{expert.rating}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>

          <View style={styles.statCard}>
            <Icon name="people-outline" size={24} color={COLORS.primary} />
            <Text style={styles.statValue}>{expert.customers.toLocaleString()}+</Text>
            <Text style={styles.statLabel}>Customers</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabsScrollContent}
          >
            {TABS.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Tab Content */}
        <View style={styles.tabContent}>
          {activeTab === 'About' && (
            <View>
              <Text style={styles.contentTitle}>Description</Text>
              <Text style={styles.descriptionText}>
                {expert.description}
                <Text style={styles.readMore}> Read More</Text>
              </Text>
            </View>
          )}

          {activeTab === 'Availability' && (
            <View>
              <Text style={styles.contentTitle}>Availability</Text>
              <Text style={styles.availabilityText}>
                Available Monday-Saturday, 8AM-5PM
              </Text>
            </View>
          )}

          {activeTab === 'Experience' && (
            <View>
              <Text style={styles.contentTitle}>Work Experience</Text>
              <Text style={styles.experienceText}>
                {expert.experience} years of professional experience in residential and commercial projects.
              </Text>
            </View>
          )}

          {activeTab === 'Reviews' && (
            <View>
              <Text style={styles.contentTitle}>Client Reviews</Text>
              <Text style={styles.reviewsText}>
                {expert.reviews.toLocaleString()}+ positive reviews from satisfied customers.
              </Text>
            </View>
          )}
        </View>

        {/* Pricing Cards */}
        <View style={styles.pricingContainer}>
          <View style={styles.pricingCard}>
            <Icon name="cash-outline" size={24} color={COLORS.text} />
            <Text style={styles.pricingTitle}>Hourly Fee</Text>
            <Text style={styles.pricingValue}>₹{expert.hourlyRate}.00</Text>
          </View>

          <View style={styles.pricingCard}>
            <Icon name="people-outline" size={24} color={COLORS.text} />
            <Text style={styles.pricingTitle}>Team Works</Text>
            <Text style={styles.pricingValue}>₹{expert.teamRate}.00</Text>
            <Text style={styles.pricingHours}>({expert.teamHours})</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.hireButton}>
          <Icon name="construct-outline" size={20} color={COLORS.white} />
          <Text style={styles.hireButtonText}>Hire Julian</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatButton}>
          <Icon name="chatbubble-outline" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  searchText: {
    marginLeft: 10,
    color: COLORS.gray,
    fontSize: 16,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginRight: 10,
  },
  categoryText: {
    marginLeft: 5,
    color: COLORS.text,
    fontWeight: '500',
  },
  shareButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  badgeContainer: {
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: 'rgba(218, 75, 44, 0.1)',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  badgeText: {
    color: COLORS.primary,
    fontWeight: '500',
    fontSize: 14,
  },
  expertInfoContainer: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  expertName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  professionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  profession: {
    fontSize: 16,
    color: COLORS.gray,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginHorizontal: 20,
    marginTop: 15,
  },
  rateSymbol: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  rateValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginLeft: 2,
  },
  rateUnit: {
    fontSize: 16,
    color: COLORS.primary,
    marginLeft: 2,
  },
  reviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15,
  },
  avatarGroup: {
    flexDirection: 'row',
    marginRight: 10,
  },
  reviewAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  reviewsText: {
    fontSize: 14,
    color: COLORS.gray,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 25,
  },
  statCard: {
    width: '30%',
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
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
  tabsContainer: {
    marginTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  tabsScrollContent: {
    paddingHorizontal: 20,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginRight: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    fontSize: 16,
    color: COLORS.gray,
    fontWeight: '500',
  },
  activeTabText: {
    color: COLORS.text,
    fontWeight: 'bold',
  },
  tabContent: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: COLORS.gray,
    lineHeight: 22,
  },
  readMore: {
    color: COLORS.primary,
    fontWeight: '500',
  },
  availabilityText: {
    fontSize: 14,
    color: COLORS.gray,
    lineHeight: 22,
  },
  experienceText: {
    fontSize: 14,
    color: COLORS.gray,
    lineHeight: 22,
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 100,
  },
  pricingCard: {
    width: '48%',
    padding: 15,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
    alignItems: 'center',
  },
  pricingTitle: {
    fontSize: 16,
    color: COLORS.gray,
    marginTop: 8,
  },
  pricingValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 5,
  },
  pricingHours: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 2,
  },
  actionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  hireButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  hireButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  chatButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});

export default ExpertProfileScreen; 