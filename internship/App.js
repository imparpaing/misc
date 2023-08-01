'use strict';
const axios = require('axios');

async function main(serialNumber) {
    const requestBody = { serialNumber: serialNumber };
    const headers = { 'Content-Type': 'application/json' };
    const url = 'https://pcsupport.lenovo.com/pl/pl/api/v4/upsell/redport/getIbaseInfo';

    try {
        const response = await axios.post(url, requestBody, headers);
        const outOfWarrantyStatus = response.data.data.oow;
        console.log(`Product out of warranty: ${outOfWarrantyStatus}`);
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = main;

/*******************************************
 *                                         *
 * REPLACE 'sn' WITH ACTIAL PRODUCT NUMBER *
 *                                         *
 *******************************************/

if (require.main === module) {
    main('sn');
}
