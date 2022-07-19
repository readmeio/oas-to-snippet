module.exports = `<?php
require_once('vendor/autoload.php');

$client = new \\GuzzleHttp\\Client();

$response = $client->request('POST', 'http://petstore.swagger.io/v2/pet', [
  'headers' => [
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();`;
