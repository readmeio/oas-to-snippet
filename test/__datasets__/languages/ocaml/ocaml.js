module.exports = 'open Cohttp_lwt_unix\n' +
    'open Cohttp\n' +
    'open Lwt\n' +
    '\n' +
    'let uri = Uri.of_string "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark" in\n' +
    'let headers = Header.add (Header.init ()) "Accept" "application/xml" in\n' +
    '\n' +
    'Client.call ~headers `GET uri\n' +
    '>>= fun (res, body_stream) ->\n' +
    '  (* Do stuff with the result *)';
