module.exports = `var client = new RestClient("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark");
var request = new RestRequest(Method.GET);
request.AddHeader("Accept", "application/xml");
IRestResponse response = client.Execute(request);`;
