
const converter = require('json-2-csv');
const fs = require('fs');

const dataInput = JSON.parse(fs.readFileSync('data.json'));

converter.json2csv(dataInput, (err, csv) => {
    if (err) {
        throw err;
    }
    console.log(csv);
    fs.writeFileSync('dataOutput.csv', csv);
});