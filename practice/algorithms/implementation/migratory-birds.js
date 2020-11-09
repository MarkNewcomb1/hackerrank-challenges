function migratoryBirds(arr) {
    let obj = {};
    let s = [];

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] || 0;
        obj[arr[i]]++;
    }

    const max = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);

    return max;

}

migratoryBirds([1, 4, 4, 4, 5, 3, 3, 3]);