const store = require('./../store')

const signUpSuccessful = function () {
  $('#message').text('Congradulations you have successfuly signed up! ' + response.user.email)
}
const signUpFailed = function () {
  $('#message').text('Sign up failed, please try again! ' + response.user.email)
}
