module.exports =
  'library(httr)\n' +
  '\n' +
  'url <- "http://petstore.swagger.io/v2/user/login"\n' +
  '\n' +
  'queryString <- list(\n' +
  '  username = "woof",\n' +
  '  password = "barkbarkbark"\n' +
  ')\n' +
  '\n' +
  'response <- VERB("GET", url, query = queryString, content_type("application/octet-stream"), accept("application/xml"))\n' +
  '\n' +
  'content(response, "text")';
