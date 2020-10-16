'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./extra/events.js')
$(() => {
  // your JS code goes here
  $('#sign-up-email').on('submit', events.onSignUpEmail)
})
