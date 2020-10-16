const signUpSuccessful = function (response) {
  console.log(response)
}
const signUpFailed = function (error) {
  console.log(error)
}

module.exports = {
  signUpSuccessful,
  signUpFailed
}
