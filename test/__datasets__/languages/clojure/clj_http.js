module.exports = `(require '[clj-http.client :as client])

(client/get "http://petstore.swagger.io/v2/user/login" {:headers {:Accept "application/xml"}
                                                        :query-params {:username "woof"
                                                                       :password "barkbarkbark"}})`;
