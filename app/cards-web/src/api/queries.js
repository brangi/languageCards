import { gql } from 'apollo-boost'

export const QUERY_CURRENT_LANGUAGES = gql`
  query Languages{
    languages{
      id
      language
    }
  }`;

export const QUERY_CURRENT_CARDS = gql`
  query Cards{
      cards {
        id
        question
        translations {
          id
          language {
            id
            language
          }
          answer
          card
        }
      }
  }`;

export const MUTATION_ADD_LANGUAGE = gql`
  mutation AddLanguage($language: String!) {
    setLanguage(language: $language){
        id,
        language
    }
  }
`;


export const MUTATION_ADD_CARD = gql`
  mutation AddCard($question: String!, $translations: [TranslationInput]) {
    setCard(question: $question, translations: $translations ){
        id
        question
        translations {
            answer
            id
        }
    }
  }
`;