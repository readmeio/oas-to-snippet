module.exports = 'var client = new RestClient("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark");\n' +
    'var request = new RestRequest(Method.GET);\n' +
    'request.AddHeader("Accept", "application/xml");\n' +
    'IRestResponse response = client.Execute(request);';
