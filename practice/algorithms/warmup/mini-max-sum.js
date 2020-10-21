const miniMaxSum = (arr) => {
    const lowest = Math.min(...arr);
    const highest = Math.max(...arr);
    const arrWithHigherSum = arr.filter((num) => num !== lowest);
    const arrWithLowerSum = arr.filter((num) => num !== highest);
    const higherSum = arrWithHigherSum.reduce((acc, curr) => acc + curr);
    const lowerSum = arrWithLowerSum.reduce((acc, curr) => acc + curr);
    console.log(`${lowerSum} ${higherSum}`);
};
miniMaxSum([1, 3, 5, 7, 9]);