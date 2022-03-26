import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: 100,
        height: 200,
        resizeMode: "cover",
        borderRadius: 5,
        margin: 5,
    },
    title: {
        fontSize: 24,
        color: "#fff",
        fontWeight: 'bold',
    }
});
