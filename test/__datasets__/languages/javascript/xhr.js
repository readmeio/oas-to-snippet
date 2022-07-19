module.exports = `const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open('GET', 'http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark');
xhr.setRequestHeader('Accept', 'application/xml');

xhr.send(data);`;
