const store = require('./../store')
const signUpSuccessful = function (response) {
  $('#message').text('Congratulations ' + response.user.email + '! You have signed up successfully!')
}
const signUpFailed = function () {
  $('#message').text('It looks like something went wrong, please try again!')
}

const signInSuccessful = function (response) {
  $('#message').text('Here is your token: ' + response.user.token)
  store.user = response.user
}
const signInFailed = function () {
  $('#message').text('It looks like something went wrong please try again!')
}

const changePasswordSuccessful = function (response) {
  $('#message').text('You have successfully changed your password!')
}
const changePasswordFailed = function () {
  $('#message').text('It looks like something went wrong, please try again!')
}

module.exports = {
  signUpSuccessful,
  signUpFailed,
  signInSuccessful,
  signInFailed,
  changePasswordSuccessful,
  changePasswordFailed
}
