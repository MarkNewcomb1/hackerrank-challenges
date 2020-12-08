// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    // x1 is kangaroo 1's position
    // v1 is how far kangaroo can jump each time
    // x2 is kangaroo 2's position
    // v2 is how far kangaroo can jump each time

    let kangaroo1Arr = [];
    let kangaroo2Arr = [];

    const obj = {
        landInSamePosition: 'NO'
    };

    for (let i = 0; i < 30; i++) {
        kangaroo1Arr.push(x1 + v1);
        x1 = x1 + v1;
        kangaroo2Arr.push(x2 + v2);
        x2 = x2 + v2;
    }

    kangaroo1Arr.forEach((jump, index) => {
        if (kangaroo1Arr[index] === kangaroo2Arr[index]) {
            obj.landInSamePosition = 'YES';
        }
    });



    return obj.landInSamePosition;
}

kangaroo(0, 3, 4, 2);