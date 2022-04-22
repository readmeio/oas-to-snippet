module.exports =
  'CURL *hnd = curl_easy_init();\n' +
  '\n' +
  'curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "POST");\n' +
  'curl_easy_setopt(hnd, CURLOPT_URL, "http://petstore.swagger.io/v2/pet");\n' +
  '\n' +
  'struct curl_slist *headers = NULL;\n' +
  'headers = curl_slist_append(headers, "Content-Type: application/json");\n' +
  'curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);\n' +
  '\n' +
  'CURLcode ret = curl_easy_perform(hnd);';
