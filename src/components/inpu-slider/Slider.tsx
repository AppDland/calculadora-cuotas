import { StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SliderProps {
    value: number;
    onChange: (value: number) => void;
    children: React.ReactNode;
}

export default function Slider({ value, onChange, children }: SliderProps) {

    const handleIncrease = () => {
        Vibration.vibrate(20);
        if (value < 16) {
            onChange(value + 1);
        }
    }

    const handleDecrease = () => {
        Vibration.vibrate(20);
        if (value > 1) {
            onChange(value - 1);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleDecrease}>
                    <View style={styles.button}>
                        <Ionicons name="chevron-back-outline" size={24} color="#333" />
                    </View>
                </TouchableOpacity>
            </View>
            {children}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleIncrease}>
                    <View style={[styles.button, { alignItems: 'flex-end' }]}>
                        <Ionicons name="chevron-forward-outline" size={24} color="#333" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        padding: 10,
    },
    buttonContainer: {
        width: '20%',
        height: '100%'
    },
    button: {
        width: '100%',
        padding: 5
    }
})
