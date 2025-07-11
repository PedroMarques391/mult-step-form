import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    group: {
        width: '100%',
        height: 48,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'

    },
    icon: {
        height: 48,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRightWidth: 3,
        borderRightColor: '#f4f5f6'

    },
    control: {
        flex: 1,
        paddingLeft: 16,
        fontSize: 16
    },
    error: {
        fontSize: 12,
        marginTop: 7,
        color: '#dc1637'
    }
})
