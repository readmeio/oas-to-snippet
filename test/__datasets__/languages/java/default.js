module.exports = `OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("http://petstore.swagger.io/v2/pet")
  .post(null)
  .addHeader("Content-Type", "application/json")
  .build();

Response response = client.newCall(request).execute();`;
