import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        height: 75,
        aspectRatio: 16 / 9,
        resizeMode: "cover",
        borderRadius: 3,
    },
    title: {
    },
    titleContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'center'
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
    },
    duration: {
        color: "darkgrey",
        fontSize: 12,
    },
    plot: {
        color: "darkgrey",
        fontSize: 14,
    },
});
