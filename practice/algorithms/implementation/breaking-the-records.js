function breakingRecords(scores) {
    let startingMin = scores[0];
    let startingMax = scores[0];

    let min = 0;
    let max = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > startingMax) {
            startingMax = scores[i];
            max++;
        }
        if (scores[i] < startingMin) {
            startingMin = scores[i];
            min++;
        }
    }
    return [max, min];
}


breakingRecords([12, 24, 10, 24]);