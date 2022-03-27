import React from 'react';
import styles from './styles';
import { FlatList, Image, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface MovieProps {
    id: string;
    poster: string;
}

interface HomeCategoryProps {
    category: {
        id: string;
        title: string;
        movies: MovieProps[];
        casts: string[];
    }
}

const HomeCategory = ({ category }: HomeCategoryProps) => {

    const navigation = useNavigation();

    const onMoviePress = (movie: MovieProps) => {
        navigation.navigate('MovieDetails', { id: movie.id })
    }

    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                horizontal
                data={category.movies}
                renderItem={({ item }) => (<Pressable onPress={() => onMoviePress(item)}><Image style={styles.image} source={{ uri: item.poster }} /></Pressable>)}
            />
        </>
    )
}

export default HomeCategory