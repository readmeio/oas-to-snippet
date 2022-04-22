module.exports =
  'import Foundation\n' +
  '\n' +
  'let headers = ["Content-Type": "application/json"]\n' +
  '\n' +
  'let request = NSMutableURLRequest(url: NSURL(string: "http://petstore.swagger.io/v2/pet")! as URL,\n' +
  '                                        cachePolicy: .useProtocolCachePolicy,\n' +
  '                                    timeoutInterval: 10.0)\n' +
  'request.httpMethod = "POST"\n' +
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
