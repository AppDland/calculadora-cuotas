import { StyleSheet, Text, View } from "react-native";
import formatMoney from "../../utils/formatMoney";
import roundToFourDigits from "../../utils/roundToFour";

interface QuotesProps {
    quote: number;
    price: number;
}

export default function Row({ quote, price }: QuotesProps) {

    const calculateQuoteVal = () => {
        return roundToFourDigits(price / quote, 2);
    }

    return (
        <View style={styles.container}>
            {
                quote > 1 && (
                    <View>
                        <Text style={styles.text}>
                            Paga {quote} {quote > 1 ? 'Cuotas' : 'Cuota'} de {formatMoney(calculateQuoteVal())}
                        </Text>
                    </View>
                )
            }
            <Text style={[styles.text, styles.bold]}>
                Precio {quote === 1 && 'de contado'} {formatMoney(price)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
    },
    bold: {
        fontWeight: 'bold',
    }
})