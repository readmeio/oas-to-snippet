module.exports = `open Cohttp_lwt_unix
open Cohttp
open Lwt

let uri = Uri.of_string "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark" in
let headers = Header.add (Header.init ()) "Accept" "application/xml" in

Client.call ~headers \`GET uri
>>= fun (res, body_stream) ->
  (* Do stuff with the result *)`;
