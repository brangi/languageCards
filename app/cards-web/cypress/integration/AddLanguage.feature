Feature: Add a new language

  @focus
  Scenario: As a content administrator, I want to add a new “supported” language in order to localize new content into new regions that the business is expanding into.
    Given I am in the flashcard system page
    Then I click on Add Language
    And I type Test language
    Then I click on add
