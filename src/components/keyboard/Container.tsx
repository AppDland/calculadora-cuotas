import { View, Text, Modal, TouchableWithoutFeedback } from "react-native";

interface KeyboardProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function KeyboardContainer({ visible, onClose, children }: KeyboardProps) {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            statusBarTranslucent
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                }}>
                    <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
                        <View style={{
                            backgroundColor: 'white',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            padding: 16,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: -2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5
                        }}>
                            {children}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}