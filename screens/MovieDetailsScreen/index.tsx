import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { FlatList, Image, Pressable } from 'react-native'
import movie from '../../assets/data/movie'
import EpisodeItem from '../../components/EpisodeItem';
import { Text, View } from '../../components/Themed'
import styles from './styles';

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeasons = movie.seasons.items[0];

const MovieDetailsScreen = () => {
    const [currentSeason, setcurrentSeason] = useState(firstSeasons)
    const seasonNames = movie.seasons.items.map(item => item.name)
    return (
        <View>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
            <FlatList
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
                    <Picker dropdownIconColor={"white"} style={{ width: 130, color: "white" }} selectedValue={currentSeason.name} onValueChange={(itemValue, itemIndex) => { setcurrentSeason(movie.seasons.items[itemIndex]) }} >
                        {seasonNames.map(season => (<Picker.Item label={season} value={season} key={season} />))}
                    </Picker>
                </View>)
                }

                data={firstSeasons.episodes.items}
                renderItem={({ item }) => (<EpisodeItem episode={item} />)} />
        </View >
    )
}

export default MovieDetailsScreen
