const getFormFields = require('./../../../lib/get-form-fields')

const onSignUpEmail = function (event) {
  event.preventDefault()
  console.log('yay')
}

module.exports = {
  onSignUpEmail
}
