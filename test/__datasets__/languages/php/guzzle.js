module.exports =
  '<?php\n' +
  "require_once('vendor/autoload.php');\n" +
  '\n' +
  '$client = new \\GuzzleHttp\\Client();\n' +
  '\n' +
  "$response = $client->request('GET', 'http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark', [\n" +
  "  'headers' => [\n" +
  "    'Accept' => 'application/xml',\n" +
  '  ],\n' +
  ']);\n' +
  '\n' +
  'echo $response->getBody();';
