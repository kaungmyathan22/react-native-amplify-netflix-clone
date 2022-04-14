import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import styles from './styles';
import { Episode } from '../../src/models';

interface VideoPlayerProps {
    episode: Episode;
}

const VideoPlayer = ({ episode }: VideoPlayerProps) => {

    const [status, setStatus] = useState({});

    const video = useRef<Video>(null);

    useEffect(() => {
        if (!video) { return; }
        (async () => {
            await video.current?.loadAsync({ uri: episode.video }, {}, false);
        })();
    }, [episode])


    return (
        <Video
            posterStyle={{ resizeMode: 'cover' }}
            usePoster={true}
            posterSource={{ uri: episode.poster }}
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            resizeMode="contain"
            style={styles.video}
            useNativeControls
            isLooping
            source={{ uri: episode.video }} ref={video} />
    )
}

export default VideoPlayer