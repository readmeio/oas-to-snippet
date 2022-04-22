module.exports =
  '<?php\n' +
  '\n' +
  '$curl = curl_init();\n' +
  '\n' +
  'curl_setopt_array($curl, [\n' +
  '  CURLOPT_URL => "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark",\n' +
  '  CURLOPT_RETURNTRANSFER => true,\n' +
  '  CURLOPT_ENCODING => "",\n' +
  '  CURLOPT_MAXREDIRS => 10,\n' +
  '  CURLOPT_TIMEOUT => 30,\n' +
  '  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n' +
  '  CURLOPT_CUSTOMREQUEST => "GET",\n' +
  '  CURLOPT_HTTPHEADER => [\n' +
  '    "Accept: application/xml"\n' +
  '  ],\n' +
  ']);\n' +
  '\n' +
  '$response = curl_exec($curl);\n' +
  '$err = curl_error($curl);\n' +
  '\n' +
  'curl_close($curl);\n' +
  '\n' +
  'if ($err) {\n' +
  '  echo "cURL Error #:" . $err;\n' +
  '} else {\n' +
  '  echo $response;\n' +
  '}';
