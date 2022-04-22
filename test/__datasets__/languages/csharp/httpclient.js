module.exports =
  'var client = new HttpClient();\n' +
  'var request = new HttpRequestMessage\n' +
  '{\n' +
  '    Method = HttpMethod.Get,\n' +
  '    RequestUri = new Uri("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark"),\n' +
  '    Headers =\n' +
  '    {\n' +
  '        { "Accept", "application/xml" },\n' +
  '    },\n' +
  '};\n' +
  'using (var response = await client.SendAsync(request))\n' +
  '{\n' +
  '    response.EnsureSuccessStatusCode();\n' +
  '    var body = await response.Content.ReadAsStringAsync();\n' +
  '    Console.WriteLine(body);\n' +
  '}';
