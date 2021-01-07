function designerPdfViewer(h, word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const heights = [];

    for (let l of word) {
        heights.push(h[alphabet.indexOf(l)])
    }

    return word.length * Math.max(...heights);
}

designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc')