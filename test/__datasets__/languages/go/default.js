module.exports = `package main

import (
\t"fmt"
\t"net/http"
\t"io/ioutil"
)

func main() {

\turl := "http://petstore.swagger.io/v2/pet"

\treq, _ := http.NewRequest("POST", url, nil)

\treq.Header.Add("Content-Type", "application/json")

\tres, _ := http.DefaultClient.Do(req)

\tdefer res.Body.Close()
\tbody, _ := ioutil.ReadAll(res.Body)

\tfmt.Println(res)
\tfmt.Println(string(body))

}`;
