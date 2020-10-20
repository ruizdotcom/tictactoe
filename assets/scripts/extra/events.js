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

const onSignInEmail = event => {
  event.preventDefault()
  console.log('yay! it works!')

  const form = event.target

  const data = getFormFields(form)

  api.signInData(data)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailed)
}

const onChangePasswordEmail = event => {
  event.preventDefault()
  console.log('yay! it works!')

  const form = event.target

  const data = getFormFields(form)

  api.changePasswordData(data)
    .then(ui.changePasswordSuccessful)
    .catch(ui.chanePasswordFailed)
}

const onSignOutEmail = event => {
  event.preventDefault()
  console.log('yay! it works!')

  const form = event.target

  const data = getFormFields(form)

  api.SignOutData(data)
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailed)
}

const onNewGameCreate = event => {
  event.preventDefault()
  console.log('wohoo! it works!')

  const form = event.target

  const data = getFormFields(form)

  api.newGameData(data)
    .then(ui.newGameSuccessful)
    .catch(ui.newGameFailed)
}

const gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

$(() => {
  let playerOne = 'x'
  const onBoxClick = (event) => {
    console.log('click')
    const box = $(event.target)
    box.text(playerOne)
    playerOne = playerOne === 'O' ? 'X' : 'O'
  }
  $('.box').on('click', onBoxClick)
})

module.exports = {
  onSignUpEmail,
  onSignInEmail,
  onChangePasswordEmail,
  onSignOutEmail,
  onNewGameCreate,
  gameBoard
}
