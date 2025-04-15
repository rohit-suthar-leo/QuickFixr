import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/theme';

const ExpertCard = ({ expert, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.expertCardContent}>
        <Image source={expert.image} style={styles.expertImage} />
        <View style={styles.expertInfo}>
          <Text style={styles.expertName}>{expert.name}</Text>
          <View style={styles.professionRow}>
            <Icon name={expert.serviceIcon || 'person-outline'} size={14} color={COLORS.primary} />
            <Text style={styles.profession}>{expert.profession}</Text>
          </View>
          <Text style={styles.rate}>₹{expert.hourlyRate}/hrs</Text>
          
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFC107" />
            <Text style={styles.ratingText}>{expert.rating} ({expert.reviews.toLocaleString()})</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="share-social-outline" size={18} color={COLORS.gray} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={18} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
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
  expertInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  expertName: {
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
  profession: {
    fontSize: 14,
    color: COLORS.gray,
    marginLeft: 5,
  },
  rate: {
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
  actionsContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  actionButton: {
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
});

export default ExpertCard; 