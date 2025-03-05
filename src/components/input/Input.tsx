import { View, Text, StyleSheet } from "react-native";
import Container from "./Container";

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
}

export default function Input({ value, onChange, label }: InputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Container value={value} onChange={onChange}>
                <Text style={styles.input}>
                    {Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(value))}
                </Text>
            </Container>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    input: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    }
})

