const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUpEmail = event => {
  event.preventDefault()
  console.log('yay it works!')

  const form = event.target

  const data = getFormFields(form)

  api.signUpData(data)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailed)
}

module.exports = {
  onSignUpEmail
}
