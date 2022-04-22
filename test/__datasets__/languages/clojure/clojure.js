module.exports =
  "(require '[clj-http.client :as client])\n" +
  '\n' +
  '(client/get "http://petstore.swagger.io/v2/user/login" {:headers {:Accept "application/xml"}\n' +
  '                                                        :query-params {:username "woof"\n' +
  '                                                                       :password "barkbarkbark"}})';
