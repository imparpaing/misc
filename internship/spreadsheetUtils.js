'use strict';

const ExcelJS = require('exceljs');

// TODO: Fix date output offset (+2hrs)

async function setupSpreadsheet() {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Lenovo scraper by @mikeatta';
    workbook.created = new Date();
    
    const sheet = workbook.addWorksheet('Notebooks');
    workbook.worksheets[0];

    await workbook.xlsx.writeFile('./notebooks.xlsx');
}

setupSpreadsheet().then(() => {
    console.log('Successfully created the spreadsheet');
}).catch((error) => {
    console.error('Error creating the spreadsheet', error.message);
});
