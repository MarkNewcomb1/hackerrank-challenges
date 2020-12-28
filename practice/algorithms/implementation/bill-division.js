// Complete the bonAppetit function below.

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat

// b: the amount of money that Anna contributed to the bill



// If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference (i.e., b charged - b actual) that Brian must refund to Anna. This will always be an integer.

function bonAppetit(bill, k, b) {

    const filteredBillandReducedBill = bill.filter((item, index) => {
        if (index === k) {
            return null;
        }
        return item;
    }).reduce((acc, curr) => {
        return acc + curr;
    }, 0)
    return (filteredBillandReducedBill / 2) === b ? console.log('Bon Appetit') : b - (filteredBillandReducedBill / 2);

}

bonAppetit([2, 4, 6], 2, 7);