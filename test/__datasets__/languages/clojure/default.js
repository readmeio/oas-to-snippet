module.exports = `(require '[clj-http.client :as client])

(client/post "http://petstore.swagger.io/v2/pet" {:headers {:Content-Type "application/json"}})`;
