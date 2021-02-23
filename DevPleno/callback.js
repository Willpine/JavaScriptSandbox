// callback > promise > async/await

const fs = require('fs')

// Síncrono
console.log(1);
console.log(2);
console.log(3);

console.log(1);

// 1 - Com callback
function callback(err, contents) {
    console.log(err, String(contents));
}
fs.readFile('testeFs.txt', callback)


// 2 -Outra maneira de criar um callback com arrow f
const callbackArrow = (err, contents) => {
    console.log(err, String(contents))
}
fs.readFile('testeFs.txt', callback)


// 3 - Com a arrow, dá pra colocar ela direto no arg
fs.readFile('testeFs.txt', (err, contents) => {
    console.log(err, String(contents))
})


console.log(2);
console.log(3);