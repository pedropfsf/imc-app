import { StyleSheet } from "react-native";
import { applyPaddingVersionAndroid } from "./utils";
import { Platform } from "react-native";

const styles = StyleSheet.create({
    header: {
        width: "100%",
        paddingTop: applyPaddingVersionAndroid(Platform),
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    switch: {
        transform: [
            { scale: 1.5 }
        ],
        marginLeft: 16
    }
});

export default styles;