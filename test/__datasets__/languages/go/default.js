module.exports =
  'package main\n' +
  '\n' +
  'import (\n' +
  '\t"fmt"\n' +
  '\t"net/http"\n' +
  '\t"io/ioutil"\n' +
  ')\n' +
  '\n' +
  'func main() {\n' +
  '\n' +
  '\turl := "http://petstore.swagger.io/v2/pet"\n' +
  '\n' +
  '\treq, _ := http.NewRequest("POST", url, nil)\n' +
  '\n' +
  '\treq.Header.Add("Content-Type", "application/json")\n' +
  '\n' +
  '\tres, _ := http.DefaultClient.Do(req)\n' +
  '\n' +
  '\tdefer res.Body.Close()\n' +
  '\tbody, _ := ioutil.ReadAll(res.Body)\n' +
  '\n' +
  '\tfmt.Println(res)\n' +
  '\tfmt.Println(string(body))\n' +
  '\n' +
  '}';
