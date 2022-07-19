module.exports = `$headers=@{}
$headers.Add("Accept", "application/xml")
$response = Invoke-RestMethod -Uri 'http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark' -Method GET -Headers $headers`;
