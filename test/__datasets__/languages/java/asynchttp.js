module.exports = 'AsyncHttpClient client = new DefaultAsyncHttpClient();\n' +
    'client.prepare("GET", "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark")\n' +
    '  .setHeader("Accept", "application/xml")\n' +
    '  .execute()\n' +
    '  .toCompletableFuture()\n' +
    '  .thenAccept(System.out::println)\n' +
    '  .join();\n' +
    '\n' +
    'client.close();';
