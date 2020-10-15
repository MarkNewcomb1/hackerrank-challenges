const plusMinus = (arr) => {
    let positiveValue = 0, zeroValue = 0, negativeValue = 0;
    let denominator = arr.length;
    arr.forEach((num) => {
        num === 0 ? zeroValue++ : num > 0 ? positiveValue++ : negativeValue++;
    })
    return `  ${(positiveValue / denominator).toFixed(6)}
    ${(negativeValue / denominator).toFixed(6)}
    ${(zeroValue / denominator).toFixed(6)}`;
}
plusMinus([1, 1, 0, -1, -1]);