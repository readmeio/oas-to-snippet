module.exports = 'OkHttpClient client = new OkHttpClient();\n' +
    '\n' +
    'Request request = new Request.Builder()\n' +
    '  .url("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark")\n' +
    '  .get()\n' +
    '  .addHeader("Accept", "application/xml")\n' +
    '  .build();\n' +
    '\n' +
    'Response response = client.newCall(request).execute();';
