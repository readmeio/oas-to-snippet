module.exports = 'CURL *hnd = curl_easy_init();\n' +
    '\n' +
    'curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "GET");\n' +
    'curl_easy_setopt(hnd, CURLOPT_URL, "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark");\n' +
    '\n' +
    'struct curl_slist *headers = NULL;\n' +
    'headers = curl_slist_append(headers, "Accept: application/xml");\n' +
    'curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);\n' +
    '\n' +
    'CURLcode ret = curl_easy_perform(hnd);';
