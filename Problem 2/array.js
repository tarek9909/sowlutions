let csvToJson = require('convert-csv-to-json');
let fileInputName="prediction.json"
let json = csvToJson.fieldDelimiter(',')
            .formatValueByType()
            .parseSubArray("*",',')
            .supportQuotedField(true)
            .getJsonFromCsv(fileInputName);
            
                
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}