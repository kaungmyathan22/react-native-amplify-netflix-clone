import { FlatList, Image, Text } from 'react-native';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';
import { View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import styles from './styles';

const firstItem = categories.items[0];
export default function HomeScreen ({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <FlatList data={categories.items} renderItem={({ item }) => (<HomeCategory category={item} />)} />
        </View >
    );
}
