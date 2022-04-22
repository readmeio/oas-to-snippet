module.exports = '#import <Foundation/Foundation.h>\n' +
    '\n' +
    'NSDictionary *headers = @{ @"Accept": @"application/xml" };\n' +
    '\n' +
    'NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark"]\n' +
    '                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy\n' +
    '                                                   timeoutInterval:10.0];\n' +
    '[request setHTTPMethod:@"GET"];\n' +
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
