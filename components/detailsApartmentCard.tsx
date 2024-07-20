import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// Assuming Currency and SquareMeasure are imported or defined elsewhere
import { Apartment } from '../types/apartment';
import { Currency } from '../types/currency.enum';

const ApartmentDetails: React.FC<{ apartment: Apartment }> = ({ apartment }) => {
  // Helper function to format price with currency
  const formatPrice = (price: number, currency: Currency) => {
    // This can be expanded to format based on currency
    return `${currency} ${price.toFixed(2)}`;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{apartment.title}</Text>
        <Text style={styles.price}>{formatPrice(apartment.price, apartment.currency)}</Text>
        <Text style={styles.description}>{apartment.description}</Text>
        <Text style={styles.info}>Address: {apartment.address}</Text>
        <Text style={styles.info}>Phone: {apartment.phone}</Text>
        <Text style={styles.info}>Square: {apartment.square} {apartment.squareMeasure}</Text>
        <Text style={styles.info}>Bedrooms: {apartment.bedRooms}</Text>
        <Text style={styles.info}>Bathrooms: {apartment.bathrooms}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default ApartmentDetails;