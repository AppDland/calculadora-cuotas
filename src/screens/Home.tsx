import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Input from "../components/input/Input";
import { useState } from "react";
import InputSlider from "../components/inpu-slider/InputSlider";
import Quotes from "../components/quotes/Quotes";

export default function Home() {

    const [hide, setHide] = useState(false);
    const [price, setPrice] = useState('');
    const [quotes, setQuotes] = useState(6);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Calculadora de Cuotas</Text>

            {
                !hide && (
                    <View>
                        <Input
                            value={price}
                            onChange={setPrice}
                            label="Precio Base"
                        />


                        <InputSlider
                            label="Cantidad de Cuotas"
                            value={quotes}
                            onChange={setQuotes}
                        />
                    </View>
                )
            }

            <TouchableOpacity onPress={() => setHide(!hide)}>
                <Text style={{ textAlign: 'center', marginTop: 20, color: 'gray' }}>{hide ? 'Precios' : 'Esconder'}</Text>
            </TouchableOpacity>

            <Quotes
                quotes={quotes}
                basePrice={price}
            />

            <Text style={{ textAlign: 'center', marginTop: 20, color: 'gray' }}>By AppDland</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingBottom: 10,
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        margin: 10
    }
})
