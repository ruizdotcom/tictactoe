const config = require('./../config')
const signUpData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
module.exports = {
  signUpData
}
