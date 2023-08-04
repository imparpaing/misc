#!/usr/bin/env node

'use strict';
const axios = require('axios');
const program = require('commander');
const packageJson = require('./package.json');

program.version(packageJson.version);
program
    .option('-sn, --serialNumber <serialNumber>', 'check product with the specified serial number')
    .action((option) => {
        const serialNumber = option.serialNumber;
        if (!serialNumber)
            sendWarning();
        main(serialNumber);
    });

program.parse(process.argv);

/*
    TODO: Add Featuers
        - Create & update .xlsx with sn's as arguments
*/

function sendWarning() {
    console.error('Please provide a valid serial number using the -sn option');
    process.exit(1);
};

async function main(serialNumber) {
    const requestBody = { serialNumber: serialNumber };
    const headers = { 'Content-Type': 'application/json' };
    const url = 'https://pcsupport.lenovo.com/pl/pl/api/v4/upsell/redport/getIbaseInfo';

    try {
        const response = await axios.post(url, requestBody, headers);
        const productName = response.data.data.machineInfo.productName;
        const outOfWarrantyStatus = response.data.data.oow;
        console.log(
            "Product name: " + productName + "\n" +
            "Product out of warranty: " + outOfWarrantyStatus
        );
    } catch (error) {
        console.error(error.message);
    }
}
