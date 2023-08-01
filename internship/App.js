'use strict';
const axios = require('axios');

async function main(serialNumber) {
    const requestBody = { serialNumber: serialNumber };
    const headers = { 'Content-Type': 'application/json' };
    const url = 'https://pcsupport.lenovo.com/pl/pl/api/v4/upsell/redport/getIbaseInfo';

    axios.post(url, requestBody, headers)
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error.message));
}

module.exports = main;

if (require.main === module) {
    main('');
}
