module.exports = `open Cohttp_lwt_unix
open Cohttp
open Lwt

let uri = Uri.of_string "http://petstore.swagger.io/v2/pet" in
let headers = Header.add (Header.init ()) "Content-Type" "application/json" in

Client.call ~headers \`POST uri
>>= fun (res, body_stream) ->
  (* Do stuff with the result *)`;
