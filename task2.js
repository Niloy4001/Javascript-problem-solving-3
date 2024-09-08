////////////////////////////////////////////

// ### Task -2: 
// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

// ---



const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallestName(words) {

    let smallest = words[0];

    for (const word of words) {
        if (word.length < smallest.length) {

            smallest = word;

        }
    }
    return smallest;

}

const smallestName = findSmallestName(heights2);

console.log(smallestName);
