function countingValleys(steps, path) {
    const arr = path.split('');
    let valleys = 0;
    let elevation = 0;
    const mappingOfEachStep = arr.map(function (step, index) {
        elevation += step === 'U' ? 1 : -1;
        const obj = {
            step: elevation,
            atGroundLevel: elevation === 0
        }
        return obj;
    })
    mappingOfEachStep.forEach(function (step, index) {
        if (step.atGroundLevel && mappingOfEachStep[index - 1].step < 0) {
            valleys++;
        }
    })
    return valleys;
}

//   countingValleys(8, 'UDDDUDUU');