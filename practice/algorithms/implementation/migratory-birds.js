function migratoryBirds(arr) {
    const freqObject = arr.reduce((acc, value) => {
        if (acc[value]) {
            acc[value]++
        } else {
            acc[value] = 1
        }
        return acc
    }, {})
    const highest = Math.max(...Object.values(freqObject))
    const types = Object.keys(freqObject)
    let mostCommon = []
    types.forEach(type => {
        if (freqObject[type] === highest) mostCommon.push(type)
    })
    return Math.min(...mostCommon)
}

migratoryBirds([1, 4, 4, 4, 5, 3, 3, 3]);