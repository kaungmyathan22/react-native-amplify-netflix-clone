import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';
import styles from './styles';
import { Category } from '../../src/models';
import { DataStore } from 'aws-amplify';
import { FlatList, Image, Text } from 'react-native';
import { RootTabScreenProps } from '../../types';
import { useEffect, useState } from 'react';
import { View } from '../../components/Themed';

const firstItem = categories.items[0];
export default function HomeScreen ({ navigation }: RootTabScreenProps<'Home'>) {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await DataStore.query(Category)
            console.log(response);
            setCategories(response)
        }
        fetchCategories()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList data={categories} renderItem={({ item }) => (<HomeCategory category={item} />)} />
        </View >
    );
}
