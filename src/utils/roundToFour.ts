const roundDigits = (number: number, mount = 4) => {
    const variant = 10 ** mount;
    return Math.round(number / variant) * variant;
}

export default roundDigits;
