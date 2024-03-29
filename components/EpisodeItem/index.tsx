import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Image, Pressable } from 'react-native'
import { Episode } from '../../src/models'
import { Text, View } from '../Themed'
import styles from './styles'

interface IEpisodeItemProps {
    episode: Episode;
    onPress: (episode: Episode) => void;
}

const EpisodeItem = ({ episode, onPress }: IEpisodeItemProps) => {
    return (
        <Pressable onPress={() => onPress(episode)} style={{ margin: 10 }}>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: episode.poster }} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>
                </View>
                <AntDesign name="download" size={24} color="white" />
            </View>
            <Text style={styles.plot}>{episode.plot}</Text>
        </Pressable>
    )
}

export default EpisodeItem
