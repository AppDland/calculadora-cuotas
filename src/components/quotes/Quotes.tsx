import { StyleSheet, Text, View } from "react-native";
import Row from "./Row";
import roundToFourDigits from "../../utils/roundToFour";

interface QuotesProps {
    quotes: number;
    basePrice: string;
}

export default function Quotes({ quotes, basePrice }: QuotesProps) {


    const calculatePrice = (quote: number) => {
        const finalPrice = roundToFourDigits(Number(basePrice) + (Number(basePrice) * 2));

        const variant = 40 / (quotes - 1);

        const discount = ((quotes - quote) * variant) / 100;

        return roundToFourDigits(finalPrice - (finalPrice * discount), 3);
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 15, marginBottom: 10, color: 'gray' }}>Resultados</Text>
            <View>
                {
                    Array.from({ length: quotes }).map((_, index) => (
                        <Row
                            key={index}
                            quote={quotes - index}
                            price={calculatePrice(quotes - index)}
                        />
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 20
    },
    text: {
        fontSize: 20,
        width: '25%',
    }
})
