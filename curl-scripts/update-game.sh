#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games/:id"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "cell": {
      "index": "'"${index}"'",
      "value": "'"${value}"'",
    },
    "over": "'"${over}"'"
  }
}'

echo
