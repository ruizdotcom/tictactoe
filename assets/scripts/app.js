'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./extra/events.js')
$(() => {
  // your JS code goes here
  // sign up stuff V
  $('#sign-up-email').on('submit', events.onSignUpEmail)
  $('#sign-in-email').on('submit', events.onSignInEmail)
  $('#change-password-email').on('submit', events.onChangePasswordEmail)
  $('#sign-out-email').on('submit', events.onSignOutEmail)
  // game stuff V
  $('#new-game-create').on('submit', events.onNewGameCreate)
})

// $('#onSignUpEmail').hide('fast')
// $('#row h-100 board').data('hbhb')
