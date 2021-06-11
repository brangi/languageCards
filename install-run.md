# Requirements

##Install mongodb

- Mac - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#installing-mongodb-4.4-edition-edition (Default configs)
- Linux - https://docs.mongodb.com/manual/administration/install-on-linux/
- Windows - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows-unattended/


##Install npm/node and yarn
- Latest npm/node - https://nodejs.org/en/download/package-manager/
- Yarn - https://classic.yarnpkg.com/en/docs/install

## Set up dependencies

- Install yarn in the root directory run `yarn install` (dependencies for the api)
- cd `app/cards-web/` and run `yarn install` (dependencies for the web app)

# Run web app

In one terminal run the server api with  `yarn start` in the root directory

````
   % yarn start       
   yarn run v1.19.1
   $ nodemon --exec babel-node src/index.js
   [nodemon] 2.0.7
   [nodemon] to restart at any time, enter `rs`
   [nodemon] watching path(s): *.*
   [nodemon] watching extensions: js,mjs,json
   [nodemon] starting `babel-node src/index.js`
   Start
   ==============API Running============
````

In another terminal cd `app/cards-web/` and run the app with `yarn start`

````
Compiled successfully!

You can now view cards-web in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.86.81:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
````


Visit http://localhost:3000

#Test scenarios

To run the BDD test cases with cypress. Run `% sh script/run-test.sh` in the root directory 
Make sure to have the app and api stopped. Electron fires up and the output will be printed in the terminal:

````
 sh script/run-test.sh
yarn run v1.19.1
yarn run v1.19.1
$ nodemon --exec babel-node src/index.js
$ react-scripts start
Compiled successfully!

You can now view cards-web in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.86.81:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    7.4.0                                                                              │
  │ Browser:    Electron 89                                                                        │
  │ Specs:      2 found (AddLanguage.feature, CreateCard.feature)                                  │
  │ Searched:   cypress/integration/AddLanguage.feature, cypress/integration/CreateCard.feature    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  AddLanguage.feature                                                             (1 of 2)


  Add a new language
    ✓ As a content administrator, I want to add a new “supported” language in order to localize new content into new regions that the business is expanding into. (1557ms)


  1 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     AddLanguage.feature                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                                                           


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  CreateCard.feature                                                              (2 of 2)


  Create card
    ✓ As a content administrator, I want to create a flash card and localize it into some of the BigSpring “supported” languages. (1801ms)


  1 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     CreateCard.feature                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                                                           


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  AddLanguage.feature                      00:01        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  CreateCard.feature                       00:01        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:03        2        2        -        -        -  

✨  Done in 37.05s.
````
