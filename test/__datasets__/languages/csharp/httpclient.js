module.exports = `using System.Net.Http.Headers;
var client = new HttpClient();
var request = new HttpRequestMessage
{
    Method = HttpMethod.Get,
    RequestUri = new Uri("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark"),
    Headers =
    {
        { "Accept", "application/xml" },
    },
};
using (var response = await client.SendAsync(request))
{
    response.EnsureSuccessStatusCode();
    var body = await response.Content.ReadAsStringAsync();
    Console.WriteLine(body);
}`;
