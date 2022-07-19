module.exports = `$headers=@{}
$headers.Add("Content-Type", "application/json")
$response = Invoke-WebRequest -Uri 'http://petstore.swagger.io/v2/pet' -Method POST -Headers $headers`;
