let FS= require('fs');

// read the index.html from build folder
let data = FS.readFileSync('./build/index.html', 'utf8');

// change / to ./
let afterAddingScript = data.split('="/').join('="./')

// updates the index.html file
FS.writeFile('./build/index.html', afterAddingScript, 'utf8', (err)=> {
    if(err) {
        throw err
    };
})