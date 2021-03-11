const wordSearch = (givenLetters, givenWord) => {
    let transposedArray = transpose(givenLetters);
    const horizontalWords = givenLetters.map(ls => ls.join(''))
    // console.log('string>>>', horizontalWords)
    for (let word of horizontalWords) {
        if (word.includes(givenWord)) {
            return true;
        }
    }

    const verticalWords = transposedArray.map(ls => ls.join(''))
    // console.log(transposedArray)
    for (let word of verticalWords) {
        if (word.includes(givenWord)) {
            return true;
        }
    }
    return false;

}

const transpose = function (matrix) {
    // Put your solution here
    let newArray = [];
    for (let r in matrix[0]) {
        newArray.push([]);
    };
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            newArray[c][r] = matrix[r][c];
        }
    } return newArray;

};

console.log(wordSearch(  [    
['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK'))
module.exports = wordSearch

