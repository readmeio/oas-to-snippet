module.exports = `AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("GET", "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark")
  .setHeader("Accept", "application/xml")
  .execute()
  .toCompletableFuture()
  .thenAccept(System.out::println)
  .join();

client.close();`;
