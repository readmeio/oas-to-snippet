module.exports =
  'import Foundation\n' +
  '\n' +
  'let headers = ["Accept": "application/xml"]\n' +
  '\n' +
  'let request = NSMutableURLRequest(url: NSURL(string: "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark")! as URL,\n' +
  '                                        cachePolicy: .useProtocolCachePolicy,\n' +
  '                                    timeoutInterval: 10.0)\n' +
  'request.httpMethod = "GET"\n' +
  'request.allHTTPHeaderFields = headers\n' +
  '\n' +
  'let session = URLSession.shared\n' +
  'let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in\n' +
  '  if (error != nil) {\n' +
  '    print(error)\n' +
  '  } else {\n' +
  '    let httpResponse = response as? HTTPURLResponse\n' +
  '    print(httpResponse)\n' +
  '  }\n' +
  '})\n' +
  '\n' +
  'dataTask.resume()';
