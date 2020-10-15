const store = require('../store')
const config = require('../config')
const signUp = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
