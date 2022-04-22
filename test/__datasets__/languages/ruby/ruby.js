module.exports =
  "require 'uri'\n" +
  "require 'net/http'\n" +
  '\n' +
  'url = URI("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark")\n' +
  '\n' +
  'http = Net::HTTP.new(url.host, url.port)\n' +
  '\n' +
  'request = Net::HTTP::Get.new(url)\n' +
  `request["Accept"] = 'application/xml'\n` +
  '\n' +
  'response = http.request(request)\n' +
  'puts response.read_body';
