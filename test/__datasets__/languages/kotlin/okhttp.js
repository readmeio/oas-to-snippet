module.exports = `val client = OkHttpClient()

val request = Request.Builder()
  .url("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark")
  .get()
  .addHeader("Accept", "application/xml")
  .build()

val response = client.newCall(request).execute()`;
