import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000';
Given('I am in the flashcard page', () => {
    cy.visit(url)
});