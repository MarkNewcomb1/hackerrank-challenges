function compareTriplets(a, b) {
    const result = [];
    let aGrade = 0;
    let bGrade = 0;
    a.forEach((grade, i) => {
        if (a[i] > b[i]) {
            aGrade++;
        }
        if (b[i] > a[i]) {
            bGrade++;
        }
    })
    result.push(aGrade, bGrade);
    return result;
}

compareTriplets([5, 6, 7], [3, 6, 10]);