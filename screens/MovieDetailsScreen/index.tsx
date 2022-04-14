import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Pressable } from 'react-native'
import movie from '../../assets/data/movie'
import EpisodeItem from '../../components/EpisodeItem';
import { Text, View } from '../../components/Themed'
import VideoPlayer from '../../components/VideoPlayer';
import { Episode, Movie, Season } from '../../src/models';
import styles from './styles';

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeasons = movie.seasons.items[0];

const MovieDetailsScreen = () => {
    const [movie, setMovie] = useState<Movie | undefined>(undefined);
    const [seasons, setSeasons] = useState<Season[]>([]);
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    const [currentSeason, setCurrentSeason] = useState<Season | undefined>(undefined);
    const [currentEpisode, setCurrentEpisode] = useState<Episode | undefined>(undefined);

    const seasonNames = seasons ? seasons.map(item => item.name) : [];


    const route = useRoute();

    useEffect(() => {
        const fetchMovie = async () => {
            setMovie(await DataStore.query(Movie, route?.params?.id))
        }
        fetchMovie();
    }, [])

    useEffect(() => {
        if (movie) {
            const fetchSeasons = async () => {
                const movieSeasons = (await DataStore.query(Season)).filter(season => season.movie?.id === movie.id);
                setSeasons(movieSeasons);
                setCurrentSeason(movieSeasons[0])
            }
            fetchSeasons();
        }
    }, [movie])

    useEffect(() => {
        if (currentSeason) {
            const fetchEpisodes = async () => {
                const seasonEpisodes = (await DataStore.query(Episode)).filter(episode => episode.season?.id === currentSeason.id);
                setEpisodes(seasonEpisodes);
                setCurrentEpisode(seasonEpisodes[0])
            }
            fetchEpisodes();
        }
    }, [currentSeason])

    if (!movie) { return <ActivityIndicator /> }
    console.log(seasonNames)
    return (
        <View>
            {currentEpisode && <VideoPlayer episode={currentEpisode} />}
            <FlatList
                data={episodes}
                renderItem={({ item }) => (<EpisodeItem onPress={setCurrentEpisode} episode={item} />)}
                style={{ marginBottom: 250 }}
                ListHeaderComponent={(<View style={{ padding: 12 }}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.match}>98% match</Text>
                        <Text style={styles.year}>{movie.year}</Text>
                        <View style={styles.ageContainer}>
                            <Text style={styles.age}>{12}+</Text>
                        </View>
                        <Text style={styles.year}>{movie.numberOfSeasons} seasons</Text>
                        <MaterialIcons name="hd" size={24} color="white" />
                    </View>
                    <Pressable onPress={() => { }} style={styles.playButton}>
                        <Text style={styles.playButtonText}>
                            <Entypo name="controller-play" size={16} color="black" />
                            {" "}
                            Play
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => { }} style={styles.downloadButton}>
                        <Text style={styles.downloadButtonText}>
                            <AntDesign name="download" size={16} color="white" />
                            {" "}
                            Download
                        </Text>
                    </Pressable>
                    <Text style={{ marginVertical: 10 }}>
                        {movie.plot}
                    </Text>
                    <Text style={styles.year}>
                        Cast : {movie.cast}
                    </Text>
                    <Text style={styles.year}>
                        Creator : {movie.creator}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                            <AntDesign name="plus" size={24} color="white" />
                            <Text style={{ color: "darkgrey", marginTop: 5 }} >My List</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                            <Feather name="thumbs-up" size={24} color="white" />
                            <Text style={{ color: "darkgrey", marginTop: 5 }} >Rate</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                            <FontAwesome name="send-o" size={24} color="white" />
                            <Text style={{ color: "darkgrey", marginTop: 5 }} >Share</Text>
                        </View>
                    </View>
                    {currentEpisode && <Picker dropdownIconColor={"white"} style={{ width: 130, color: "white" }}
                        selectedValue={currentSeason.name}
                        onValueChange={(itemValue, itemIndex) => { setCurrentSeason(seasons[itemIndex]) }} >
                        {
                            seasonNames.map(season => (<Picker.Item label={season} value={season} key={season} />))}
                    </Picker>}
                </View>)
                }
            />
        </View >
    )
}

export default MovieDetailsScreen
