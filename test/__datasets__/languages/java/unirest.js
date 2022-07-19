module.exports = `HttpResponse<String> response = Unirest.get("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark")
  .header("Accept", "application/xml")
  .asString();`;
