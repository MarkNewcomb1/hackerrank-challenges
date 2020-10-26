function birthdayCakeCandles(candles) {
    const highestHeight = Math.max(...candles);
    return candles.filter(candle => candle === highestHeight).length;
}

birthdayCakeCandles([4, 4, 1, 3]);