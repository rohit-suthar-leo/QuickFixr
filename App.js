import React, { useState } from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  StatusBar, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Image
} from 'react-native';

// Simple icons using text representation (for demo)
const IconPlus = () => <Text style={styles.iconText}>+</Text>;
const IconBell = () => <Text style={styles.iconText}>🔔</Text>;
const IconSearch = () => <Text style={styles.iconText}>🔍</Text>;
const IconMenu = () => <Text style={styles.iconText}>≡</Text>;
const IconCheck = () => <Text style={styles.iconText}>✓</Text>;
const IconRepair = () => <Text style={styles.iconText}>🔧</Text>;
const IconCleaning = () => <Text style={styles.iconText}>🧹</Text>;
const IconPainting = () => <Text style={styles.iconText}>🖌️</Text>;
const IconPlumbing = () => <Text style={styles.iconText}>🚿</Text>;
const IconShare = () => <Text style={styles.iconText}>↗️</Text>;
const IconAdd = () => <Text style={styles.iconText}>+</Text>;
const IconHome = () => <Text style={styles.iconText}>🏠</Text>;
const IconExplore = () => <Text style={styles.iconText}>🔍</Text>;
const IconNotif = () => <Text style={styles.iconText}>🔔</Text>;
const IconProfile = () => <Text style={styles.iconText}>👤</Text>;

export default function App() {
  const [activeTab, setActiveTab] = useState('All');

  // Categories data
  const categories = [
    { id: '1', name: 'Repair', icon: '🔧', color: '#FA6F51' },
    { id: '2', name: 'Cleaning', icon: '🏠', color: '#F5F5F5' },
    { id: '3', name: 'Painting', icon: '🖌️', color: '#F5F5F5' },
    { id: '4', name: 'Plumbing', icon: '🚿', color: '#F5F5F5' },
    { id: '5', name: 'Laun', icon: '👕', color: '#F5F5F5' },
  ];

  // Expert data (mock)
  const experts = [
    {
      id: '1',
      name: 'Antony Jose',
      profession: 'Professional Painter',
      hourlyRate: 349,
      rating: '4.7',
      reviews: '5k',
      image: 'https://randomuser.me/api/portraits/men/36.jpg'
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFE8E0" />
      
      {/* Top section with peach/pink background */}
      <View style={styles.topSection}>
        <SafeAreaView>
          {/* Phone Status Bar (mock) */}
          <View style={styles.phoneStatusBar}>
            <Text style={styles.phoneTime}>12:33</Text>
            <View style={styles.phoneIcons}>
              <Text style={styles.phoneSignal}>●●●</Text>
              <Text style={styles.phoneWifi}>●●●</Text>
              <Text style={styles.phoneBattery}>●●●</Text>
            </View>
          </View>
        
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.logo}>SnapServe.</Text>
            <View style={styles.headerRight}>
              <View style={styles.combinedButton}>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificationButton}>
                  <Text style={styles.notificationIcon}>🔔</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="What service do you need?"
                placeholderTextColor="#999"
              />
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterIcon}>≡</Text>
            </TouchableOpacity>
          </View>

          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'All' && styles.activeTab]}
              onPress={() => setActiveTab('All')}
            >
              <View style={styles.checkIconContainer}>
                <Text style={styles.checkIcon}>✓</Text>
              </View>
              <Text style={[styles.tabText, activeTab === 'All' && styles.activeTabText]}>All</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Ongoing' && styles.activeTab]}
              onPress={() => setActiveTab('Ongoing')}
            >
              <Text style={[styles.tabText, activeTab === 'Ongoing' && styles.activeTabText]}>On Going Works</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>16</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Completed' && styles.activeTab]}
              onPress={() => setActiveTab('Completed')}
            >
              <Text style={[styles.tabText, activeTab === 'Completed' && styles.activeTabText]}>Completed Works</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContent}>
        {/* Ongoing Work Card */}
        <View style={styles.workCardContainer}>
          <View style={styles.workCard}>
            <View style={styles.workCardHeader}>
              <View style={styles.expertAvatar}>
                <Text style={styles.avatarText}>👷</Text>
              </View>
              <View style={styles.expertInfo}>
                <Text style={styles.expertNameWhite}>David Michel</Text>
                <View style={styles.expertProfession}>
                  <Text style={styles.professionIconWhite}>🖌️</Text>
                  <Text style={styles.professionTextWhite}>Professional Painter</Text>
                </View>
                <Text style={styles.rateTextWhite}>₹349/hrs</Text>
              </View>
            </View>

            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={styles.progressWhite} />
              </View>
              <View style={styles.progressInfo}>
                <View style={styles.checkmarkCircleWhite}>
                  <Text style={styles.checkmarkText}>✓</Text>
                </View>
                <Text style={styles.progressTextWhite}>75% Almost done!</Text>
              </View>
            </View>
          </View>

          {/* Ongoing Services Header */}
          <View style={styles.sectionHeader}>
            <View style={styles.sectionLeft}>
              <Text style={styles.toolsIcon}>✂️</Text>
              <Text style={styles.sectionTitle}>Ongoing Services</Text>
            </View>
            <View style={styles.sectionRight}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>16</Text>
              </View>
              <TouchableOpacity style={styles.seeAllButton}>
                <Text style={styles.seeAllText}>See all</Text>
                <Text style={styles.chevronRight}>›</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Pagination Dots */}
          <View style={styles.paginationDots}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Services Section */}
        <View style={styles.servicesSection}>
          <View style={styles.serviceSectionHeader}>
            <Text style={styles.sectionTitle}>Our Services</Text>
            <TouchableOpacity>
              <Text style={styles.moreOptions}>•••</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoriesContainer}>
            {categories.map((category, index) => (
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                <View style={[styles.categoryIcon, { backgroundColor: index === 0 ? category.color : '#F5F5F5' }]}>
                  <Text style={styles.categoryIconText}>{category.icon}</Text>
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Top Rated Works Section */}
        <View style={styles.ratedWorksSection}>
          <View style={styles.serviceSectionHeader}>
            <Text style={styles.sectionTitle}>Top Rated Works</Text>
            <TouchableOpacity>
              <Text style={styles.moreOptions}>•••</Text>
            </TouchableOpacity>
          </View>

          {/* Expert card */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.expertCardsScroll}>
            {experts.map(expert => (
              <View key={expert.id} style={styles.expertCard}>
                <View style={styles.expertCardLeft}>
                  <View style={styles.expertImage}>
                    {expert.image ? (
                      <Image source={{ uri: expert.image }} style={styles.expertImageReal} />
                    ) : (
                      <Text style={styles.avatarText}>AJ</Text>
                    )}
                  </View>
                  <View style={styles.expertRating}>
                    <Text style={styles.starIcon}>⭐</Text>
                    <Text style={styles.ratingText}>{expert.rating} ({expert.reviews})</Text>
                  </View>
                </View>
                <View style={styles.expertCardContent}>
                  <View style={styles.expertCardHeader}>
                    <View>
                      <Text style={styles.expertCardName}>{expert.name}</Text>
                      <View style={styles.expertProfession}>
                        <Text style={styles.professionIcon}>🖌️</Text>
                        <Text style={styles.professionText}>{expert.profession}</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.shareButton}>
                      <Text style={styles.shareIcon}>↗️</Text>
                    </TouchableOpacity>
                  </View>
                  
                  <View style={styles.expertCardActions}>
                    <TouchableOpacity style={styles.priceButton}>
                      <Text style={styles.priceText}>₹{expert.hourlyRate}/hrs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addToCartButton}>
                      <Text style={styles.addToCartIcon}>+</Text>
                    </TouchableOpacity>
                  </View>
                  
                  <TouchableOpacity style={styles.similarExpertsButton}>
                    <Text style={styles.similarIcon}>👥</Text>
                    <Text style={styles.similarText}>5+ Similar Experts</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={[styles.navText, { color: '#DA4B2C' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fabContainer}>
          <View style={styles.fab}>
            <Text style={styles.fabIcon}>🔄</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔔</Text>
          <Text style={styles.navText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topSection: {
    backgroundColor: '#FFE8E0', // Peach/pink background as shown in the image
    paddingBottom: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  phoneStatusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  phoneTime: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  phoneIcons: {
    flexDirection: 'row',
  },
  phoneSignal: {
    fontSize: 12,
    marginRight: 5,
  },
  phoneWifi: {
    fontSize: 12,
    marginRight: 5,
  },
  phoneBattery: {
    fontSize: 12,
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
    color: '#333',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  combinedButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#DA4B2C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  notificationButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    fontSize: 16,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  searchIcon: {
    fontSize: 16,
    color: '#999',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  filterButton: {
    width: 42,
    height: 42,
    backgroundColor: '#FFF5F2',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 20,
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5F2',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  activeTab: {
    backgroundColor: '#DA4B2C',
  },
  checkIconContainer: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  checkIcon: {
    color: '#DA4B2C',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabText: {
    color: '#333',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFF',
  },
  badge: {
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 5,
  },
  badgeText: {
    color: '#FF6B6B',
    fontSize: 12,
  },
  scrollContent: {
    flex: 1,
  },
  workCardContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  workCard: {
    backgroundColor: '#DA4B2C',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    shadowColor: 'rgba(0,0,0,0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  workCardHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  expertAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DA4B2C',
  },
  expertInfo: {
    flex: 1,
  },
  expertName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  expertNameWhite: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  expertProfession: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  professionIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  professionIconWhite: {
    fontSize: 14,
    marginRight: 5,
    color: '#FFFFFF',
  },
  professionText: {
    fontSize: 14,
    color: '#666',
  },
  professionTextWhite: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  rateText: {
    fontSize: 14,
    color: '#DA4B2C',
    fontWeight: '500',
  },
  rateTextWhite: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  progressContainer: {
    marginTop: 5,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
    marginBottom: 8,
  },
  progress: {
    width: '75%',
    height: '100%',
    backgroundColor: '#DA4B2C',
    borderRadius: 4,
  },
  progressWhite: {
    width: '75%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  progressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkmarkCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#DA4B2C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  checkmarkCircleWhite: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  checkmarkText: {
    color: '#DA4B2C',
    fontSize: 12,
    fontWeight: 'bold',
  },
  progressText: {
    color: '#DA4B2C',
    fontWeight: '500',
  },
  progressTextWhite: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolsIcon: {
    fontSize: 16,
    marginRight: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    color: '#333',
    fontSize: 14,
  },
  chevronRight: {
    color: '#333',
    fontSize: 16,
    marginLeft: 5,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#DA4B2C',
    width: 20,
  },
  servicesSection: {
    padding: 20,
  },
  serviceSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  moreOptions: {
    fontSize: 18,
    color: '#666',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  categoryCard: {
    width: '19%',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryIcon: {
    width: 55,
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIconText: {
    fontSize: 22,
  },
  categoryName: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  ratedWorksSection: {
    padding: 20,
    paddingTop: 0,
  },
  expertCardsScroll: {
    marginLeft: -5,
  },
  expertCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    width: 310,
    marginRight: 15,
    marginLeft: 5,
    overflow: 'hidden',
    shadowColor: 'rgba(0,0,0,0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  expertCardLeft: {
    height: 160,
    position: 'relative',
  },
  expertImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expertImageReal: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  expertRating: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  expertCardContent: {
    padding: 15,
  },
  expertCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  expertCardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  starIcon: {
    fontSize: 14,
    marginRight: 5,
    color: '#FDC741',
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  expertCardActions: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
  },
  priceButton: {
    backgroundColor: '#DA4B2C',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  priceText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  addToCartButton: {
    width: 30,
    height: 30,
    backgroundColor: '#DA4B2C',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartIcon: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  shareButton: {
    width: 30,
    height: 30,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareIcon: {
    fontSize: 16,
    color: '#666',
  },
  similarExpertsButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  similarIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  similarText: {
    fontSize: 14,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    color: '#999',
  },
  navIconActive: {
    fontSize: 20,
    color: '#DA4B2C',
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
    color: '#999',
  },
  fabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25,
  },
  fab: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DA4B2C',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#DA4B2C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  fabIcon: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
}); 