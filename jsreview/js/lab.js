// Put your JavaScript lab code here!
let x = `I like JavaScript more than I like to party.`;
console.log(x);

let wa = `I love Washington State University`;
wa.replace("Washington State University", `The University of Washington`);

let together = x.concat(wa);
console.log(together);

function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function vowelCount(letters) {
    let count = 0;
    let vowels = "aeiou";
    for (let i = 0; i < letters.length; i++) {
        if (vowels.contains(letters.charAt(i))) {
            count++;
        }
    }
    return count;
}

function findMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function longestWord(array) {
    let index = 0;
    let longest = array[0].length;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest) {
            longest = array[i].length;
            index = i;
        }
    }
    return array[index];
}

function removeAll(array, string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

let array = [
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling", 
        read: true
    },
     {
        title: "The Great Gastby",
        author: "F. Scott Fitzgerald",
        read: false
     },
     {
         title: "The Hunger Games",
         author: "Suzanne Collins",
         read: false
     }
];

array.push({title: "1984", author: "George Orwell", read: true})

function print(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("I have read %d by %d", title, author);
        if()
    }
}