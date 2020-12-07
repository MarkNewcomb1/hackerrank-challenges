function repeatedString(s, n) {
    let c = 0,
        ca = 0,
        r = n % s.length

    for (let i = s.length; i-- > 0;) {
        if (s.charAt(i) == 'a') {
            ++c

            if (i < r)
                ++ca
        }
    }

    return ((n - r) / s.length * c) + ca
}

  // 'ca' is the remaining 'a' characters, while 'c' is the 
//   total amount of characters in the given string without the 
//   remaining. 'r' is the remaining that doesn't fit into the 'n', 
//   so ((n - r) / s.length * c) is the amount of characters whitout the 
//   remainings of 'a' characters. The remaining must be counted only 
//   if is not greater than the index (i < r). So the total amount 
//   without the remaining + the remaining 'ca' is the result.