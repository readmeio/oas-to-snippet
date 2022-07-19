module.exports = `require 'uri'
require 'net/http'

url = URI("http://petstore.swagger.io/v2/pet")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'

response = http.request(request)
puts response.read_body`;
