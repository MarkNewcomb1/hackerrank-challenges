// Complete the superReducedString function below.
// select a pair of adjacent letters that match, and delete them. Return the reduced string.

// Example: aaabccddd turns into abd
function superReducedString(s) {
    const arr = s.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            // cut this element from the array, and the next one as well (splice's second argument is the number of items to cut)
            arr.splice(i, 2)
            // resetting i will start at the beginning of the loop
            i = -1;
        }
    }

    return arr.length === 0 ? 'Empty String' : arr.join('');

}

superReducedString('aaabccddd');