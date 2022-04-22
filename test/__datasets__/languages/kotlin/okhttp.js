module.exports = 'val client = OkHttpClient()\n' +
    '\n' +
    'val request = Request.Builder()\n' +
    '  .url("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark")\n' +
    '  .get()\n' +
    '  .addHeader("Accept", "application/xml")\n' +
    '  .build()\n' +
    '\n' +
    'val response = client.newCall(request).execute()';
