import 'whatwg-fetch'// 所有主要的浏览器（除了Opera Mini和老的IE）都支持Fetch。针对不支持的，可以使用Fetch polyfill
const methods = ['get', 'post', 'put', 'patch', 'del'];

var fetchRequest = {};
methods.forEach(method => {
  fetchRequest[method] = (url, options = {}) => {
    options.method = method;
    options.headers= new Headers({'Accept': 'text/plain'});
    return fetch(url, options)
      .then(res => {
        try {
          return res.json();
        } catch (e) {
          return "";
        } finally {
          return "";
        }
      });
  };
})

module.exports = fetchRequest;
