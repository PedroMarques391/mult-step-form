import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    base: {
        backgroundColor: '#90D5FF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullWidth: {
        width: '100%',
        paddingVertical: 14,
        paddingHorizontal: 24,
    },
    arrowOnly: {
        alignSelf: 'flex-end',
        padding: 12,
        marginRight: 12,
    },
    arrowGroup: {
        flexDirection: 'row',
        gap: 2,
    },
    textWithArrow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
