module.exports = `import Foundation

let headers = ["Accept": "application/xml"]

let request = NSMutableURLRequest(url: NSURL(string: "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()`;
