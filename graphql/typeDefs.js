import { gql } from 'apollo-server-express';

export const typeDefs = gql`
type Query {
    translations:[Translation]
    cards:[Card]
    card(id: ID!): Card
    languages:[Language]
}
type Translation {
    id: ID
    answer: String
    card: ID
    language: ID
}
type Card {
    id: ID
    question: String
    translations:[TranslationResponse]
}

type TranslationResponse {
    id: ID
    card: ID
    answer: String
    language: LanguageResponse
}

type LanguageResponse {
    id: ID
    language: String
}

type Language {
    id: ID
    language: String
}
type Mutation {
    setLanguage(language: String!): Language
    setCard(question: String!, translations: [TranslationInput]): Card
}
input TranslationInput {
  answer: String
  language: ID
}
`;