import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAccount } from "../../hooks/useAccount";

export function Home() {
    const { accountFormData } = useAccount();
    console.log(accountFormData)

    if (!accountFormData) {
        return (
            <View style={styles.container}>
                <Text style={styles.warning}>Nenhum dado encontrado.</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Bem-vindo, {accountFormData.name}!</Text>

            <View style={styles.item}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{accountFormData.email}</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.label}>Nascimento:</Text>
                <Text style={styles.value}>{accountFormData.birth}</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.label}>Telefone:</Text>
                <Text style={styles.value}>{accountFormData.phone}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexGrow: 1,
        backgroundColor: "#fff",
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 32,
        textAlign: "center"
    },
    item: {
        marginBottom: 20
    },
    label: {
        fontSize: 16,
        color: "#666"
    },
    value: {
        fontSize: 18,
        fontWeight: "bold"
    },
    warning: {
        fontSize: 16,
        color: "#999",
        textAlign: "center"
    }
});
