module.exports = `package main

import (
\t"fmt"
\t"net/http"
\t"io/ioutil"
)

func main() {

\turl := "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark"

\treq, _ := http.NewRequest("GET", url, nil)

\treq.Header.Add("Accept", "application/xml")

\tres, _ := http.DefaultClient.Do(req)

\tdefer res.Body.Close()
\tbody, _ := ioutil.ReadAll(res.Body)

\tfmt.Println(res)
\tfmt.Println(string(body))

}`;
