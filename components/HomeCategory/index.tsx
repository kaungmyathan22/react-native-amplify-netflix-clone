import React from 'react';
import styles from './styles';
import { FlatList, Image, Text } from 'react-native';

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
    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList horizontal data={category.movies} renderItem={({ item }) => (<Image style={styles.image} source={{ uri: item.poster }} />)} />
        </>
    )
}

export default HomeCategory