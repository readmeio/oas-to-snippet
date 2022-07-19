module.exports = `CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "GET");
curl_easy_setopt(hnd, CURLOPT_URL, "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "Accept: application/xml");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

CURLcode ret = curl_easy_perform(hnd);`;
