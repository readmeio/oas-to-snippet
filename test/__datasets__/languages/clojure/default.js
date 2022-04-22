module.exports =
  "(require '[clj-http.client :as client])\n" +
  '\n' +
  '(client/post "http://petstore.swagger.io/v2/pet" {:headers {:Content-Type "application/json"}})';
