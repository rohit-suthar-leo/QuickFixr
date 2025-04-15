import React, { useState } from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Image,
  StyleSheet,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

// Components
import ServiceCard from '../components/ServiceCard';
import OngoingWorkCard from '../components/OngoingWorkCard';
import ExpertCard from '../components/ExpertCard';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('All');
  
  // Mock data - would normally come from an API
  const categories = [
    {
      id: '1',
      icon: 'construct',
      title: 'Repair',
      color: COLORS.primary,
    },
    {
      id: '2',
      icon: 'home',
      title: 'Cleaning',
      color: '#4A90E2',
    },
    {
      id: '3',
      icon: 'brush',
      title: 'Painting',
      color: '#FDC741',
    },
    {
      id: '4',
      icon: 'water',
      title: 'Plumbing',
      color: '#6DD5ED',
    },
  ];
  
  const experts = [
    {
      id: '1',
      name: 'Antony Jose',
      profession: 'Professional Painter',
      hourlyRate: 349,
      rating: 4.7,
      reviews: 5000,
      image: require('../../assets/expert1.png'),
    },
    {
      id: '2',
      name: 'David Michel',
      profession: 'Professional Painter',
      hourlyRate: 349,
      rating: 4.8,
      reviews: 3200,
      image: require('../../assets/expert2.png'),
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>SnapServe.</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="add" size={22} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationIcon}>
              <Icon name="notifications-outline" size={24} color={COLORS.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Icon name="search" size={20} color={COLORS.gray} />
            <TextInput
              style={styles.searchInput}
              placeholder="What service do you need?"
              placeholderTextColor={COLORS.gray}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="options-outline" size={20} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'All' && styles.activeTab]}
            onPress={() => setActiveTab('All')}
          >
            <Icon name="checkmark-circle" size={16} color={activeTab === 'All' ? COLORS.white : COLORS.primary} />
            <Text style={[styles.tabText, activeTab === 'All' && styles.activeTabText]}>All</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Ongoing' && styles.activeTab, styles.ongoingTab]}
            onPress={() => setActiveTab('Ongoing')}
          >
            <Text style={[styles.tabText, activeTab === 'Ongoing' && styles.activeTabText]}>On Going Works</Text>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>13</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Completed' && styles.activeTab]}
            onPress={() => setActiveTab('Completed')}
          >
            <Text style={[styles.tabText, activeTab === 'Completed' && styles.activeTabText]}>Completed Works</Text>
          </TouchableOpacity>
        </View>

        {/* Ongoing Work Card */}
        <View style={styles.ongoingCardContainer}>
          <View style={styles.ongoingCard}>
            <View style={styles.ongoingHeader}>
              <Image 
                source={require('../../assets/expert1.png')} 
                style={styles.expertAvatar}
              />
              <View style={styles.expertInfo}>
                <Text style={styles.expertName}>David Michel</Text>
                <View style={styles.professionContainer}>
                  <Icon name="brush-outline" size={14} color={COLORS.primary} />
                  <Text style={styles.profession}>Professional Painter</Text>
                </View>
                <Text style={styles.rate}>₹349/hrs</Text>
              </View>
            </View>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: '75%' }]} />
              </View>
              <View style={styles.progressInfo}>
                <Icon name="checkmark-circle" size={16} color={COLORS.primary} />
                <Text style={styles.progressText}>75% Almost done!</Text>
              </View>
            </View>
          </View>

          {/* Ongoing Services Section */}
          <View style={styles.serviceSectionHeader}>
            <View style={styles.sectionWithIcon}>
              <Icon name="construct-outline" size={18} color={COLORS.primary} />
              <Text style={styles.sectionTitle}>Ongoing Services</Text>
            </View>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>13</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
              <Icon name="chevron-forward" size={16} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Our Services */}
        <View style={styles.servicesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Services</Text>
            <TouchableOpacity>
              <Icon name="ellipsis-horizontal" size={20} color={COLORS.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                  <Icon name={category.icon} size={24} color={COLORS.white} />
                </View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Top Rated Works */}
        <View style={styles.topRatedSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Rated Works</Text>
            <TouchableOpacity>
              <Icon name="ellipsis-horizontal" size={20} color={COLORS.text} />
            </TouchableOpacity>
          </View>

          {/* Expert cards */}
          {experts.map((expert) => (
            <TouchableOpacity 
              key={expert.id} 
              style={styles.expertCard}
              onPress={() => navigation.navigate('ExpertProfile', { expert })}
            >
              <View style={styles.expertCardContent}>
                <Image source={expert.image} style={styles.expertImage} />
                <View style={styles.expertCardInfo}>
                  <Text style={styles.expertCardName}>{expert.name}</Text>
                  <View style={styles.professionRow}>
                    <Icon name="brush-outline" size={14} color={COLORS.primary} />
                    <Text style={styles.expertCardProfession}>{expert.profession}</Text>
                  </View>
                  <Text style={styles.expertCardRate}>₹{expert.hourlyRate}/hrs</Text>
                  
                  <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="#FFC107" />
                    <Text style={styles.ratingText}>{expert.rating} ({expert.reviews})</Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.expertCardActions}>
                <TouchableOpacity style={styles.shareButton}>
                  <Icon name="share-social-outline" size={18} color={COLORS.gray} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton}>
                  <Icon name="add" size={18} color={COLORS.white} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="construct" size={24} color={COLORS.white} />
      </TouchableOpacity>
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
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationIcon: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: COLORS.text,
  },
  filterButton: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: COLORS.white,
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.text,
  },
  activeTabText: {
    color: COLORS.white,
  },
  ongoingTab: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countBadge: {
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
  },
  countText: {
    color: '#FF6B6B',
    fontSize: 12,
    fontWeight: '500',
  },
  ongoingCardContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  ongoingCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
  },
  ongoingHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  expertAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  expertInfo: {
    flex: 1,
  },
  expertName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  professionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  profession: {
    fontSize: 14,
    color: COLORS.gray,
    marginLeft: 5,
  },
  rate: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primary,
  },
  progressContainer: {
    marginTop: 5,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    marginBottom: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  progressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    marginLeft: 5,
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '500',
  },
  serviceSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginLeft: 10,
  },
  seeAll: {
    fontSize: 14,
    color: COLORS.primary,
  },
  servicesSection: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  categoryCard: {
    width: '23%',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 14,
    color: COLORS.text,
    textAlign: 'center',
  },
  topRatedSection: {
    padding: 20,
  },
  expertCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expertCardContent: {
    flexDirection: 'row',
    flex: 1,
  },
  expertImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  expertCardInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  expertCardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  professionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  expertCardProfession: {
    fontSize: 14,
    color: COLORS.gray,
    marginLeft: 5,
  },
  expertCardRate: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primary,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: COLORS.gray,
    marginLeft: 5,
  },
  expertCardActions: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  shareButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default HomeScreen; 