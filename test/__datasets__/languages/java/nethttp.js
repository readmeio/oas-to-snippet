module.exports =
  'HttpRequest request = HttpRequest.newBuilder()\n' +
  '    .uri(URI.create("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark"))\n' +
  '    .header("Accept", "application/xml")\n' +
  '    .method("GET", HttpRequest.BodyPublishers.noBody())\n' +
  '    .build();\n' +
  'HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());\n' +
  'System.out.println(response.body());';
