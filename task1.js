// ////////////////////////////////////////////////////
// ### Task -1: 
// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`

// ---


const heights2 = [167, 190, 120, 165, 137];

function findLowestNumber(numbers) {

    let lowest = numbers[0]

    for (const number of numbers) {

        if (number < lowest) {
            lowest = number;
        }

    }

    return lowest;




}

const lowestNumber = findLowestNumber(heights2);
console.log(lowestNumber);


