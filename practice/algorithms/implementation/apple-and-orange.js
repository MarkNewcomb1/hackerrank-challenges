function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // s is left starting point of house
    // t is right ending point of house
    // a is location of apple tree, which is to the left of the house
    // b is location of orange tree, which is to the right of the house
    // apples is array of units distance from apple tree that they travel
    // oranges is array of units distance from orange tree that they travel

    let orangesLandedOnHouse = 0;
    let applesLandedOnHouse = 0;
    let apple;
    let orange;
    for (apple of apples) {
        if (apple + a >= s && apple + a <= t) {
            applesLandedOnHouse++;
        }
    }

    for (orange of oranges) {
        if (orange + b >= s && orange + b <= t) {
            orangesLandedOnHouse++
        }
    }

    console.log(applesLandedOnHouse);
    console.log(orangesLandedOnHouse);

}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);