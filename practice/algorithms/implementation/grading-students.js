// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

function gradingStudents(grades) {
    function calculateRounding(grade) {
        const remainder = 5 - (grade % 5);
        if (remainder < 3 && grade >= 38) {
            return (grade + remainder);
        }
        return grade;
    }

    return grades.map((grade) => {
        return calculateRounding(grade);
    })

}

gradingStudents([73, 67, 38, 33]);