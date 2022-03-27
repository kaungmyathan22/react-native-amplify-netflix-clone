import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 16 / 9,
        resizeMode: "cover",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    match: {
        color: "#59d467",
        fontWeight: "bold",
        marginRight: 5,
    },
    year: {
        color: "#757575"
    },
    ageContainer: {
        backgroundColor: "#e6e229",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        paddingHorizontal: 4,
        marginRight: 5,
    },
    age: {
        color: "black",
        fontWeight: "bold",
    },
    playButton: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 3,
        marginVertical: 8,
    },
    playButtonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    downloadButton: {
        backgroundColor: "#2b2b2b",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 3,
    },
    downloadButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
