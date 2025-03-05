import { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Vibration, View } from "react-native";

import Keyboard from "../keyboard/Keyboard";

interface ContainerProps {
    children: React.ReactNode;
    value: string;
    onChange: (value: string) => void;
}

export default function Container({ children, value, onChange }: ContainerProps) {
    const [showKeyboard, setShowKeyboard] = useState(false);


    const handleOpenKeyboard = () => {
        setShowKeyboard(true);
        Vibration.vibrate(10);
    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={handleOpenKeyboard}>
                <View style={styles.container}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
            <Keyboard
                visible={showKeyboard}
                onClose={() => setShowKeyboard(false)}
                value={value}
                onChange={onChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
