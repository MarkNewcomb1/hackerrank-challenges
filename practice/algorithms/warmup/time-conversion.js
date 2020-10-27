function timeConversion(s) {
    let hour = s.slice(0, 2);
    let minutes = s.slice(3, 5);
    let seconds = s.slice(6, 8);
    const amOrPm = s.slice(-2);

    if (amOrPm === 'AM') {
        if (hour === '12') {
            return `00:${minutes}:${seconds}`;
        }
        return `${hour}:${minutes}:${seconds}`;
    }

    if (amOrPm === 'PM') {
        if (hour === '12') {
            return `${hour}:${minutes}:${seconds}`;
        }
        let calculatedHour = parseInt(hour) + 12;
        return `${calculatedHour}:${minutes}:${seconds}`;
    }
}




timeConversion('12:05:45AM');
    // convert to military time