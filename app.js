const fs = require("fs");

fs.readFile('cat.json'), (err, data) => {
    if (err) throw err; 
    let cat = JSON.parse(data);
    console.log(cat);
};