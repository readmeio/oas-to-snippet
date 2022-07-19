module.exports = `var client = new RestClient("http://petstore.swagger.io/v2/pet");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
IRestResponse response = client.Execute(request);`;
