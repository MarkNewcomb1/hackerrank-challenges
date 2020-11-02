function circularArrayRotation(a, k, queries) {

    for (let i = 0; i < k; i++) {
        let lastElement = a.pop();
        a.unshift(lastElement);
    }

    const result = [];
    queries.forEach((query) => {
        result.push(a[query])
    })
    return result;
}


// circularArrayRotation has the following parameter(s):

// a: an array of integers to rotate
// k: an integer, the rotation count
// queries: an array of integers, the indices to report

circularArrayRotation([3, 4, 5], 2, [1, 2]);