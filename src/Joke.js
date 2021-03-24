const https = require('https')

https.get('https://v2.jokeapi.dev/joke/Any?type=twopart', (response) =>
{
    let raw_data = "";

    response.on('data', (chunk) => {
        raw_data += chunk;
    });

    response.on('end', () => {
        console.log(JSON.parse(raw_data).setup);
        console.log(JSON.parse(raw_data).delivery);
    });
}).on('error', (error) => {
    console.log('Error: ' + error.message);
});