module.exports =
  '#import <Foundation/Foundation.h>\n' +
  '\n' +
  'NSDictionary *headers = @{ @"Content-Type": @"application/json" };\n' +
  '\n' +
  'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"http://petstore.swagger.io/v2/pet"]\n' +
  '                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
  '                                                   timeoutInterval:10.0];\n' +
  '[request setHTTPMethod:@"POST"];\n' +
  '[request setAllHTTPHeaderFields:headers];\n' +
  '\n' +
  'NSURLSession *session = [NSURLSession sharedSession];\n' +
  'NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request\n' +
  '                                            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n' +
  '                                                if (error) {\n' +
  '                                                    NSLog(@"%@", error);\n' +
  '                                                } else {\n' +
  '                                                    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;\n' +
  '                                                    NSLog(@"%@", httpResponse);\n' +
  '                                                }\n' +
  '                                            }];\n' +
  '[dataTask resume];';
