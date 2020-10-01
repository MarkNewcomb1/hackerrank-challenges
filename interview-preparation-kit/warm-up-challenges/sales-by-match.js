export const sockMerchant = (n, ar)=> {
    const obj = {};

    ar.forEach(function (sock) {
        obj[sock] = obj[sock] + 1 || 1;
    })
    let matchingPairs = 0;
    for (const [key, value] of Object.entries(obj)) {
        if (value % 2 === 0) {
            matchingPairs += value / 2;
        } else {
            matchingPairs += (value > 1 ? Math.floor(value / 2) : 0);
        }
    }
    return matchingPairs;
}

// sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);