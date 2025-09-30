let csvToJson = require('convert-csv-to-json');

let fileInputName = 'prediction.csv'; 
let fileOutputName = 'prediction.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);