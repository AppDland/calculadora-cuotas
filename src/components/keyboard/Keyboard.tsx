import { View, Text, TouchableOpacity, StyleSheet, Vibration } from "react-native";
import KeyboardContainer from "./Container";
import { Ionicons } from '@expo/vector-icons';

interface KeyboardProps {
    visible: boolean;
    onClose: () => void;
    value: string;
    onChange: (value: string) => void;
}

const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', 'backspace']
];

export default function Keyboard({ visible, onClose, value, onChange }: KeyboardProps) {
    const handleKeyPress = (key: string) => {
        Vibration.vibrate(20);

        if (key === 'backspace') {
            onChange(value.slice(0, -1));
        } else {
            onChange(value + key);
        }
    };

    const renderKey = (key: string) => {
        if (key === 'backspace') {
            return (
                <TouchableOpacity
                    key={key}
                    style={styles.key}
                    onPress={() => handleKeyPress(key)}
                >
                    <Ionicons name="backspace-outline" size={24} color="#333" />
                </TouchableOpacity>
            );
        }

        return (
            <TouchableOpacity
                key={key}
                style={styles.key}
                onPress={() => handleKeyPress(key)}
            >
                <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <KeyboardContainer
            visible={visible}
            onClose={onClose}
        >
            <View style={styles.keyboard}>
                {keys.map((row, index) => (
                    <View key={index} style={styles.row}>
                        {row.map(key => renderKey(key))}
                    </View>
                ))}
            </View>
        </KeyboardContainer>
    );
}

const styles = StyleSheet.create({
    keyboard: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    key: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 35,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    keyText: {
        fontSize: 24,
        color: '#333',
        fontWeight: '500',
    },
});
