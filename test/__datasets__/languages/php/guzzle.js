module.exports = `<?php
require_once('vendor/autoload.php');

$client = new \\GuzzleHttp\\Client();

$response = $client->request('GET', 'http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark', [
  'headers' => [
    'Accept' => 'application/xml',
  ],
]);

echo $response->getBody();`;
