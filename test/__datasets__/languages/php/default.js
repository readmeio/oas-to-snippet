module.exports =
  '<?php\n' +
  "require_once('vendor/autoload.php');\n" +
  '\n' +
  '$client = new \\GuzzleHttp\\Client();\n' +
  '\n' +
  "$response = $client->request('POST', 'http://petstore.swagger.io/v2/pet', [\n" +
  "  'headers' => [\n" +
  "    'Content-Type' => 'application/json',\n" +
  '  ],\n' +
  ']);\n' +
  '\n' +
  'echo $response->getBody();';
