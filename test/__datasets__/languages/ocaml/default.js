module.exports = 'open Cohttp_lwt_unix\n' +
    'open Cohttp\n' +
    'open Lwt\n' +
    '\n' +
    'let uri = Uri.of_string "http://petstore.swagger.io/v2/pet" in\n' +
    'let headers = Header.add (Header.init ()) "Content-Type" "application/json" in\n' +
    '\n' +
    'Client.call ~headers `POST uri\n' +
    '>>= fun (res, body_stream) ->\n' +
    '  (* Do stuff with the result *)';
