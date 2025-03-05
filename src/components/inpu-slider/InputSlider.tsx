import { View, Text, StyleSheet } from "react-native";
import Slider from "./Slider";

interface InputSliderProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
}

export default function InputSlider({ label, value, onChange }: InputSliderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Slider
                value={value}
                onChange={onChange}
            >
                <Text style={styles.value}>{value}</Text>
            </Slider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
