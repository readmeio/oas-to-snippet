module.exports = 'OkHttpClient client = new OkHttpClient();\n' +
    '\n' +
    'Request request = new Request.Builder()\n' +
    '  .url("http://petstore.swagger.io/v2/pet")\n' +
    '  .post(null)\n' +
    '  .addHeader("Content-Type", "application/json")\n' +
    '  .build();\n' +
    '\n' +
    'Response response = client.newCall(request).execute();';
