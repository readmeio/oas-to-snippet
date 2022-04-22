module.exports = 'var client = new RestClient("http://petstore.swagger.io/v2/pet");\n' +
    'var request = new RestRequest(Method.POST);\n' +
    'request.AddHeader("Content-Type", "application/json");\n' +
    'IRestResponse response = client.Execute(request);';
