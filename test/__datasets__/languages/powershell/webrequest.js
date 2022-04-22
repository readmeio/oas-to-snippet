module.exports = '$headers=@{}\n' +
    '$headers.Add("Accept", "application/xml")\n' +
    "$response = Invoke-WebRequest -Uri 'http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark' -Method GET -Headers $headers";
