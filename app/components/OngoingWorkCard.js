import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/theme';

const OngoingWorkCard = ({ work, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Image source={work.expertImage} style={styles.expertImage} />
        <View style={styles.expertInfo}>
          <Text style={styles.expertName}>{work.expertName}</Text>
          <View style={styles.professionContainer}>
            <Icon 
              name={work.serviceIcon || 'construct-outline'} 
              size={14} 
              color={COLORS.primary} 
            />
            <Text style={styles.profession}>{work.profession}</Text>
          </View>
          <Text style={styles.rate}>₹{work.hourlyRate}/hrs</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progress, 
              { width: `${work.progressPercentage}%` }
            ]} 
          />
        </View>
        <View style={styles.progressInfo}>
          <Icon name="checkmark-circle" size={16} color={COLORS.primary} />
          <Text style={styles.progressText}>
            {work.progressPercentage}% {work.progressStatus}
          </Text>
        </View>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  expertImage: {
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
});

export default OngoingWorkCard; 