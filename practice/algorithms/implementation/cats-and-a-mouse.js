const catAndMouse = (x, y, z) => {
    // x is position of cat1
    // y is position of cat2
    // z is position of the mouse

    let catXCloseness = Math.abs(x - z);
    let catYCloseness = Math.abs(y - z);

    if (catXCloseness === catYCloseness) {
        return 'Mouse C';
    }
    if (catXCloseness < catYCloseness) {
        return 'Cat A';
    } else {
        return 'Cat B';
    }
}