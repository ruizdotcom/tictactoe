const getFormFeilds = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  console.log(event)
  const data = getFormFeilds(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
