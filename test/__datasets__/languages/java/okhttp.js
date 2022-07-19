module.exports = `OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark")
  .get()
  .addHeader("Accept", "application/xml")
  .build();

Response response = client.newCall(request).execute();`;
