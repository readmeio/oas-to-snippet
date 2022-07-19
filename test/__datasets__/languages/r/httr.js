module.exports = `library(httr)

url <- "http://petstore.swagger.io/v2/user/login"

queryString <- list(
  username = "woof",
  password = "barkbarkbark"
)

response <- VERB("GET", url, query = queryString, content_type("application/octet-stream"), accept("application/xml"))

content(response, "text")`;
