import { Then, Given, And} from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000';
const testLanguage = 'Test Language';

Given('I am in the flashcard system page', () => {
    cy.visit(url)
});

Then('I click on Add Language', () => {
    cy.get('#add-language').click();
});

Then('I click on Create flash card', () => {
    cy.get('#add-card').click();
});

And('I type Test language', () => {
    cy.get('#input-language-add').type(testLanguage) ;
});

Then('I click on add', () => {
    cy.get('#add-language-btn-dialog').click();
});

And('I localize it', () => {
    cy.get("#question-input").type('Question word');
    cy.get(`label:contains("${testLanguage}")`).next().type('Translation word');
    cy.get('#create-card-btn-dialog').click();
});