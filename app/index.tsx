import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, VirtualizedList } from 'react-native';
import ApartmentListJson from '../data/aqaarmap.json';
import { Apartment } from '../types/apartment';
import MiniApartmentCard from '../components/miniApartmentCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const apartments: Apartment[] = ApartmentListJson as Apartment[];


  const renderItem = ({ item, index }: {
    item: Apartment;
    index: number;
  }) => (
    <Link href={"/" + index} >
        <MiniApartmentCard apartment={item} />
    </Link>
  )

  return (
    <SafeAreaView style={styles.container}>

      <VirtualizedList
        initialNumToRender={10}
        renderItem={renderItem}
        keyExtractor={(_,index) => index.toString()}
        data={apartments}
        getItemCount={() => apartments.length}
        getItem={(data, index) => data[index]}
      />
  
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexShrink: 1,
  },
});
