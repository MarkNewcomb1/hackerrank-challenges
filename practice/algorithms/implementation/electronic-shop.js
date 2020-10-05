const getMoneySpent = (keyboardPricesArr, USBDrivePricesArr, budget) => {
    let total = 0;

    keyboardPricesArr.forEach(function (keyboard, i) {
        USBDrivePricesArr.forEach(function (drive, j) {
            let currentCombination = keyboard + drive;
            if (currentCombination <= budget && currentCombination > total) {
                console.log("keyboard: ", keyboard);
                console.log("drive: ", drive);
                total = keyboard + drive;
            }
        })
    })
    return total === 0 ? -1 : total;
}


getMoneySpent([3, 1], [5, 2, 8], 10);