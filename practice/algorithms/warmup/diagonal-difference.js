
const diagonalDifference = (arr) => {
    let leftToRightSum = 0;
    let rightToLeftSum = 0;
    arr.forEach((nestedArr, index) => {
        leftToRightSum += arr[index][index]
        rightToLeftSum += arr[index][(arr.length - 1) - index];
    })
    let theDifference = Math.abs(leftToRightSum - rightToLeftSum);
    console.log(`left to right: ${leftToRightSum} right to left: ${rightToLeftSum} diagonal difference: ${theDifference}`);
    return theDifference;
}


diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]);