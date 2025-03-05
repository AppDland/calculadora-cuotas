
export default function formatMoney(number: number | string) {

    const parsed = typeof number === 'string' ? Number(number) : number;

    return Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(parsed)
}