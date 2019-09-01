import React from "react";
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
} from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <View style={styles.loading} >
                <ActivityIndicator size="large" color="#555" style={{ marginBottom: 120 }} />
                <Text style={styles.loadingText}>날씨를 읽어오는 중 !~_~!</Text>
            </View>

        </View>
    )
}

// Style Sheet!
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FDF6AA",
        justifyContent: 'flex-end',
    },

    loadingText: {
        paddingLeft: 25,
        fontSize: 32,
        paddingRight: 25,
        marginBottom: 100,
        textAlign: "center",
    }
});
