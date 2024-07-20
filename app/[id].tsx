import { useLocalSearchParams, router } from 'expo-router';
import { Button } from 'react-native';
import { Apartment } from '../types/apartment';
import ApartmentListJson from '../data/aqaarmap.json';
import ApartmentDetails from '../components/detailsApartmentCard';
export default function Page() {
    const apartments: Apartment[] = ApartmentListJson as Apartment[];
    
    const { id } = useLocalSearchParams();
    
    const selectedApartment = apartments[parseInt(id as string)];
    return (
        <>
            <Button title="Back" onPress={() => router.back()} />
            <ApartmentDetails apartment={selectedApartment} />
        </>
    );
}