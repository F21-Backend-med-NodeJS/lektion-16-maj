const fs = require('fs'); // fs är en inbyggd modul i Node.js
const readline = require('readline-sync');

const filename = readline.question('Filnamn?\n');
console.log(`Valt filnamn: ${filename}`);

const quote = 'Why is raven like a writing desk?';

fs.writeFile('quotes.txt', quote, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Quote saved!');
    }
});

fs.readFile('quotes.txt', 'utf8', (error, content) => {
    if (content) {
        console.log(content);
    } else {
        console.log(error);
    }
});

const file = fs.createWriteStream('OscarWilde.txt');

for (let i = 0; i < 5; i++) {
    file.write('You can never be overdressed or overeducated. \n');
}

file.end();

