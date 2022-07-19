module.exports = `require 'uri'
require 'net/http'

url = URI("http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/xml'

response = http.request(request)
puts response.read_body`;
