module.exports = 'library(httr)\n' +
    '\n' +
    'url <- "http://petstore.swagger.io/v2/pet"\n' +
    '\n' +
    'response <- VERB("POST", url, content_type("application/octet-stream"))\n' +
    '\n' +
    'content(response, "text")';
