import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Apartment } from '../types/apartment';

interface MiniApartmentCardProps {
    apartment: Apartment;
}

const MiniApartmentCard: React.FC<MiniApartmentCardProps> = ({ apartment }) => {
    return (
        <View style={styles.container}>
                <Text style={styles.title} numberOfLines={2}>
                    {apartment.title}
                </Text>
                <Text style={styles.price}>
                    {`${apartment.price} ${apartment.currency}`}
                </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        shadowRadius: 2,
        flexShrink: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        flex: 1,
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
});

export default MiniApartmentCard;