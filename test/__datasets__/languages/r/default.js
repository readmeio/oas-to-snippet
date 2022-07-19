module.exports = `library(httr)

url <- "http://petstore.swagger.io/v2/pet"

response <- VERB("POST", url, content_type("application/octet-stream"))

content(response, "text")`;
