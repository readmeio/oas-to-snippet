module.exports = `val client = OkHttpClient()

val request = Request.Builder()
  .url("http://petstore.swagger.io/v2/pet")
  .post(null)
  .addHeader("Content-Type", "application/json")
  .build()

val response = client.newCall(request).execute()`;
