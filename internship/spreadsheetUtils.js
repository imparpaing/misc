'use strict';

const ExcelJS = require('exceljs');

async function setupSpreadsheet() {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Lenovo scraper by @mikeatta';

    const timestamp = new Date();
    timestamp.setMinutes(timestamp.getMinutes() - timestamp.getTimezoneOffset());
    workbook.created = timestamp;
    workbook.modified = timestamp;
    
    const sheet = workbook.addWorksheet('Notebooks');
    workbook.worksheets[0];

    await workbook.xlsx.writeFile('./notebooks.xlsx');
}

setupSpreadsheet().then(() => {
    console.log('Successfully created the spreadsheet');
}).catch((error) => {
    console.error('Error creating the spreadsheet', error.message);
});
