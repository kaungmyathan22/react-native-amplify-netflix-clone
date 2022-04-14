import React, { useEffect, useState } from 'react';
import styles from './styles';
import { FlatList, Image, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Category, Episode, Movie, Season } from '../../src/models';
import { DataStore } from 'aws-amplify';

interface HomeCategoryProps {
    category: Category;
}

const HomeCategory = ({ category }: HomeCategoryProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const navigation = useNavigation();

    useEffect(() => {
        const fetchMovies = async () => {
            const result = (await DataStore.query(Movie))
                .filter(movie => movie?.category?.id === category.id);
            setMovies(result)
        }
        fetchMovies();
    }, [])


    const onMoviePress = (movie: Movie) => {
        navigation.navigate('MovieDetails', { id: movie.id })
    }

    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                horizontal
                data={movies}
                renderItem={({ item }) => (<Pressable onPress={() => onMoviePress(item)}><Image style={styles.image} source={{ uri: item.poster }} /></Pressable>)}
            />
        </>
    )
}

export default HomeCategory