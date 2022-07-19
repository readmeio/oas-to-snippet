module.exports = `HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark"))
    .header("Accept", "application/xml")
    .method("GET", HttpRequest.BodyPublishers.noBody())
    .build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());`;
