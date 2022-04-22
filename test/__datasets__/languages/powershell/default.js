module.exports =
  '$headers=@{}\n' +
  '$headers.Add("Content-Type", "application/json")\n' +
  "$response = Invoke-WebRequest -Uri 'http://petstore.swagger.io/v2/pet' -Method POST -Headers $headers";
