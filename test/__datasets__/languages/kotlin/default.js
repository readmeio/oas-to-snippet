module.exports =
  'val client = OkHttpClient()\n' +
  '\n' +
  'val request = Request.Builder()\n' +
  '  .url("http://petstore.swagger.io/v2/pet")\n' +
  '  .post(null)\n' +
  '  .addHeader("Content-Type", "application/json")\n' +
  '  .build()\n' +
  '\n' +
  'val response = client.newCall(request).execute()';
