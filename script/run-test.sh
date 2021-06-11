#!/bin/bash

APP_TEST=true yarn start &

cd app/cards-web/

BROWSER=none yarn start &

##Test cases runs
./node_modules/.bin/cypress run --headed  --spec cypress/integration/*.feature

lsof -ti tcp:3000 | xargs kill

lsof -ti tcp:4001 | xargs kill

mongo flashcards-test --eval "db.dropDatabase()"

exit 0